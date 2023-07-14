import React from "react";
import images1 from "../../assets/images1.png";
import clock from "../../assets/clock.svg";
import eye from "../../assets/eye.svg";
import share from "../../assets/share.svg";
import images2 from "../../assets/images2.png";
import "./Blog.css";

function Blog() {
  return (
    <div className="container">
      <div className="bloks">
        <img src={images1} alt="images1" />
        <div className="blok__section">
          <div className="blok__section_left">
            <h2 className="blok__section_title">Blog</h2>
            <div className="blok__section_timer">
              <img src={clock} alt="clock" />
              <h2 className="timer__title">21:30 | 17.05.2023</h2>
            </div>
            <div className="blok__section_eye">
              <img src={eye} alt="eye" />
              <h2 className="eye__title">186 +</h2>
            </div>
          </div>
          <div className="blok__section_right">
            <img src={share} alt="share" />
            <h2 className="blok__right_title">Ulashish</h2>
          </div>
        </div>
        <div className="blok__titels">
          <h2 className="titels_donation">
            Ehson nima? U barcha ishlarni chiroyli ko‘rinishda qilishdir
          </h2>
          <p className="titels__light">
            “Islom nuri” dasturining navbatdagi sonida ehson haqida so‘z boradi.
            Suhbatdoshimiz poytaxtdagi “Hazrati Ali” jome masjidi imom xatibi
            Salohiddin Sharipov ehsonning asl mohiyati, u nimalarda namoyon
            bo‘lishi haqida gapirib berdi.
          </p>
          <p className="titels__light">
            - Islom dini – ehson dinidir. Ehson so‘zi yaxshilik qilish ma'nosini
            anglatadi. Bu – umumiy ma'noda keladi. Biz ehson deganda odamlarga
            dasturxon yozishni, xudoyi qilishni tushunib qolganmiz. Aslida,
            ehson barcha ishni go‘zal qilishdir. Alloh taolo Qur'oni karimning
            ko‘plab oyat-karimalarida mo‘min-musulmon bandalarini ehson
            qilishga, yaxshilik qilishga buyurgan.
          </p>
          <p className="titels__light">
            Alloh taolo marhamat qiladi: “...va siz ehson qiling, Alloh taolo
            ehson qiluvchilarni yaxshi ko‘radi”. Yana bir oyatda: “Yaxshilik
            qiluvchilarga bu dunyoning o‘zida ham yaxshilik bor”, deyiladi.
            Alloh taoloning marhamatini qarang. Bu dunyoda bitta yaxshilik
            qilsak, oxiratda o‘ndan to yetti yuz barobargacha bo‘lgan yaxshilik
            bizni kutib turadi. U bandalariga ana shunday marhamati keng,
            mehribon zotdir.
          </p>
          <p className="titels__light">
            Dunyoda nafas olib turibmiz ekan xayolimiz, fikrimiz va zikrimiz
            yaxshilik qilish bo‘lish kerak. Hadisi shariflarda shunday ma'nolar
            keladi: “Yaxshilik qilish qo‘lingdan kelmasa, hech bo‘lmaganda
            yomonlik qilma”. Ramazon oyi aynan ehson oyi hisoblanadi.
            Mo‘min-musulmon bandalar yaxshilikda musobaqa qiladigan oy
            hisoblanadi.
          </p>
          <img src={images2} alt="images2" />

          <p className="titels__light">
            Xayr-ehson, muruvvat, odamlarga moddiy-ma'naviy foyda yetkazish
            masalasida dinimizda ta'limotlar to‘la. Payg‘ambarimiz (s.a.v):
            “Sadaqaning eng afzali – Ramazonda qilingan sadaqa”, deganlar.
            Hamyonimizdagi mol-davlat Alloh taolo bergan omonat. Bizniki
            deymizu, bizga nasib qiladimi, yo‘qmi uni Alloh biladi.
          </p>
          <p className="titels__light">
            Miskinning, yordamga muhtoj odamni yaxshi ko‘rish go‘zal fazilat.
            Ulug‘larimizdan biri shunday deganlar: “Miskin, bechora odam boy,
            ehson qiluvchi odamni yaxshi ko‘rib qolsa, ajablanma. Agar teskarisi
            bo‘lib, boy odam bechora odamni yaxshi ko‘rib qolishligidan
            ajablan”. Alloh barchamizga yaxshi amallar qilishligimizni nasib
            etsin, - dedi S.Sharipov.
          </p>

          <h2 className="titels__maqola">
            Maqola O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Din
            ishlari bo‘yicha qo‘mitaning xulosasi asosida tayyorlandi.
          </h2>

          <div className="titles__heshteg">
            <p className="heshteg__left">#Hayrehson</p>
            <p className="heshteg__right">#Blog</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
