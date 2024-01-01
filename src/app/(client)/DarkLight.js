"use client";
import React from "react";
import Image from "next/image";
import darkmode from "@/assets/images/dark-mode.svg";
import lightmode from "@/assets/images/light-mode.svg";
// import night from "@/assets/images/night-mode.png";
// import light from "@/assets/images/lightt.png";
import { useTheme } from "next-themes";
const DarkLight = () => {
  const { theme, setTheme } = useTheme();
  const themeImages = {
    dark: darkmode,
    light: lightmode,
  };
  return (
    <>
      <Image
        src={themeImages[theme]}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </>
  );
};

export default DarkLight;
