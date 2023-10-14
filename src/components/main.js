import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

import fv_girl from '../assets/img/fv-girl.png';
import left_bike from '../assets/img/left-bike.png';
import right_bike from '../assets/img/right-bike.png';
import right_bike_sp from '../assets/img/right-bike-sp.png';
import line_icon from '../assets/img/line-icon.svg';
import phone_icon from '../assets/img/phone-icon.svg';
import important from '../assets/img/important.svg';
import slick_moto1 from '../assets/img/slick-moto1.svg';
import slick_moto2 from '../assets/img/slick-moto2.svg';
import slick_moto3 from '../assets/img/slick-moto3.svg';
import slick_moto4 from '../assets/img/slick-moto4.svg';
import man from '../assets/img/man.png';
import woman from '../assets/img/woman.png';
import a_moto from '../assets/img/a-moto.png';
import b_moto from '../assets/img/b-moto.png';
import c_moto from '../assets/img/c-moto.png';
import d_moto from '../assets/img/d-moto.png';
import step_one from '../assets/img/step-one.png';
import step_one_sp from '../assets/img/step-one-sp.png';
import step_two from '../assets/img/step-two.png';
import step_two_sp from '../assets/img/step-two-sp.png';
import step_three from '../assets/img/step-three.png';
import step_three_sp from '../assets/img/step-three-sp.png';
import step_1 from '../assets/img/step-1.png';
import step_2 from '../assets/img/step-2.png';
import step_3 from '../assets/img/step-3.png';
import structure from '../assets/img/structure.png';
import one from '../assets/img/1.svg';
import two from '../assets/img/2.svg';
import three from '../assets/img/3.svg';
import money from '../assets/img/money.png';
import reason_girl from '../assets/img/reason-girl.png';
import Slider from "react-slick";




