import type { NextPage } from "next";
import Head from "next/head";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import A from "../components/A";
import B from "../components/B";
import C from "../components/C";
import gcfOfThreeNumbers from "../utils/gcfOfThreeNumbers";
import isFactorable from "../utils/isFactorable";
import Fraction from "../components/Fraction";
import Sqrt from "../components/Sqrt";

interface FormDataType {
  a?: string;
  b?: string;
  c?: string;
}

const Home: NextPage = () => {
  const [formData, setFormData] = useState<FormDataType>({
    a: undefined,
    b: undefined,
    c: undefined,
  });

  const [a, setA] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (formData.a) setA(parseInt(formData.a));
  }, [formData.a]);
  const [b, setB] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (formData.b) setB(parseInt(formData.b));
  }, [formData.b]);
  const [c, setC] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (formData.c) setC(parseInt(formData.c));
  }, [formData.c]);

  const [GCF, setGCF] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (a && a !== 0 && b && b !== 0 && c && c !== 0) {
      setGCF(gcfOfThreeNumbers(a, b, c));
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
                updateParent={(e: string) => setFormData({ ...formData, a: e })}
              />
              <Input
                label="b:"
                type="number"
                placeholder="b"
                parentData={formData.b}
                updateParent={(e: string) => setFormData({ ...formData, b: e })}
              />
              <Input
                label="c:"
                type="number"
                placeholder="c"
                parentData={formData.c}
                updateParent={(e: string) => setFormData({ ...formData, c: e })}
              />
            </div>

            {a === 0 ? (
              <div className="mb-8">
                <h1 className="my-4 text-2xl font-bold">
                  If a = 0, the equation cannot be quadratic.
                </h1>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h1 className="my-4 text-4xl font-bold">Standard form</h1>
                  <h2 className="my-2 text-2xl">
                    f(x) =
                    <A a={a} />x<sup>2</sup> +
                    <B b={b} />x +
                    <C c={c} />
                  </h2>
                  <p className="my-4 text-sm">
                    The y-intercept is <C c={c} />
                  </p>
                </div>

                <div className="mb-8">
                  <h1 className="my-4 text-4xl font-bold">
                    Find the solutions
                  </h1>
                  <p className="my-5 4 text-sm">
                    (aka zeros/roots/x-intercepts)
                  </p>
                  <h2 className="my-2 text-2xl">
                    x ={" "}
                    <Fraction
                      numerator={
                        <span>
                          -<B b={b} /> &#177;{" "}
                          <Sqrt
                            children={
                              <span>
                                <B b={b} />
                              </span>
                            }
                          />
                        </span>
                      }
                      denominator={<span>a</span>}
                    />
                  </h2>
                </div>
              </div>
            )}

            {/* 
            {a && b && c && (
              <div>
                <div className="mb-8">
                  <h1 className="my-4 text-4xl font-bold">Factored form</h1>
                  <p className="my-4 text-sm">
                    First, f(x) will be set to 0 to find the zeros of the
                    equation.
                  </p>
                  <h2 className="my-2 text-2xl">
                    0 =
                    <A a={a} />x<sup>2</sup> +
                    <B b={b} />
                    x +
                    <C c={c} />
                  </h2>
                  <p className="my-4 text-sm">
                    Then, the equation will be factored.
                    <br />
                    GCF in this equation: <b>{GCF || 0}</b>
                  </p>
                  {GCF && GCF !== 1 ? (
                    <div>
                      <h2 className="my-2 text-2xl">
                        0 = {GCF}
                        (
                        <A a={a} />x<sup>2</sup> +
                        <B b={b} />
                        x +
                        <C c={c} />)
                      </h2>
                    </div>
                  ) : (
                    <div>
                      <h2 className="my-2 text-2xl">
                        0 =
                        <A a={a} />x<sup>2</sup> +
                        <B b={b} />
                        x +
                        <C c={c} />
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            )} */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
