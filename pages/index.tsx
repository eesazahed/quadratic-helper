import type { NextPage } from "next";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import A from "../components/A";
import B from "../components/B";
import C from "../components/C";
import Fraction from "../components/Fraction";
import Sqrt from "../components/Sqrt";
import copy from "../utils/copy";
import Gradient from "../components/Gradient";
import PageHead from "../components/PageHead";

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
  const [b, setB] = useState<number | undefined>(undefined);
  const [c, setC] = useState<number | undefined>(undefined);
  const [discriminant, setDiscriminant] = useState<number | undefined>(
    undefined
  );
  const [root1, setRoot1] = useState<number | undefined>(undefined);
  const [root2, setRoot2] = useState<number | undefined>(undefined);
  const [xValueVertex, setXValueVertex] = useState<number | undefined>(
    undefined
  );
  const [yValueVertex, setYValueVertex] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    setA(formData.a !== undefined ? Number(formData.a) : undefined);
    setB(formData.b !== undefined ? Number(formData.b) : undefined);
    setC(formData.c !== undefined ? Number(formData.c) : undefined);
  }, [formData]);

  useEffect(() => {
    if (a !== undefined && b !== undefined && c !== undefined) {
      const disc = b * b - 4 * a * c;
      setDiscriminant(disc);

      if (disc >= 0) {
        setRoot1((-b + Math.sqrt(disc)) / (2 * a));
        setRoot2((-b - Math.sqrt(disc)) / (2 * a));
      } else {
        setRoot1(undefined);
        setRoot2(undefined);
      }
    }
  }, [a, b, c]);

  useEffect(() => {
    if (root1 !== undefined && root2 !== undefined) {
      setXValueVertex((root1 + root2) / 2);
    }
  }, [root1, root2]);

  useEffect(() => {
    if (
      a !== undefined &&
      b !== undefined &&
      c !== undefined &&
      xValueVertex !== undefined
    ) {
      setYValueVertex(a * (xValueVertex * xValueVertex) + b * xValueVertex + c);
    }
  }, [a, b, c, xValueVertex]);

  return (
    <div className="py-12">
      <PageHead title="Home" />

      <main className="leading-8 text-xl flex flex-col pt-16 min-h-screen">
        <div className="w-2/3 mx-auto">
          <h1 className="text-7xl text-center font-bold">
            <Gradient text="Quadratic Helper" /> 📝
          </h1>
          <div>
            <div className="w-1/2 mx-auto my-16">
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
            {a === undefined || a === 0 ? (
              <div className="mb-8">
                <h1 className="text-center mt-16 mb-8 text-2xl font-bold">
                  If <A /> = 0, the equation cannot be quadratic.
                </h1>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <p className="text-md text-center italic">
                    You can click on the standard, factored, or vertex form
                    equation to copy it. You can paste it into{" "}
                    <a
                      href="https://desmos.com/calculator"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Desmos
                    </a>{" "}
                    to see a visualized graph, or open it within the site.
                  </p>
                  <br />
                  <details>
                    <summary className="cursor-pointer">Open Desmos</summary>
                    <iframe
                      className="w-full h-[80vh] my-8"
                      src="https://www.desmos.com/calculator/"
                    ></iframe>
                  </details>

                  <h1 className="mt-16 mb-4 text-4xl font-bold">
                    Standard form
                  </h1>
                  <h2
                    className="my-4 py-2 px-4 text-2xl cursor-pointer duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-fit rounded-xl"
                    onClick={(e: any) => copy(e.currentTarget.innerText)}
                  >
                    f(x) = {a !== 1 && <A a={a} />}
                    x&#178; + {b !== 1 && <B b={b} />}x + <C c={c} />
                  </h2>
                  <p className="my-4 text-sm">
                    The y-intercept is <C c={c} />
                  </p>
                  {a !== undefined && (
                    <div>
                      {a > 0 ? (
                        <p className="my-4 text-sm">
                          <A /> is positive, it opens upward.
                        </p>
                      ) : (
                        <p className="my-4 text-sm">
                          <A /> is negative, it opens downwards.
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h1 className="mt-16 mb-8 text-4xl font-bold">
                    Find the solutions
                  </h1>
                  <p className="my-4 text-sm">(aka zeros/roots/x-intercepts)</p>
                  <div>
                    <h2 className="my-4 text-2xl">
                      x ={" "}
                      <Fraction
                        numerator={
                          <span>
                            -<B b={b} /> &#177;{" "}
                            <Sqrt>
                              <span>
                                <B b={b} />
                                &#178; - 4(
                                <A a={a} />
                                )(
                                <C c={c} />)
                              </span>
                            </Sqrt>
                          </span>
                        }
                        denominator={
                          <span>
                            2(
                            <A a={a} />)
                          </span>
                        }
                      />
                    </h2>
                  </div>
                  {b === undefined || b === 0 || c === undefined || c === 0 ? (
                    <div>
                      <p className="my-4 text-sm">
                        Values for <B /> and <C /> are needed to solve this
                        quadratic equation.
                      </p>
                    </div>
                  ) : (
                    <div>
                      {discriminant !== undefined && (
                        <div>
                          <p className="my-4 text-sm">
                            The discriminant{" "}
                            <span>
                              <B b={b} />
                              &#178; - 4(
                              <A a={a} />
                              )(
                              <C c={c} />)
                            </span>{" "}
                            has the value of {discriminant}.
                          </p>
                          <h2 className="my-4 text-2xl">
                            x ={" "}
                            <Fraction
                              numerator={
                                <span>
                                  -<B b={b} /> &#177;{" "}
                                  <Sqrt>
                                    <span>{discriminant}</span>
                                  </Sqrt>
                                </span>
                              }
                              denominator={<span>{2 * a}</span>}
                            />
                          </h2>
                          <div>
                            {discriminant < 0 && (
                              <div>
                                <p className="my-4 text-sm">
                                  Since it is less than zero, that means that
                                  the quadratic has no real roots. However, you
                                  can still copy{" "}
                                  <a
                                    className="text-purple-500 cursor-pointer"
                                    onClick={(e: any) =>
                                      copy(e.currentTarget.innerText)
                                    }
                                  >
                                    f(x) = {a !== 1 && <A a={a} />}
                                    x&#178; + {b !== 1 && <B b={b} />}x +{" "}
                                    <C c={c} />
                                  </a>{" "}
                                  and paste it into{" "}
                                  <a
                                    href="https://desmos.com/calculator"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    Desmos
                                  </a>{" "}
                                  to see a visualized graph.
                                </p>
                              </div>
                            )}
                            {discriminant === 0 && (
                              <div>
                                <p className="my-4 text-sm">
                                  Since it is equal to zero, that means that the
                                  quadratic has 1 real root.
                                </p>
                                <h2 className="my-4 text-2xl">
                                  x ={" "}
                                  <Fraction
                                    numerator={
                                      <span>
                                        -<B b={b} />
                                      </span>
                                    }
                                    denominator={<span>{2 * a}</span>}
                                  />{" "}
                                  = {-b / (2 * a)}
                                </h2>
                                <p className="my-4 text-sm">
                                  The solution is{" "}
                                  <span className="text-pink-500">
                                    ({-b / (2 * a)}, 0)
                                  </span>
                                </p>
                                <h1 className="mt-16 mb-8 text-4xl font-bold">
                                  Find the vertex
                                </h1>
                                <p className="my-4 text-sm">
                                  Since there&apos;s only one root, that means
                                  that the root must be the vertex. Therefore,
                                  the vertex is{" "}
                                  <span className="text-pink-500">
                                    ({-b / (2 * a)}, 0).
                                  </span>
                                </p>

                                {-b / (2 * a) !== undefined && (
                                  <div>
                                    <h1 className="mt-16 mb-4 text-4xl font-bold">
                                      Factored form:
                                    </h1>
                                    <h2
                                      className="my-4 py-2 px-4 text-2xl cursor-pointer duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-fit rounded-xl"
                                      onClick={(e: any) =>
                                        copy(e.currentTarget.innerText)
                                      }
                                    >
                                      f(x) = {a !== 1 && <A a={a} />}
                                      (x {-b / (2 * a) < 0 ? "+" : "-"}{" "}
                                      {Math.abs(-b / (2 * a))})&#178;
                                    </h2>
                                  </div>
                                )}
                              </div>
                            )}
                            {discriminant > 0 && (
                              <div>
                                <p className="my-4 text-sm">
                                  Since it is greater than zero, that means that
                                  the quadratic has 2 real roots.
                                </p>
                                <h1 className="mt-8 text-2xl font-bold">
                                  Root 1:
                                </h1>
                                <h2 className="my-4 text-2xl">
                                  x ={" "}
                                  <Fraction
                                    numerator={
                                      <span>
                                        -<B b={b} /> +{" "}
                                        <Sqrt>
                                          <span>{discriminant}</span>
                                        </Sqrt>
                                      </span>
                                    }
                                    denominator={<span>{2 * a}</span>}
                                  />{" "}
                                  ={" "}
                                  <Fraction
                                    numerator={
                                      <span>
                                        -<B b={b} /> + {Math.sqrt(discriminant)}
                                      </span>
                                    }
                                    denominator={<span>{2 * a}</span>}
                                  />
                                </h2>
                                <h2 className="my-4 text-2xl">
                                  ={" "}
                                  <Fraction
                                    numerator={
                                      <span>
                                        {-b + Math.sqrt(discriminant)}
                                      </span>
                                    }
                                    denominator={<span>{2 * a}</span>}
                                  />{" "}
                                  = {root1}
                                </h2>
                                <h1 className="mt-8 text-2xl font-bold">
                                  Root 2:
                                </h1>
                                <h2 className="my-4 text-2xl">
                                  x ={" "}
                                  <Fraction
                                    numerator={
                                      <span>
                                        -<B b={b} /> -{" "}
                                        <Sqrt>
                                          <span>{discriminant}</span>
                                        </Sqrt>
                                      </span>
                                    }
                                    denominator={<span>{2 * a}</span>}
                                  />{" "}
                                  ={" "}
                                  <Fraction
                                    numerator={
                                      <span>
                                        -<B b={b} /> - {Math.sqrt(discriminant)}
                                      </span>
                                    }
                                    denominator={<span>{2 * a}</span>}
                                  />
                                </h2>
                                <h2 className="my-4 text-2xl">
                                  ={" "}
                                  <Fraction
                                    numerator={
                                      <span>
                                        {-b - Math.sqrt(discriminant)}
                                      </span>
                                    }
                                    denominator={<span>{2 * a}</span>}
                                  />{" "}
                                  = {root2}
                                </h2>
                                <p className="my-4 text-sm">
                                  The solutions are{" "}
                                  <span className="text-pink-500">
                                    ({root1}, 0)
                                  </span>{" "}
                                  and{" "}
                                  <span className="text-pink-500">
                                    ({root2}, 0)
                                  </span>
                                </p>
                                {root1 !== undefined && root2 !== undefined && (
                                  <div>
                                    <h1 className="mt-16 mb-4 text-4xl font-bold">
                                      Factored form:
                                    </h1>
                                    <h2
                                      className="my-4 py-2 px-4 text-2xl cursor-pointer duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-fit rounded-xl"
                                      onClick={(e: any) =>
                                        copy(e.currentTarget.innerText)
                                      }
                                    >
                                      f(x) = {a !== 1 && <A a={a} />}
                                      (x {root1 < 0 ? "+" : "-"}{" "}
                                      {Math.abs(root1)}
                                      )(x {root2 < 0 ? "+" : "-"}{" "}
                                      {Math.abs(root2)})
                                    </h2>
                                  </div>
                                )}

                                {root1 !== undefined && root2 !== undefined && (
                                  <div>
                                    <h1 className="mt-16 mb-8 text-4xl font-bold">
                                      Find the vertex
                                    </h1>
                                    <p className="my-4 text-sm">
                                      Given the solutions are are ({root1}, 0)
                                      and ({root2}, 0), we can find the x-value
                                      of the vertex by getting the midpoint of
                                      both of the x-values of the solutions.
                                      <br />
                                      <br />
                                      This can be done by adding them and
                                      dividing them by 2.
                                    </p>
                                    <h2 className="my-4 text-2xl">
                                      {root1} + {root2} = {root1 + root2}
                                    </h2>
                                    <h2 className="my-4 text-2xl">
                                      {root1 + root2} / 2 = {xValueVertex}
                                    </h2>
                                    {xValueVertex !== undefined && (
                                      <div>
                                        <p className="my-4 text-sm">
                                          We know that the x-value of the vertex
                                          is {xValueVertex}. Now, we just need
                                          to plug it in the equation in standard
                                          form.
                                        </p>
                                        <h2 className="my-4 text-2xl">
                                          f({xValueVertex}) = <A a={a} />(
                                          {xValueVertex})&#178; + <B b={b} />(
                                          {xValueVertex}) + <C c={c} />
                                        </h2>
                                        <h2 className="my-4 text-2xl">
                                          = <A a={a} />(
                                          {xValueVertex * xValueVertex}) +{" "}
                                          <B b={b * xValueVertex} /> +{" "}
                                          <C c={c} />
                                        </h2>
                                        <h2 className="my-4 text-2xl">
                                          ={" "}
                                          <A
                                            a={
                                              a * (xValueVertex * xValueVertex)
                                            }
                                          />{" "}
                                          + <B b={b * xValueVertex} /> +
                                          <C c={c} /> = {yValueVertex}
                                        </h2>
                                        <p className="my-4 text-sm">
                                          The y-value of the vertex is{" "}
                                          {yValueVertex}
                                          . <br />
                                          <br />
                                          The vertex is{" "}
                                          <span className="text-pink-500">
                                            ({xValueVertex}, {yValueVertex})
                                          </span>
                                        </p>
                                        {xValueVertex !== undefined &&
                                          yValueVertex !== undefined && (
                                            <div>
                                              <h1 className="mt-16 mb-4 text-4xl font-bold">
                                                Vertex form:
                                              </h1>
                                              <h2
                                                className="my-4 py-2 px-4 text-2xl cursor-pointer duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-fit rounded-xl"
                                                onClick={(e: any) =>
                                                  copy(
                                                    e.currentTarget.innerText
                                                  )
                                                }
                                              >
                                                f(x) = {a !== 1 && <A a={a} />}
                                                (x{" "}
                                                {xValueVertex < 0
                                                  ? "+"
                                                  : "-"}{" "}
                                                {Math.abs(xValueVertex)}
                                                )&#178;{" "}
                                                {yValueVertex < 0
                                                  ? "-"
                                                  : "+"}{" "}
                                                {Math.abs(yValueVertex)}
                                              </h2>
                                            </div>
                                          )}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="mt-16 text-center">
          View the code on{" "}
          <a
            className="text-green-400"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/eesazahed/quadratic-helper"
          >
            GitHub
          </a>
        </p>
        <br />
        <p className="mb-16 text-center">
          Made by{" "}
          <a
            className="text-green-400"
            rel="noreferrer"
            target="_blank"
            href="https://eesa.zahed.ca/"
          >
            Eesa Zahed
          </a>
        </p>
      </main>
    </div>
  );
};

export default Home;
