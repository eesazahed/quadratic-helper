import { NextPage } from "next";

interface Props {
  a?: number;
}

const A: NextPage<Props> = ({ a }) => {
  return (
    <span className="font-bold text-red-500">
      {" "}
      {a !== undefined ? a : "a"}{" "}
    </span>
  );
};

export default A;
