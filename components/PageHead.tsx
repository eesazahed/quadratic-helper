import { NextPage } from "next";
import Head from "next/head";

interface Props {
  title: string;
}

const PageHead: NextPage<Props> = ({ title }) => {
  return (
    <Head>
      <title>Quadratic Helper | {title}</title>
      <meta name="description" content="Quadratic Helper. Made by Eesa Zahed" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;
