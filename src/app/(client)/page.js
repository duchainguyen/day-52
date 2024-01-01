import React from "react";
import "@/assets/style.css"; //alias import
import Image from "next/image";
import duong from "@/assets/images/duong.webp";
import f8 from "@/assets/images/f8.jpg";
const Home = () => {
  return (
    <div className="home-layout">
      <div className="titleName" style={{ padding: "15px 0" }}>
        <h1>Nguyễn Đức Hải</h1>
      </div>
      <div className="profile">
        <div className="profile-left">
          <section>
            <Image
              className="avatar"
              src={f8}
              alt="avatar"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px 0",
              }}
            >
              Front-end developer
            </p>
          </section>
          <section>
            <h2>Các kỹ năng của tôi</h2>

            <ul>
              <li>
                <span>
                  Kỹ năng web: REST API, React.js, Next.js, Redux, Context,
                  CSS3, HTML5, UI/UX, Figma, Photoshop...
                </span>
              </li>
              <li>
                <span>
                  Các kỹ năng khác: Kỹ năng nghiên cứu và tìm kiếm tương đối
                  tốt. Tư duy làm việc, kỹ năng làm việc nhóm tốt so với độ
                  tuổi.
                </span>
              </li>
            </ul>
          </section>
        </div>
        <div className="profile-right" style={{ width: "100%" }}>
          <section
            style={{
              // margin: "15px 0",
              // background: "#FFFFFF",
              border: "1px solid #ccc",
              borderRadius: "15px",
              padding: "20px 15px",
            }}
          >
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              Thông tin liên hệ
            </h2>
            <ul>
              <li>
                <span>Phone: </span>
                <a>0986921104</a>
              </li>
              <li>
                <span>Zalo: </span>
                <a>https://zalo.me/0986921104</a>
              </li>
              <li>
                <span>Email: </span>
                <a>duchainguyen134@gmail.com</a>
              </li>
              <li>
                <span>Facebook: </span>
                <a>https://facebook.com/duchainguyen134</a>
              </li>
              <li>
                <span>Github: </span>
                <a>https://github.com/duchainguyen134</a>
              </li>
            </ul>
          </section>
          <section
            style={{
              margin: "15px 0",
              // background: "#FFFFFF",
              border: "1px solid #ccc",

              borderRadius: "15px",
              padding: "20px 15px",
            }}
          >
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              Các dự án cá nhân
            </h2>
            <ul>
              <li>
                <span>Phone: </span>
                <a>0986921104</a>
              </li>
              <li>
                <span>Zalo: </span>
                <a>https://zalo.me/0986921104</a>
              </li>
              <li>
                <span>Email: </span>
                <a>duchainguyen134@gmail.com</a>
              </li>
              <li>
                <span>Facebook: </span>
                <a>https://facebook.com/duchainguyen134</a>
              </li>
              <li>
                <span>Github: </span>
                <a>https://github.com/duchainguyen134</a>
              </li>
            </ul>
          </section>
          <section
            style={{
              margin: "15px 0",
              border: "1px solid #ccc",

              // background: "#FFFFFF",
              borderRadius: "15px",
              padding: "20px 15px",
            }}
          >
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              Ưu nhược điểm bản thân
            </h2>
            <ul>
              <li>
                <span>Phone: </span>
                <a>0986921104</a>
              </li>
              <li>
                <span>Zalo: </span>
                <a>https://zalo.me/0986921104</a>
              </li>
              <li>
                <span>Email: </span>
                <a>duchainguyen134@gmail.com</a>
              </li>
              <li>
                <span>Facebook: </span>
                <a>https://facebook.com/duchainguyen134</a>
              </li>
              <li>
                <span>Github: </span>
                <a>https://github.com/duchainguyen134</a>
              </li>
            </ul>
          </section>
          <section
            style={{
              border: "1px solid #ccc",
              margin: "15px 0",
              // background: "#FFFFFF",
              borderRadius: "15px",
              padding: "20px 15px",
            }}
          >
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              Sở thích cá nhân
            </h2>
            <ul>
              <li>
                <span>Phone: </span>
                <a>0986921104</a>
              </li>
              <li>
                <span>Zalo: </span>
                <a>https://zalo.me/0986921104</a>
              </li>
              <li>
                <span>Email: </span>
                <a>duchainguyen134@gmail.com</a>
              </li>
              <li>
                <span>Facebook: </span>
                <a>https://facebook.com/duchainguyen134</a>
              </li>
              <li>
                <span>Github: </span>
                <a>https://github.com/duchainguyen134</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
