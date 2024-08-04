import { NextPage } from "next";
import React from "react";

interface FractionProps {
  numerator: React.ReactNode;
  denominator: React.ReactNode;
}

const Fraction: NextPage<FractionProps> = ({ numerator, denominator }) => {
  return (
    <div className="inline-block relative align-middle text-center">
      <span className="block p-1">{numerator}</span>
      <div className="relative">
        <span className="absolute inset-x-0 top-1/2 border-t border-current w-full"></span>
      </div>
      <span className="block p-1">123{denominator}</span>
    </div>
  );
};

export default Fraction;
