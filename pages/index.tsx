import Head from 'next/head';
import Image from 'next/image';

import { Header } from 'src/epic/header';

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <h1>Next App</h1>
      </div>
    </>
  );
}
