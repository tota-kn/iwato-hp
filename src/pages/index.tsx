import Head from "next/head";
import { Layout } from "src/components/layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home</h2>
      <ul>
        <li>
          <a href="https://github.com/iwatos">Github</a>
        </li>
        <li>
          <a href="https://qiita.com/iwato">Qiita</a>
        </li>
        <li>
          <a href="https://zenn.dev/iwatos">Zenn</a>
        </li>
      </ul>

      <h3>Product</h3>
      <ul>
        <li>
          <a href="https://tatetter.netlify.app/">縦ったー</a>
        </li>
      </ul>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
