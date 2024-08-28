import {
  MdHome,
  MdLock,
  MdOutlineBarChart,
  MdOutlineShoppingCart,
  MdPerson,
} from "react-icons/md";

export const Routes = [
  {
    label: "Main Dashboard",
    icon: MdHome,
    path: "/default",
    isActive: "default",
  },
  {
    label: "NFT Marketplace",
    icon: MdOutlineShoppingCart,
    path: "/nft-marketplace",
    isActive: "nft-marketplace",
  },
  {
    label: "Data Tables",
    icon: MdOutlineBarChart,
    path: "/data-tables",
    isActive: "data-tables",
  },
  {
    label: "Profile",
    icon: MdPerson,
    path: "/profile",
    isActive: "profile",
  },
  {
    label: "Sign In",
    icon: MdLock,
    path: "/sign-in",
    isActive: "sign-in",
  },
  {
    label: "RTL Admin",
    icon: MdHome,
    path: "/rtl-default",
    isActive: "rtl-default",
  },
];
