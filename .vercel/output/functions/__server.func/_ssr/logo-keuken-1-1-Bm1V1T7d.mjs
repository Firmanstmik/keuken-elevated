import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { K as KeyboardArrowDownIcon, d as HomeOutlinedIcon, C as CallOutlinedIcon, c as EmailOutlinedIcon, L as LocalOfferOutlinedIcon, b as CloseIcon, e as KeyboardArrowUpIcon, a as CheckIcon, F as FiberManualRecordIcon, S as SearchIcon, W as WestIcon, E as EastIcon } from "../_libs/mui__icons-material.mjs";
function makeIcon(Icon) {
  return function WrappedIcon(props) {
    const { size = 24, style, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon,
      {
        ...rest,
        style: { fontSize: typeof size === "number" ? `${size}px` : size, ...style }
      }
    );
  };
}
const Check = makeIcon(CheckIcon);
const ChevronDown = makeIcon(KeyboardArrowDownIcon);
const ChevronUp = makeIcon(KeyboardArrowUpIcon);
const X = makeIcon(CloseIcon);
const Circle = makeIcon(FiberManualRecordIcon);
const Search = makeIcon(SearchIcon);
const ArrowLeft = makeIcon(WestIcon);
const ArrowRight = makeIcon(EastIcon);
const HouseIcon = makeIcon(HomeOutlinedIcon);
const House = HouseIcon;
const Mail = makeIcon(EmailOutlinedIcon);
const Phone = makeIcon(CallOutlinedIcon);
const Tag = makeIcon(LocalOfferOutlinedIcon);
const logoKeuken = "/assets/logo-keuken-1-1-DR6Vt5jO.webp";
export {
  ArrowLeft as A,
  Check as C,
  House as H,
  Mail as M,
  Phone as P,
  Search as S,
  Tag as T,
  X,
  ArrowRight as a,
  ChevronDown as b,
  ChevronUp as c,
  Circle as d,
  logoKeuken as l
};
