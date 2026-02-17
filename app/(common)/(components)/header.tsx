"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const switchTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <header>
      <p>Where in the world?</p>
      <button className="clickable" onClick={() => switchTheme()}>
        Dark Mode
      </button>
    </header>
  );
}
