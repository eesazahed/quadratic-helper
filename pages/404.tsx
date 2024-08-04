import type { NextPage } from "next";
import Gradient from "../components/Gradient";
import PageHead from "../components/PageHead";

const Custom404: NextPage = () => {
  return (
    <div className="mx-8">
      <PageHead title="404" />

      <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
        <h1 className="my-8 text-7xl text-center font-bold">
          <Gradient text="Page not found" /> 😭
        </h1>
      </main>
    </div>
  );
};

export default Custom404;
