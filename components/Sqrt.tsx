import { NextPage } from "next";
import React from "react";

interface SqrtProps {
  children: React.ReactNode;
}

const Sqrt: NextPage<SqrtProps> = ({ children }) => {
  return (
    <p className="inline-flex items-center text-lg">
      <span className="font-bold">&#8730;</span>
      <span className="border-t border-current px-1">{children}</span>
    </p>
  );
};

export default Sqrt;
