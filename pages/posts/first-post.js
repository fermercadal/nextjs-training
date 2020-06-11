import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2>A functional component</h2>
      <nav>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </nav>
    </>
  )
}