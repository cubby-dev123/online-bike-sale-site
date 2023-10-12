import React from "react";
import footer_logo from '../assets/img/footer-logo.svg';
export default function Footer () {
   return (
      <>
        <footer>
            <a href="#" className="footer-logo">
               <figure>
                  <img src={footer_logo} alt=""/>
               </figure>
            </a>
            <div className="footer-menu">
               <a href="#input-data">情報入力</a>
               <a href="#achivement">売却実績</a>
               <a href="#voice">お客様の声</a>
               <a href="#step">利用の流れ</a>
               <a href="#structure">仕組み</a>
               <a href="#reason">高く売れる理由</a>
            </div>
            <div className="link-part">
               <a href="#" className="company">運営会社</a>
               <a href="#" className="policy">個人情報保護方針</a>
               <a href="#" className="service">利用規約</a>
            </div>
            <p className="copyright">Copyright  © 2023  バイクル Inc. All rights reserved.</p>
      </footer>
      </>
   )
}