export default function Main () {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      centerPadding: '10px', 
      responsive: [
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
           },
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
   }
   return (
      <>
         <main>

            <section className="fv">
            <figure className="fv-left">
               <img src={fv_girl} alt="写真を送るだけで簡単査定！" />
            </figure>
            <div className="fv-right">
               <p className="estimate"><span className="yellow">バイクの写真</span>を送るだけ!</p>
               <p className="complete"><span className="red">最高額</span>で愛車を買取ります!</p>
               <p className="not-need">現地査定<span className="red">不要!</span></p>
               <div className="bike">
                  <figure className="left-bike">
                  <img src={left_bike} alt="" />
                  </figure>
                  <figure className="right-bike">
                  <img src={right_bike} alt="" />
                  </figure>
               </div>
               <div className="sp-bike">
                  <figure className="right-bike-sp">
                  <img src={right_bike_sp} alt="" />
                  </figure>
               </div>
               <div className="contact-btn">
                  <a href="/" className="btn line-btn">
                  <figure className="icon">
                     <img src={line_icon} alt="LINEで査定依頼" />
                  </figure>
                  <div className="txt">
                     <span>LINEで査定依頼</span>
                  </div>
                  </a>
                  <a href="/" className="btn phone-btn">
                  <figure className="icon">
                     <img src={phone_icon} alt="0120-017-182" />
                  </figure>
                  <div className="txt">
                     <span>0120-017-182</span>
                  </div>
                  </a>
               </div>
            </div>
            </section>


            <section id="input-data">
            <p className="section-title">入力わずか<span className="yellow-color">29秒！</span>全国のバイクを無料査定！</p>
            <div className="wrap bike-info">
               <div className="form-title">
                  <span className="step-1">step1</span>
                  <span className="sub-title">愛車について</span>
               </div>
               <div className="form-content">
                  <form action="#" method="#" className="input-info">
                  <div className="input-item">
                     <label for="メーカー" name="メーカー">
                        <span className="just" id="need1">必須</span>
                        <span>メーカー</span>
                     </label>
                     <select className="select-element" id="bike-maker">
                        <option value="" disabled selected>選択してください</option>
                     </select>
                  </div>
                  <div className="input-item">
                     <label for="車種名" name="車種名">
                        <span className="just" id="need1">必須</span>
                        <span>車種名</span>
                     </label>
                     <select className="select-element" id="bike-type">
                        <option value="" disabled selected>選択してください</option>
                     </select>
                  </div>
                  <div className="input-item">
                     <label for="走行距離" name="走行距離">
                        <span className="just" id="need1">必須</span>
                        <span>走行距離</span>
                     </label>
                     <select className="select-element" id="bike-distance">
                        <option value="" disabled selected>選択してください</option>
                     </select>
                  </div>
                  </form>
               </div>
            </div>
            <div className="wrap customer-info">
               <div className="form-title">
                  <span className="step-1">step2</span>
                  <span className="sub-title">お客様について</span>
               </div>
               <div className="form-content">
                  <form action="#" method="#" className="input-info">
                  <div className="input-item">
                     <label for="お名前" name="お名前">
                        <span className="just" id="need1">必須</span>
                        <span>お名前</span>
                     </label>
                     <input type="text" className="input-element" id="customer-name" />
                  </div>
                  <div className="input-item">
                     <label for="電話番号" name="電話番号">
                        <span className="just" id="need1">必須</span>
                        <span>電話番号</span>
                     </label>
                     <input type="text" className="input-element" id="customer-phone" />
                  </div>
                  <div className="input-item">
                     <label for="郵便番号" name="郵便番号">
                        <span className="just" id="need1">必須</span>
                        <span>郵便番号</span>
                     </label>
                     <input type="text" className="input-element" id="customer-post" />
                  </div>
                  <div className="input-item">
                     <label for="メールアドレス" name="メールアドレス">
                        <span className="just" id="need1">必須</span>
                        <span>メールアドレス</span>
                     </label>
                     <input type="text" className="input-element" id="customer-email" />
                  </div>
                  </form>
               </div>
            </div>
            <button  className="wrap submit-btn" id="submit-btn">
               <span className="free">無料</span><span className="twenty-five">次へ(25秒で完了)</span>
            </button>
            <div className="wrap important">
               <p className="first">
                  <span><img src={important} alt="" /></span>個人情報は、お客様が売却を決定されたときのみ買取先に公開されます。<br className="pc" />
               当コンテンツの<a href="#" className="red-text">利用規約</a>に同意の上、<br className="sp" />ご利用ください。</p>
            </div>
            </section>


            <section id="achivement">
            <p className="section-title"><span className="yellow-color">続々売れてる！</span>新着売却実績</p>
            <Slider {...settings} className="section-content wrap">
               <div className="moto-item">
                     <figure className="moto1">
                        <img src={slick_moto1} alt="" />
                     </figure>
                     <div className="txt">
                        <p className="moto-type">CRF250L s</p>
                        <p className="moto-price">50.5万円</p>
                        <p className="moto-date">08/02 20:32</p>
                     </div>
                  </div>
                  <div className="moto-item">
                     <figure className="moto2">
                        <img src={slick_moto2} alt="" />
                     </figure>
                     <div className="txt2">
                        <p className="moto-type">スーパーカブC125</p>
                        <p className="moto-price">24.6万円</p>
                        <p className="moto-date">08/02 18:43</p>
                     </div>
                  </div>
                  <div className="moto-item">
                     <figure className="moto3">
                        <img src={slick_moto3} alt="" />
                     </figure>
                     <div className="txt3">
                        <p className="moto-type">ジャンゴ125</p>
                        <p className="moto-price">11.9万円
                        </p>
                        <p className="moto-date">08/02 18:02</p>
                     </div>
                  </div>
                  <div className="moto-item">
                     <figure className="moto4">
                        <img src={slick_moto4} alt="" />
                     </figure>
                     <div className="txt">
                        <p className="moto-type">690SMC R
                        </p>
                        <p className="moto-price">11.9万円
                        </p>
                        <p className="moto-date">08/02 18:02</p>
                     </div>
                  </div>
            </Slider>
             
            <a href="#input-data" className="wrap main-btn">
                  <span className="free">無料</span><span className="twenty-five"> 愛車の査定をしてみる</span>
            </a>
            </section>


            <section id="voice">
            <p className="section-title"><span className="yellow-color">高く売れた！</span>お客様の喜びの声</p>
            <figure className="wrap man">
               <img src={man} alt="" />
            </figure>
            <figure className="wrap woman">
               <img src={woman} alt="" />
            </figure>
            <div className="wrap section-content">
               <div className="voice-item item-one">
                  <figure className="moto-item">
                     <img src={a_moto} alt="" />
                  </figure>
                  <p className="max-price">最終査定額<span className="price">173</span>万円</p>
                  <p className="topic">写真だけで査定が出来るという手軽さが大きかったです</p>
                  <p className="description">正直最初は写真でちゃんとした金額が出るのか不安でした。<br className="pc" />
                  でも予想よりも高い査定額が出たので良かったです！<br className="pc" />
                  買取業者とのスケジュール調整をしなくて良かったのもありますね。</p>
               </div>
               <div className="voice-item item-two">
                  <figure className="moto-item _right">
                     <img src={b_moto} alt="" />
                  </figure>
                  <p className="max-price">最終査定額<span className="price">98</span>万円</p>
                  <p className="topic">土日も対応してくれたし、金額もバッチリでした。</p>
                  <p className="description">他のサービスだと土日祝日は対応してないところも多いですが、<br className="pc" />
                  <span className="bike">バイクル</span>さんには土日にも対応頂いたのも好印象<br className="pc" />
                  でしたね。対応も丁寧だったし本当に感謝しています！</p>
               </div>
               <div className="voice-item item-three">
                  <figure className="moto-item">
                     <img src={c_moto} alt="" />
                  </figure>
                  <p className="max-price">最終査定額<span className="price">156</span>万円</p>
                  <p className="topic">トラブルなく、希望額で売却することができました。</p>
                  <p className="description">いやぁ満足です。ちゃんと減額なく買い取って頂いたので。<br className="pc" />
                  もう希望がバンッ！と出た感じでした。<br className="pc" />
                  システム自体にもこういうの待ってました！って感じできした。</p>
               </div>
               <div className="voice-item item-four">
                  <figure className="moto-item _right">
                     <img src={d_moto} alt="" />
                  </figure>
                  <p className="max-price">最終査定額<span className="price">89</span>万円</p>
                  <p className="topic">手間なく高額で売却することができました。</p>
                  <p className="description">スピードも速かったですし、売却額も高かったし、<br className="pc" />
                  あとは手間がかからないなと思いました。安心感もありました。<br className="pc" />
                  登録さえしておけば勝手に値段が釣り上がっていく感じでよかったです。</p>
               </div>
            </div>
            <a href="#input-data" className="wrap main-btn">
               <span className="free">無料</span><span className="twenty-five"> 愛車の査定をしてみる</span>
            </a>
            </section>


            <section id="step">
            <p className="section-title"><span className="yellow-color">かんたん3ステップ！</span>ご利用の流れ</p>
            <div className="wrap section-content">
               <div className="step-item step-item-one">
                  <figure className="step-one pc">
                     <img src={step_one} alt="売りたいバイクを撮影!" />
                  </figure>
                  <figure className="step-sp sp">
                     <img src={step_one_sp} alt="売りたいバイクを撮影!" />
                  </figure>
                  <figure className="step-1">
                     <img src={step_1} alt="売りたいバイクを撮影!" />
                  </figure>
               </div>
               <div className="step-item step-item-two">
                  <figure className="step-two pc">
                     <img src={step_two} alt="バイクの状態を入力したら" />
                  </figure>
                  <figure className="step-sp sp">
                     <img src={step_two_sp} alt="バイクの状態を入力したら" />
                  </figure>
                  <figure className="step-2">
                     <img src={step_2} alt="バイクの状態を入力したら" />
                  </figure>
               </div>
               <div className="step-item">
                  <figure className="step-three pc">
                     <img src={step_three} alt="依頼終わり" />
                  </figure>
                  <figure className="step-sp sp">
                     <img src={step_three_sp} alt="依頼終わり" />
                  </figure>
                  <figure className="step-3">
                     <img src={step_3} alt="依頼終わり" />
                  </figure>
               </div>
            </div>
            <a href="#input-data" className="wrap main-btn">
               <span className="free">無料</span><span className="twenty-five"> 愛車の査定をしてみる</span>
            </a>
            </section>


            <section id="structure">
            <p className="section-title"><span className="yellow-color">ネットで完結!</span> バイクルの仕組み</p>
            <div className="wrap section-content">
               <figure className="structure-img">
                  <img src={structure} alt="バイクルの仕組み" />
               </figure>
            </div>
            <a href="#input-data" className="wrap main-btn">
               <span className="free">無料</span><span className="twenty-five"> 愛車の査定をしてみる</span>
            </a>
            </section>


            <section id="reason">
            <p className="section-title">バイクル<span className="yellow-color">がかんたん安心・高く売れる</span>理由</p>
            <p className="reason-focus">高く売れる<span className="yellow-txt">理由</span>・・・?</p>
            <div className="wrap section-content">
               <div className="reason-txt">
                  <div className="reason-item">
                  <div className="first first-one">
                     <figure className="number">
                        <img src={one} alt="フリマ感覚でカンタン、最短翌日に査定額がわかる" />
                     </figure>
                     <p className="txt">フリマ感覚でカンタン、<br />最短翌日に査定額がわかる</p>
                  </div>
                  <div className="second second-after">
                     <p>申し込みから最短翌日に最高額をご案内差し上げます。日程調整の手間なく<br className="pc" />
                        複数社の価格を比較できるので、急いでいる方にもピッタリです。
                     </p>
                  </div>
                  </div>
                  <div className="reason-item">
                  <div className="first">
                     <figure className="number">
                        <img src={two} alt="匿名で利用できるから安心安全" />
                     </figure>
                     <p className="txt">匿名で利用できるから<br />安心安全</p>
                  </div>
                  <div className="second second-after">
                     <p>査定金額が知りたい方にも、今すぐ売る予定がない方にも気軽に利用できます。く<br className="pc" />
                        過去の買取実績に基づいて買取相場データも提供しています。
                     </p>
                  </div>
                  </div>
                  <div className="reason-item">
                  <div className="first">
                     <figure className="number">
                        <img src={three} alt="得意分野を持つ買い手からのオファー" />
                     </figure>
                     <p className="txt">得意分野を持つ<br />買い手からのオファー</p>
                  </div>
                  <div className="second">
                     <p>    バイクルでは様々な得意分野を持ち、実績ある優良の買い手様からのオファーがく<br className="pc" />
                        もらえます。平均オファー数は5～10件。売れた人の9割は希望額を超えています。
                     </p>
                  </div>
                  </div>
               </div>
               <div className="reason-img">
                  <figure className="money">
                     <img src={money} alt="" />
                  </figure>
                  <figure className="reason-girl">
                     <img src={reason_girl} alt="" />
                  </figure>
               </div>
            </div>
            <a href="#input-data" className="wrap main-btn">
               <span className="free">無料</span><span className="twenty-five"> 愛車の査定をしてみる</span>
            </a>
            </section>
         </main>
      </>
   )
}