import React from 'react';
import main_logo from '../assets/img/main-logo.svg';
export default function Header() {
   return (
      <>
         <header className="header-wrap">
            <a href="/" className="main-logo">
               <img src={main_logo} alt="バイクル"/>
            </a>
            <div className="main-menu">
               <a href="#input-data" className="menu-item">情報入力</a>
               <a href="#achivement" className="menu-item">売却実績</a>
               <a href="#voice" className="menu-item">お客様の声</a>
               <a href="#step" className="menu-item">利用の流れ</a>
               <a href="#structure" className="menu-item">仕組み</a>
               <a href="#reason" className="menu-item">高く売れる理由</a>
            </div>
            <div className="sp-menu">
               <a href="#" className="sp-item">ネットで完結！簡単査定</a>
            </div>
         </header>
      </>
   )
}