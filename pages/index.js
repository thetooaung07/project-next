import Head from "next/head";
import Image from "next/image";
import IntroCard from "../components/HomePage/IntroCard";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div>
      <Head>
        <script async src="https://unpkg.com/feather-icons"></script>
      </Head>
      <IntroCard></IntroCard>
    </div>
  );
}
