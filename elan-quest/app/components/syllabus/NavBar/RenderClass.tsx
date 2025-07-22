import { Class6, Class7, Class8, Class9, Class10 } from "../Class";

interface Props {
  activeNav: number;
}

export default function RenderClass({ activeNav }: Props) {
  console.log("hello this is the renderclass function");
  switch (activeNav) {
    case 1:
      return <Class6 />;
    case 2:
      return <Class7 />;
    case 3:
      return <Class8 />;
    case 4:
      return <Class9 />;
    case 5:
      return <Class10 />;
    default:
      return null;
  }
}
