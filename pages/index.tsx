import type { NextPage } from "next";
import Head from "next/head";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import A from "../components/A";
import B from "../components/B";
import C from "../components/C";
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
    if (formData.a) setA(Number(formData.a));
  }, [formData.a]);
  const [b, setB] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (formData.b) setB(Number(formData.b));
  }, [formData.b]);
  const [c, setC] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (formData.c) setC(Number(formData.c));
  }, [formData.c]);

  const [discriminant, setDiscriminant] = useState<number | undefined>(
    undefined
  );
  useEffect(() => {
    if (a !== undefined && b !== undefined && c !== undefined)
      setDiscriminant(b * b - 4 * a * c);
  }, [a, b, c]);

  const [root1, setRoot1] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (a !== undefined && b !== undefined && discriminant !== undefined)
      setRoot1((-b + Math.sqrt(discriminant)) / (2 * a));
  }, [discriminant]);
  const [root2, setRoot2] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (a !== undefined && b !== undefined && discriminant !== undefined)
      setRoot2((-b - Math.sqrt(discriminant)) / (2 * a));
  }, [discriminant]);

  const [xValueVertex, setXValueVertex] = useState<number | undefined>(
    undefined
  );
  useEffect(() => {
    if (root1 !== undefined && root2 !== undefined)
      setXValueVertex((root1 + root2) / 2);
  }, [root1, root2]);

  return (
    <div className="mx-8">
      <Head>
        <title>Quadratic Helper</title>
      </Head>
      <main className="leading-8 text-xl flex flex-col pt-16 min-h-screen">
        <div className="w-1/2 mx-auto">
          <h1 className="text-7xl text-center font-bold">Quadratic Helper</h1>
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
            {a === 0 ? (
              <div className="mb-8">
                <h1 className="my-8 text-2xl font-bold">
                  If <A /> = 0, the equation cannot be quadratic.
                </h1>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h1 className="my-8 text-4xl font-bold">Standard form</h1>
                  <h2 className="my-4 text-2xl">
                    f(x) =
                    <A a={a} />x<sup>2</sup> +
                    <B b={b} />x +
                    <C c={c} />
                  </h2>
                  <p className="my-4 text-sm">
                    The y-intercept is <C c={c} />
                  </p>
                  {a && a > 0 ? (
                    <p className="my-4 text-sm">
                      <A /> is positive, it opens upward.
                    </p>
                  ) : (
                    <p className="my-4 text-sm">
                      <A /> is negative, it opens downwards.
                    </p>
                  )}
                </div>

                <div className="mb-8">
                  <h1 className="my-8 text-4xl font-bold">
                    Find the solutions
                  </h1>
                  <p className="my-5 4 text-sm">
                    (aka zeros/roots/x-intercepts)
                  </p>
                  <div>
                    <h2 className="my-4 text-2xl">
                      x ={" "}
                      <Fraction
                        numerator={
                          <span>
                            -<B b={b} /> &#177;{" "}
                            <Sqrt
                              children={
                                <span>
                                  <B b={b} />
                                  <sup>2</sup> - 4(
                                  <A a={a} />) (<C c={c} />)
                                </span>
                              }
                            />
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
                  {a !== undefined &&
                    b !== undefined &&
                    c !== undefined &&
                    discriminant !== undefined && (
                      <div>
                        <p className="my-4 text-sm">
                          The discriminant{" "}
                          <span>
                            <B b={b} />
                            <sup>2</sup> - 4(
                            <A a={a} />) (<C c={c} />)
                          </span>{" "}
                          has the value of {discriminant}.
                        </p>
                        <h2 className="my-4 text-2xl">
                          x ={" "}
                          <Fraction
                            numerator={
                              <span>
                                -<B b={b} /> &#177;{" "}
                                <Sqrt children={<span>{discriminant}</span>} />
                              </span>
                            }
                            denominator={<span>{2 * a}</span>}
                          />
                        </h2>
                        <div>
                          {discriminant < 0 && (
                            <div>
                              <p className="my-4 text-sm">
                                Since it is less than zero, that means that the
                                quadratic has no real roots.
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
                              <h1 className="my-8 text-4xl font-bold">
                                Find the vertex
                              </h1>
                              <p className="my-4 text-sm">
                                Since there&apos;s only one root, that means
                                that the root must be the vertex. Therefore, the
                                vertex is{" "}
                                <span className="text-pink-500">
                                  ({-b / (2 * a)}, 0).
                                </span>
                              </p>
                            </div>
                          )}
                          {discriminant > 0 && (
                            <div>
                              <p className="my-4 text-sm">
                                Since it is greater than zero, that means that
                                the quadratic has 2 real roots.
                              </p>
                              <h1 className="mt-8 text-3xl">Root 1:</h1>
                              <h2 className="my-4 text-2xl">
                                x ={" "}
                                <Fraction
                                  numerator={
                                    <span>
                                      -<B b={b} /> +{" "}
                                      <Sqrt
                                        children={<span>{discriminant}</span>}
                                      />
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
                                    <span>{-b + Math.sqrt(discriminant)}</span>
                                  }
                                  denominator={<span>{2 * a}</span>}
                                />{" "}
                                = {root1}
                              </h2>
                              <h1 className="mt-8 text-3xl">Root 2:</h1>
                              <h2 className="my-4 text-2xl">
                                x ={" "}
                                <Fraction
                                  numerator={
                                    <span>
                                      -<B b={b} /> -{" "}
                                      <Sqrt
                                        children={<span>{discriminant}</span>}
                                      />
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
                                    <span>{-b - Math.sqrt(discriminant)}</span>
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
                                  <h1 className="my-8 text-4xl font-bold">
                                    Find the vertex
                                  </h1>
                                  <p className="my-4 text-sm">
                                    Given the solutions are are ({root1}, 0) and
                                    ({root2}, 0), we can find the x-value of the
                                    vertex by getting the midpoint of both of
                                    the x-values of the solutions.
                                    <br />
                                    <br />
                                    This can be done by adding them and dividing
                                    them by 2.
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
                                        is {xValueVertex}. Now, we just need to
                                        plug it in the equation in standard
                                        form.
                                      </p>
                                      <h2 className="my-4 text-2xl">
                                        f({xValueVertex}) =
                                        <A a={a} />({xValueVertex})<sup>2</sup>{" "}
                                        +
                                        <B b={b} />({xValueVertex}) +
                                        <C c={c} />
                                      </h2>
                                      <h2 className="my-4 text-2xl">
                                        =
                                        <A a={a} />(
                                        {xValueVertex * xValueVertex}) +
                                        <B b={b * xValueVertex} />
                                        +
                                        <C c={c} />
                                      </h2>
                                      <h2 className="my-4 text-2xl">
                                        =
                                        <A
                                          a={a * (xValueVertex * xValueVertex)}
                                        />
                                        +
                                        <B b={b * xValueVertex} />
                                        +
                                        <C c={c} /> ={" "}
                                        {a * (xValueVertex * xValueVertex) +
                                          b * xValueVertex +
                                          c}
                                      </h2>
                                      <p className="my-4 text-sm">
                                        The y-value of the vertex is{" "}
                                        {a * (xValueVertex * xValueVertex) +
                                          b * xValueVertex +
                                          c}
                                        . <br />
                                        <br />
                                        The vertex is{" "}
                                        <span className="text-pink-500">
                                          ({xValueVertex},{" "}
                                          {a * (xValueVertex * xValueVertex) +
                                            b * xValueVertex +
                                            c}
                                          )
                                        </span>
                                      </p>
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
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
