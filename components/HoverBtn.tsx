import { NextPage } from "next";
import copy from "../utils/copy";

interface Props {
  children: React.ReactNode;
}

const HoverBtn: NextPage<Props> = ({ children }) => {
  return (
    <h2
      className="my-4 py-2 px-4 text-2xl cursor-pointer duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-fit rounded-xl"
      onClick={(e: any) => copy(e.currentTarget.innerText)}
    >
      {children}
    </h2>
  );
};

export default HoverBtn;
