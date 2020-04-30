import Head from "next/head";
import Link from "next/link";

export default props => {
  const { children } = props;
  return (
    <div>
      <Head>
        <title>FoodAdvisor + Next.js = 💖</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav>
        <Link href="/">
          <a className="logo">FoodAdvisor</a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Restaurants</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">{children}</div>
      <footer>Footer</footer>
      <style jsx>{`
        .logo {
        }
      `}</style>
      <style jsx global>{`
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};
