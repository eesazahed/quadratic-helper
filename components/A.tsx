import { NextPage } from "next";

interface Props {
  a?: number;
}

const A: NextPage<Props> = ({ a }) => {
  return <p className="inline font-bold text-red-500 px-1">{a || "a"}</p>;
};

export default A;
