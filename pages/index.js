import Head from 'next/head';
import styles from '../styles/Home.module.css';
import fs from 'fs';
import ColorSearch from '../components/ColorSearch/colorsearch';

export default function Home({ colors }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Color Search | Tim Eitel</title>
      </Head>

      <main className={styles.main}>
        <ColorSearch />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

// read in colors array
export const getStaticProps = async () => {
  const file = fs.readFileSync(`${process.cwd()}/public/xkcd.json`);
  const { colors } = JSON.parse(file);

  return {
    props: { colors }
  };
};
