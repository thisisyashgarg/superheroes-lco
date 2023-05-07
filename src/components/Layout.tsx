import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Layout for the entire app so that we don't have to repeat the navbar and footer
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
