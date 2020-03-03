import { WarningOutlined, CheckCircleOutlined } from "@ant-design/icons";

import React from "react";

export const MailForm = () => {
  return (
    <React.Fragment>
      <div id="layer" className="layer"></div>
      <div id="modal--mailform" className="modal--mailform">
        <div className="mailform--header">
          <div className="mailform--header__title">Contact Me</div>
          <div className="mailform--close">
            <span className="mailform--close__part"></span>
            <span className="mailform--close__part"></span>
          </div>
        </div>
        <div className="mailform--name">
          <span className="mailform--name__text">名前：</span>
          <input
            type="text"
            className="mailform--name__form"
            placeholder="Your Name"
            name="yourName"
            id="mailform--name__form"
          />
        </div>
        <div className="mailform--subject">
          <span className="mailform--subject__text">件名：</span>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="mailform--subject__form"
            id="mailform--subject__form"
          />
        </div>
        <div className="mailform--mailaddress">
          <span className="text">メールアドレス：</span>
          <input
            type="email"
            placeholder="Your Email Address"
            name="yourAddress"
            className="mailform--mailaddress_form"
            id="mailform--mailaddress_form"
          />
        </div>
        <textarea placeholder="Content" id="mailform--textarea" />
      </div>
    </React.Fragment>
  );
};
