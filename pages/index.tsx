import type { NextPage } from "next";
import Head from "next/head";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import A from "../components/A";
import B from "../components/B";
import C from "../components/C";
import gcfOfThreeNumbers from "../utils/gcfOfThreeNumbers";

interface FormDataType {
  a?: number;
  b?: number;
  c?: number;
}

const Home: NextPage = () => {
  const [formData, setFormData] = useState<FormDataType>({
    a: undefined,
    b: undefined,
    c: undefined,
  });

  const [GCF, setGCF] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (formData.a && formData.b && formData.c) {
      setGCF(gcfOfThreeNumbers(formData.a, formData.b, formData.c));
    } else {
      setGCF(undefined);
    }
  }, [formData]);

  return (
    <div className="mx-8">
      <Head>
        <title>Quadratic Helper</title>
      </Head>
      <main className="leading-8 text-xl flex flex-col pt-16 min-h-screen">
        <div className="w-1/2 mx-auto">
          <h1 className="text-7xl text-center font-bold">Quadratic Helper</h1>
          <div className="w-1/2 mx-auto">
            <div className="my-16">
              <Input
                label="a:"
                type="number"
                placeholder="a"
                parentData={formData.a}
                updateParent={(e: number) => setFormData({ ...formData, a: e })}
              />
              <Input
                label="b:"
                type="number"
                placeholder="b"
                parentData={formData.b}
                updateParent={(e: number) => setFormData({ ...formData, b: e })}
              />
              <Input
                label="c:"
                type="number"
                placeholder="c"
                parentData={formData.c}
                updateParent={(e: number) => setFormData({ ...formData, c: e })}
              />
            </div>
            <div className="mb-8">
              <h1 className="my-4 text-4xl font-bold">Standard form</h1>
              <h2 className="my-2 text-2xl">
                f(x) =
                <A a={formData.a} />x<sup>2</sup> +
                <B b={formData.b} />x +
                <C c={formData.c} />
              </h2>
              <p className="my-4 text-sm">
                The y-intercept is <C c={formData.c} />
              </p>
            </div>

            {formData.a && formData.b && formData.c && (
              <div>
                <div className="mb-8">
                  <h1 className="my-4 text-4xl font-bold">Factored form</h1>
                  <p className="my-4 text-sm">
                    First, f(x) will be set to 0 to find the zeros of the
                    equation.
                  </p>
                  <h2 className="my-2 text-2xl">
                    0 =
                    <A a={formData.a} />x<sup>2</sup> +
                    <B b={formData.b} />
                    x +
                    <C c={formData.c} />
                  </h2>
                  <p className="my-4 text-sm">
                    Then, the equation will be factored.
                    <br />
                    GCF in this equation: <b>{GCF}</b>
                  </p>
                  {GCF !== 1 ? (
                    <div>
                      <h2 className="my-2 text-2xl">
                        0 = {GCF}
                        <A a={formData.a} />x<sup>2</sup> +
                        <B b={formData.b} />
                        x +
                        <C c={formData.c} />
                      </h2>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
