"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ConfigSelection = {
  id: string;
  name: string;
  color: string;
};

export type ConfigState = {
  brand: string | null;
  brandName: string | null;
  style: string | null;
  styleName: string | null;
  selections: Record<string, ConfigSelection>;
  budget: string | null;
};

type ConfiguratorContextValue = {
  config: ConfigState;
  setBrand: (id: string, name: string) => void;
  setStyle: (id: string, name: string) => void;
  setSelection: (categoryId: string, optionId: string, name: string, color: string) => void;
  setBudget: (budget: string) => void;
  resetConfig: () => void;
};

const STORAGE_KEY = "kc-master-config";

const defaultConfig: ConfigState = {
  brand: null,
  brandName: null,
  style: null,
  styleName: null,
  selections: {},
  budget: null,
};

const ConfiguratorContext = createContext<ConfiguratorContextValue | null>(null);

export function ConfiguratorProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ConfigState>(defaultConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as ConfigState;
      setConfig({
        ...defaultConfig,
        ...parsed,
        selections: parsed.selections ?? {},
      });
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [config]);

  const setBrand = useCallback((id: string, name: string) => {
    setConfig((prev) => ({
      ...prev,
      brand: id,
      brandName: name,
      style: prev.style,
      styleName: prev.styleName,
    }));
  }, []);

  const setStyle = useCallback((id: string, name: string) => {
    setConfig((prev) => ({
      ...prev,
      style: id,
      styleName: name,
    }));
  }, []);

  const setSelection = useCallback(
    (categoryId: string, optionId: string, name: string, color: string) => {
      setConfig((prev) => ({
        ...prev,
        selections: {
          ...prev.selections,
          [categoryId]: { id: optionId, name, color },
        },
      }));
    },
    [],
  );

  const setBudget = useCallback((budget: string) => {
    setConfig((prev) => ({
      ...prev,
      budget,
    }));
  }, []);

  const resetConfig = useCallback(() => {
    setConfig(defaultConfig);
  }, []);

  const value = useMemo<ConfiguratorContextValue>(
    () => ({
      config,
      setBrand,
      setStyle,
      setSelection,
      setBudget,
      resetConfig,
    }),
    [config, resetConfig, setBrand, setBudget, setSelection, setStyle],
  );

  return <ConfiguratorContext.Provider value={value}>{children}</ConfiguratorContext.Provider>;
}

export function useConfigurator() {
  const value = useContext(ConfiguratorContext);

  if (!value) {
    throw new Error("useConfigurator must be used within ConfiguratorProvider");
  }

  return value;
}
