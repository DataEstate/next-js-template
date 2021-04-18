import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Welcome to the Data Estate Template</h1>
    <Link href="/sample">Go to sample page</Link>
    <br />
    <Link href="/spa">Go to the SPA pages</Link>
  </div>
);

export default Home;
