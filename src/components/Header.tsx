import React from "react";

import { Drawer } from "./Drawer";

// import MailForm from "./MailForm";

interface Props {
  showContactModal: boolean;
  setShowContactModal: Function;
  showHamburgerMenu: boolean;
  setShowHamburgerMenu: Function;
}

export function Header() {
  return (
    <div className="header">
      <div className="header--title">
        <a href="/">
          <div>
            <img
              src="/icon_transparent_header.png"
              alt="icon"
              className="header--title__icon"
            />
            しにゃいの学習帳
          </div>
        </a>
      </div>
      <div className="header--contents">
        <div className="header--contents__anchorBlock">
          <a href="/">Blog</a>
        </div>
        <div className="header--contents__anchorBlock">
          <a href="/profile">Profile</a>
        </div>
        <div className="header--contents__anchorBlock">
          <a href="mailto:me@shinyaigeek.dev">Contact</a>
        </div>
      </div>
      <div className="header--contentsHamburger">
        <div
          id="hamburger--menu"
          className={
            true
              ? "hamburger--menu__trigger"
              : "hamburger--menu__trigger__active"
          }>
          <span className="hamburger--menu__trigger__part" />
          <span className="hamburger--menu__trigger__part" />
          <span className="hamburger--menu__trigger__part" />
        </div>
      </div>
      {/* <MailForm {...props} /> */}
    </div>
  );
}
