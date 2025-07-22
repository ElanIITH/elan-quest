import { Dispatch, SetStateAction } from "react";
import { NavBar1, NavBar2, NavBar3, NavBar4, NavBar5 } from ".";

interface Props {
  activeNav: number;
  setActiveNav: Dispatch<SetStateAction<number>>;
}

export default function RenderNavBar({ activeNav, setActiveNav }: Props) {
  switch (activeNav) {
    case 1:
      return <NavBar1 setActiveNav={setActiveNav} />;
    case 2:
      return <NavBar2 setActiveNav={setActiveNav} />;
    case 3:
      return <NavBar3 setActiveNav={setActiveNav} />;
    case 4:
      return <NavBar4 setActiveNav={setActiveNav} />;
    case 5:
      return <NavBar5 setActiveNav={setActiveNav} />;
    default:
      return null;
  }
}
