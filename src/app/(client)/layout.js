import React from "react";
import "@/assets/style.css"; //alias import
import Image from "next/image";
import image from "@/assets/images/favicon.webp";
import f8 from "@/assets/images/f8-icon.webp";
import fb from "@/assets/images/fb.png";
import github from "@/assets/images/github.png";
import user from "@/assets/images/user.png";
import Link from "next/link";
import clsx from "clsx";
import DarkLight from "./DarkLight";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
const ClientLayout = ({ children }) => {
  return (
    <>
      <header>
        <div className="container ">
          <ul className="nav-left">
            <li>
              <a>
                <Image
                  src={image}
                  alt="favicon"
                  style={{ width: "28px", height: "28px" }}
                />
                <p className="name">Nguyễn Đức Hải</p>
              </a>
              <Link href="/" className="home">
                Home
              </Link>
              <Link href="/blogs" className="blogs">
                Blogs
              </Link>
              <Link href="/contact" className="contact">
                Contact
              </Link>
              {/* <a className="blogs">Blogs</a>
              <a className="contact">Contact</a> */}
            </li>
          </ul>
          <ul className="nav-right">
            <li>
              <a>
                <Image
                  src={f8}
                  alt="ảnh F8"
                  style={{ width: "28px", height: "28px" }}
                />
              </a>
              <a>
                <Image
                  src={fb}
                  alt="ảnh fb"
                  style={{ width: "28px", height: "28px" }}
                />
              </a>
              <a>
                <Image
                  src={github}
                  alt="ảnh github"
                  style={{ width: "28px", height: "28px" }}
                />
              </a>
              <a>
                <Image
                  src={user}
                  alt="ảnh user"
                  style={{ width: "28px", height: "28px" }}
                />
              </a>
              <a>
                <DarkLight />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
      <footer>{/* <h2>FOOTER</h2> */}</footer>
    </>
  );
};

export default ClientLayout;
