import type { ComponentType, SVGAttributes } from "react";
import {
  TickCircle,
  ArrowDown2,
  ArrowUp2,
  ArrowLeft2,
  ArrowRight2,
  CloseCircle,
  SidebarLeft,
  RecordCircle,
  RowVertical,
  More,
  Minus as IconsaxMinus,
  SearchNormal1,
  Home2,
  Sms,
  Call,
  Award as IconsaxAward,
  Diamonds as IconsaxDiamonds,
  Headphone as IconsaxHeadphone,
  ShieldTick,
  Tag as IconsaxTag,
  TruckFast,
  HamburgerMenu,
  MouseCircle as IconsaxMouseCircle,
} from "@zethictech/iconsax-react";

type IconProps = SVGAttributes<SVGSVGElement> & {
  size?: string | number;
  variant?: "Linear" | "Outline" | "Broken" | "Bold" | "Bulk" | "TwoTone";
};

function makeIcon(Icon: ComponentType<IconProps>) {
  return function WrappedIcon(props: IconProps) {
    const {
      size = 24,
      style,
      color = "currentColor",
      fontSize: _fontSize,
      strokeWidth: _strokeWidth,
      variant = "Linear",
      ...rest
    } = props;

    return <Icon {...rest} size={size} color={color} variant={variant} style={style} />;
  };
}

export const Check = makeIcon(TickCircle);
export const ChevronDown = makeIcon(ArrowDown2);
export const ChevronDownIcon = ChevronDown;
export const ChevronUp = makeIcon(ArrowUp2);
export const ChevronLeft = makeIcon(ArrowLeft2);
export const ChevronLeftIcon = ChevronLeft;
export const ChevronRight = makeIcon(ArrowRight2);
export const ChevronRightIcon = ChevronRight;
export const X = makeIcon(CloseCircle);
export const PanelLeft = makeIcon(SidebarLeft);
export const Circle = makeIcon(RecordCircle);
export const GripVertical = makeIcon(RowVertical);
export const MoreHorizontal = makeIcon(More);
export const MinusIcon = makeIcon(IconsaxMinus);
export const Minus = MinusIcon;
export const Search = makeIcon(SearchNormal1);
export const ArrowDown = makeIcon(ArrowDown2);
export const ArrowLeft = makeIcon(ArrowLeft2);
export const ArrowRight = makeIcon(ArrowRight2);
export const HouseIcon = makeIcon(Home2);
export const House2 = HouseIcon;
export const House = HouseIcon;
export const Mail = makeIcon(Sms);
export const Phone = makeIcon(Call);
export const Award = makeIcon(IconsaxAward);
export const Diamonds = makeIcon(IconsaxDiamonds);
export const Headphone = makeIcon(IconsaxHeadphone);
export const ShieldCheck = makeIcon(ShieldTick);
export const Tag = makeIcon(IconsaxTag);
export const Truck = makeIcon(TruckFast);
export const Menu = makeIcon(HamburgerMenu);
export const MouseCircle = makeIcon(IconsaxMouseCircle);
