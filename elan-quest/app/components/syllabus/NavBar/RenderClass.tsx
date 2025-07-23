import {
  Syllabus6,
  Syllabus7,
  Syllabus8,
  Syllabus9,
  Syllabus10,
} from "../Syllabi";

interface Props {
  activeNav: number;
}

export default function RenderClass({ activeNav }: Props) {
  switch (activeNav) {
    case 1:
      return <Syllabus6 />;
    case 2:
      return <Syllabus7 />;
    case 3:
      return <Syllabus8 />;
    case 4:
      return <Syllabus9 />;
    case 5:
      return <Syllabus10 />;
    default:
      return null;
  }
}
