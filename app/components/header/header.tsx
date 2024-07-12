import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";
import { CiSearch, CiStar } from "react-icons/ci";
import HeaderTop from "./header-top";
export default function Header() {
  return (
    <>
      <header className={style.header}>
        <HeaderTop />
        <div className={style.headerBottom}>
          <nav className="navbar navbar-expand-xl ">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/images/logo.png"
                  alt=""
                  className="img-fluid"
                />
              </a>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-5">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Cryptocurrencies
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Exchanges
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      API
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Learn
                    </a>
                  </li>
                </ul>
              </div>
              <div className={style.headerWishlist}>
                <Link href={"#"}>
                  {" "}
                  <CiStar /> Watchlist
                </Link>
              </div>
              <div className={style.HeaderSearch}>
                <CiSearch />
                <input type="search" placeholder="Search"></input>
                <button type="submit">/</button>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
