import Head from "next/head";
import HomePage from "../components/HomePage";
import NavbarMenu from "../components/NavbarMenu";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <NavbarMenu />
        <HomePage/>
      </main>
      <footer></footer>
    </div>
  );
}
