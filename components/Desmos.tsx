import { NextPage } from "next";
import { useState } from "react";

const Desmos: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details onToggle={(e: any) => setIsOpen(e.target.open)}>
      <summary className="cursor-pointer w-fit hover:underline">
        {isOpen ? "Close Desmos" : "Open Desmos"}
      </summary>
      <iframe
        className="w-full h-[80vh] my-8"
        src="https://www.desmos.com/calculator/"
      ></iframe>
    </details>
  );
};

export default Desmos;
