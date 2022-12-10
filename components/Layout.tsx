import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import Head from "next/head";

const Layout = () => {
  const {} = useTheme;
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const renderThemeChanger = () => {
  //   const currentTheme = theme === "system" ? systemTheme : theme;
  //   if (currentTheme === "dark") {
  //     return (
  //       <SunIcon
  //         className="h-10 w-10 text-yellow-500 "
  //         role="button"
  //         onClick={() => setTheme("light")}
  //       />
  //     );
  //   } else {
  //     return (
  //       <MoonIcon
  //         className="h-10 w-10 text-gray-900 "
  //         role="button"
  //         onClick={() => setTheme("dark")}
  //       />
  //     );
  //   }
  // };

  return (
    <Head>
      <title>Artemis Player</title>
      <meta
        name="description"
        content="Artemis Player developed by faye and barry"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Layout;
