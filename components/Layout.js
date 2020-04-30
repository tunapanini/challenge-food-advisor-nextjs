import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const useToggleOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  return [isOpen, toggle];
};
export default props => {
  const { children } = props;

  const [isOpen, toggleNavbar] = useToggleOpen(false);

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
        <button className="navbar-toggler" onClick={toggleNavbar}>
          NavBar Toggler
        </button>
        <ul className={`navbar ${isOpen ? "" : "collapse"}`}>
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
        a {
          color: inherit;
          text-decoration: none;
        }
        nav {
          box-sizing: border-box;
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: space-between;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          margin: 0;
          padding: 16px 32px;
          background-color: beige;
        }

        .logo {
          margin: auto 0;
        }

        .navbar {
          list-style-type: none;
          box-sizing: border-box;
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          margin: 0;
          padding: 0;
          max-height: 122px;
          overflow: hidden;
          background-color: inherit;
          transition: 0.5s max-height;
        }

        .navbar.collapse {
          max-height: 0;
        }

        .navbar > li {
          padding: 20px;
        }

        .main {
          box-sizing: border-box;
          margin-top: 60px;
        }

        button.navbar-toggler {
        }
      `}</style>
    </div>
  );
};
