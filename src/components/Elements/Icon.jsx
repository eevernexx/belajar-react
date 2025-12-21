import OverviewSVG from "../../assets/icons/Overview.svg?react";
import TransactionSVG from "../../assets/icons/Transaction.svg?react";
import BalanceSVG from "../../assets/icons/wallet.svg?react";
import BillSVG from "../../assets/icons/Vector.svg?react";
import ExpenseSVG from "../../assets/icons/Expencces.svg?react";
import GoalSVG from "../../assets/icons/Goal.svg?react";
import SettingSVG from "../../assets/icons/Settings.svg?react";
import LogoutSVG from "../../assets/icons/Frame 39997.svg?react";
import AdobeSVG from "../../assets/icons/Adobe.svg?react";
import FigmaSVG from "../../assets/icons/Figma.svg?react";
import FoodSVG from "../../assets/icons/Food.svg?react";
import GamepadSVG from "../../assets/icons/gamepad-2.svg?react";
import HouseSVG from "../../assets/icons/Housing.svg?react";
import MovieSVG from "../../assets/icons/Movie.svg?react";
import OtherSVG from "../../assets/icons/Others.svg?react";
import ShoppingSVG from "../../assets/icons/Shopping.svg?react";
import TransportSVG from "../../assets/icons/Trasnport.svg?react";
import ArrowUpRightSVG from "../../assets/icons/arrow-up-right.svg?react";
import EditSVG from "../../assets/icons/edit.svg?react";
import MastercardSVG from "../../assets/icons/Mastercard.svg?react";
import AwardSVG from "../../assets/icons/Award.svg?react";

// Inline SVG components for missing icons
const DetailSVG = ({ width = 24, height = 24, stroke = "currentColor", ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <circle cx="12" cy="16" r="0.5" />
  </svg>
);

const ChevronRightSVG = ({ width = 24, height = 24, stroke = "currentColor", ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ArrowRightSVG = ({ width = 24, height = 24, stroke = "currentColor", ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ArrowDownSVG = ({ width = 24, height = 24, stroke = "currentColor", ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

const ArrowUpSVG = ({ width = 24, height = 24, stroke = "currentColor", ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const VisaSVG = ({ width = 24, height = 24, fill = "currentColor", ...props }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" fill={fill} {...props}>
    <path d="M44.5 8h-41C2.12 8 1 9.12 1 10.5v27C1 38.88 2.12 40 3.5 40h41c1.38 0 2.5-1.12 2.5-2.5v-27C47 9.12 45.88 8 44.5 8zM20.24 32.5l-3.58-13.5h4.32l1.92 8.64 4.8-8.64h4.56L24.8 32.5h-4.56z" />
  </svg>
);

const TargetSVG = ({ width = 24, height = 24, stroke = "currentColor", ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const EllipsisSVG = ({ width = 24, height = 24, stroke = "currentColor", ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const createIcon =
  (SVG) =>
  ({ size = 24, color = "currentColor", ...props }) =>
    <SVG width={size} height={size} stroke={color} {...props} />;

const createIconWithCustomSize =
  (SVG, defaultSize) =>
  ({ size = defaultSize, color = "currentColor", ...props }) =>
    <SVG width={size} height={size} stroke={color} {...props} />;

const Icon = {
  Overview: createIcon(OverviewSVG),
  Transaction: createIcon(TransactionSVG),
  Balance: createIcon(BalanceSVG),
  Bill: createIcon(BillSVG),
  Expense: createIcon(ExpenseSVG),
  Goal: createIcon(GoalSVG),
  Setting: createIcon(SettingSVG),
  Detail: createIcon(DetailSVG),
  ChevronRight: createIcon(ChevronRightSVG),
  Logout: createIcon(LogoutSVG),
  Adobe: createIcon(AdobeSVG),
  Figma: createIcon(FigmaSVG),
  Food: createIcon(FoodSVG),
  Gamepad: createIcon(GamepadSVG),
  House: createIcon(HouseSVG),
  Movie: createIcon(MovieSVG),
  Other: createIcon(OtherSVG),
  Shopping: createIcon(ShoppingSVG),
  Transport: createIcon(TransportSVG),
  ArrowRight: createIcon(ArrowRightSVG),
  ArrowDown: createIcon(ArrowDownSVG),
  ArrowUp: createIcon(ArrowUpSVG),
  Edit: createIcon(EditSVG),
  Mastercard: createIconWithCustomSize(MastercardSVG, 40),
  Visa: createIconWithCustomSize(VisaSVG, 40),
  Target: createIcon(TargetSVG),
  Award: createIcon(AwardSVG),
  ArrowUpRight: createIcon(ArrowUpRightSVG),
  Ellipsis: createIcon(EllipsisSVG),
};

export default Icon;
