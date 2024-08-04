import { NextPage } from "next";

interface Props {
  b?: number;
}

const B: NextPage<Props> = ({ b }) => {
  return (
    <span className="font-bold text-green-500">
      {b !== undefined ? b : "b"}
    </span>
  );
};

export default B;
