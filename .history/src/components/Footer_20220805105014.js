import React from "react";
import utadaImg from "../assets/images/utada.png";
import emailIcon from "../assets/images/email_icon.png";
import wechatIcon from "../assets/images/instagram.svg";
import qrCode from "../assets/images/igAccount.JPG";

export default function Footer(props) {
  return (
    <div className="footer-container container">
      <div className="utada-container col-12 col-md-6">
        <a href="http://uoftada.com" target="_blank" rel="noreferrer">
          <img src={utadaImg} alt="UTADA" />
        </a>
        <code className="utada-text">
          University of Toronto <br /> Electrical and Computer Engineering
          Workshops
        </code>
      </div>
      <div className="footer-contents col-12 col-md-6 m-auto">
        <div className="contacts">
          <div className="contact email">
            <a href="mailto:uoftada@gmail.com" target="_blank" rel="noreferrer">
              <img src={emailIcon} alt="uoftada@gmail.com" />
            </a>
          </div>
          <div
            className="contact wechat"
            data-bs-toggle="modal"
            data-bs-target="#qrCodeModal"
          >
            <img src={wechatIcon} alt="ig" />
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright © 2022 University of Toronto Electrical and Computer
        Engineering Workshops All rights reserved.
      </div>

      {/* <div className="modal modal-dialog-centered fade qr-code-modal"  id="qrCodeModal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="qr-code" aria-hidden="true">
            <img src={qrCode} alt="UT助手" />
        </div> */}
      <div
        className="modal fade qr-code-modal"
        id="qrCodeModal"
        tabIndex="-1"
        aria-labelledby="qrCodeModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <img src={qrCode} alt="igAcc" />
          </div>
        </div>
      </div>
    </div>
  );
}
