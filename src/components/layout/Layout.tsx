import type React from "react";
import MainNavigation from "./MainNavigation";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div>
      <MainNavigation />
      <main style={{ width: "100%", maxWidth: "75rem", margin: "0 auto" }}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
