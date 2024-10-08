import Link from "next/link";//built in component
import Head from "next/head";//builtin component
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> PedroTech Next Tutorial</title>
      </Head>
      <Link href="/about"> About</Link>
      <h1 className={styles.homePageTitle}> Hello World</h1>
    </div>
  );
}

//indes.js is always created in an folder
//as there is no html page in NEXT,head component is imported->it has the same props as it has in html 
