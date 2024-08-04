import { NextPage } from "next";

interface Props {
  c?: number;
}

const C: NextPage<Props> = ({ c }) => {
  return <span className="font-bold text-blue-500 px-1">{c || "c"}</span>;
};

export default C;
