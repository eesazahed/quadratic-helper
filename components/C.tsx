import { NextPage } from "next";

interface Props {
  c?: number;
}

const C: NextPage<Props> = ({ c }) => {
  return (
    <span className="font-bold text-blue-500">{c !== undefined ? c : "c"}</span>
  );
};

export default C;
