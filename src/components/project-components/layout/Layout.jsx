import React from "react";
import Header from "../header/index";
import UseScrollToTop from "../../../hooks/useScrool";
import FooterProject from "../footer/index";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <UseScrollToTop aria-label="Scrool to top of page" />
      <FooterProject />
    </>
  );
}

export default Layout;
