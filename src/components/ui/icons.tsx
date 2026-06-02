import type { SVGAttributes } from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import SouthIcon from "@mui/icons-material/South";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

type IconProps = SVGAttributes<SVGSVGElement> & {
  size?: string | number;
  variant?: "Linear" | "Outline" | "Broken" | "Bold" | "Bulk" | "TwoTone";
};

function makeIcon(Icon: SvgIconComponent) {
  return function WrappedIcon(props: IconProps) {
    const { size = 24, style, ...rest } = props;

    return (
      <Icon
        {...rest}
        style={{ fontSize: typeof size === "number" ? `${size}px` : size, ...style }}
      />
    );
  };
}

export const Check = makeIcon(CheckIcon);
export const ChevronDown = makeIcon(KeyboardArrowDownIcon);
export const ChevronDownIcon = ChevronDown;
export const ChevronUp = makeIcon(KeyboardArrowUpIcon);
export const ChevronLeft = makeIcon(KeyboardArrowLeftIcon);
export const ChevronLeftIcon = ChevronLeft;
export const ChevronRight = makeIcon(KeyboardArrowRightIcon);
export const ChevronRightIcon = ChevronRight;
export const X = makeIcon(CloseIcon);
export const PanelLeft = makeIcon(ViewSidebarOutlinedIcon);
export const Circle = makeIcon(FiberManualRecordIcon);
export const GripVertical = makeIcon(DragIndicatorIcon);
export const MoreHorizontal = makeIcon(MoreHorizIcon);
export const MinusIcon = makeIcon(RemoveIcon);
export const Minus = MinusIcon;
export const Search = makeIcon(SearchIcon);
export const ArrowDown = makeIcon(SouthIcon);
export const ArrowLeft = makeIcon(WestIcon);
export const ArrowRight = makeIcon(EastIcon);
export const HouseIcon = makeIcon(HomeOutlinedIcon);
export const House2 = HouseIcon;
export const House = HouseIcon;
export const Mail = makeIcon(EmailOutlinedIcon);
export const Phone = makeIcon(CallOutlinedIcon);
export const Award = makeIcon(WorkspacePremiumIcon);
export const Diamonds = makeIcon(DiamondOutlinedIcon);
export const Headphone = makeIcon(SupportAgentIcon);
export const ShieldCheck = makeIcon(VerifiedUserOutlinedIcon);
export const Tag = makeIcon(LocalOfferOutlinedIcon);
export const Truck = makeIcon(LocalShippingOutlinedIcon);
export const Menu = makeIcon(MenuIcon);
export const MouseCircle = makeIcon(MouseOutlinedIcon);
