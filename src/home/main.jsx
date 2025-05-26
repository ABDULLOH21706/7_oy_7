import React from "react";
import "../index.css";
import screen1 from "../assets/1 screen.svg";
import screen2 from "../assets/2 screen.svg";
import screen3_1 from "../assets/3 screen1.svg";
import screen3_2 from "../assets/3 screen2.svg";
import screen3_3 from "../assets/3 screen3.svg";
import paytion from "../assets/paytion.svg";
import { useLanguage } from "../context/LanguageContext";

function Main() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center w-[100%]">
      <main className="flex flex-col items-center justify-center w-[100%] bg-[#17181D]">
        <div className="flex items-center justify-center w-[100%]">
          <div
            className="w-full h-[870px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${screen1})` }}
          ></div>
          <div className="flex items-start justify-start w-[100%] h-[870px] absolute">
            <div className="flex flex-col items-start justify-start gap-[50px] w-auto h-auto pt-[150px] pl-[245px] pr-[245px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="w-[300px]">
                  <img src={paytion} alt="" draggable="false" />
                </div>
                <p className="text-[#F1F1F1] text-[22px] font-[400]">
                  {t({
                    ru: "Финансовые услуги и продукты для",
                    uz: "Moliyaviy xizmatlar va mahsulotlar",
                    en: "Financial services and products for",
                  })}{" "}
                  <span className="font-[500]">
                    {t({
                      ru: " жизни и бизнеса",
                      uz: " hayot va biznes uchun",
                      en: " life and business",
                    })}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button className="text-[#333333] text-[16px] font-[600] bg-[#FFFFFF] p-[25px] pt-[14px] pb-[14px] rounded-[10px]">
                  {t({
                    ru: "Узнать больше →",
                    uz: "Batafsil →",
                    en: "Learn more →",
                  })}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center w-[100%]">
          <div
            className="w-full h-[870px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${screen2})` }}
          ></div>
          <div className="flex items-start justify-start w-[100%] absolute p-[150px] pl-[245px] pr-[245px]">
            <div className="h-[200px] overflow-hidden">
              <p className="text-white text-[46px] font-[600]">
                {t({
                  ru: "Решаем задачи, связанные с финансами",
                  uz: "Biz moliya bilan bog'liq muammolarni hal qilamiz",
                  en: "We solve problems related to finances",
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%] bg-[#17181D]">
          <div className="flex items-center justify-start w-[100%] pl-[245px] pr-[245px]">
            <p className="text-white text-[46px] font-[600]">
              {t({
                ru: "Наши продукты",
                uz: "Bizning mahsulotlarimiz",
                en: "Our products",
              })}
            </p>
          </div>
          <div className="flex items-center justify-start w-[100%] pl-[245px] pr-[245px]">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-start">
                <div className="w-[100%]">
                  <img src={screen3_1} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-start justify-start absolute ml-[100px] gap-[60px]">
                  <div className="flex flex-col items-start justify-start gap-[30px]">
                    <p className="text-white text-[46px] font-[600]">
                      {t({
                        ru: "Обмен валют",
                        uz: "Valyuta ayirboshlash",
                        en: "Currency exchange",
                      })}
                    </p>
                    <p className="text-[#BEBEBE] text-[18px] font-[400] w-[420px]">
                      {t({
                        ru: "Обменивайте фиатные и криптовалюты безопасно по всему миру",
                        uz: "Fiat va kriptovalyutalarni butun dunyo bo'ylab xavfsiz almashish",
                        en: "Exchange fiat and cryptocurrencies safely around the world",
                      })}
                    </p>
                  </div>
                  <button className="text-[#333333] text-[16px] font-[600] bg-[#FFFFFF] p-[25px] pt-[14px] pb-[14px] rounded-[10px]">
                    {t({
                      ru: "Узнать больше →",
                      uz: "Batafsil →",
                      en: "Learn more →",
                    })}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-start">
                <div className="w-[100%]">
                  <img src={screen3_2} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-start justify-start absolute ml-[100px] gap-[60px]">
                  <div className="flex flex-col items-start justify-start gap-[30px]">
                    <p className="text-white text-[46px] font-[600]">
                      {t({
                        ru: "Консьерж сервис",
                        uz: "Konsyerj xizmati",
                        en: "Concierge service",
                      })}
                    </p>
                    <p className="text-[#BEBEBE] text-[18px] font-[400] w-[420px]">
                      {t({
                        ru: "Это ваш личный ассистент, который поможет решить финансовые задачи: от оплаты счетов до пополнения кредитки",
                        uz: "Bu sizning shaxsiy yordamchingiz, u sizga moliyaviy muammolarni hal qilishda yordam beradi: to'lovlarni to'lashdan tortib kredit kartangizni to'ldirishgacha",
                        en: "This is your personal assistant who will help you solve financial problems: from paying bills to replenishing your credit card",
                      })}
                    </p>
                  </div>
                  <button className="text-[#333333] text-[16px] font-[600] bg-[#FFFFFF] p-[25px] pt-[14px] pb-[14px] rounded-[10px]">
                    {t({
                      ru: "Связаться → →",
                      uz: "Aloqa →",
                      en: "Contact →",
                    })}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-start">
                <div className="w-[100%]">
                  <img src={screen3_3} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-start justify-start absolute ml-[100px] gap-[60px]">
                  <div className="flex flex-col items-start justify-start gap-[30px]">
                    <p className="text-white text-[46px] font-[600]">
                      {t({
                        ru: "Кошелек",
                        uz: "Hamyon",
                        en: "Wallet",
                      })}
                    </p>
                    <p className="text-[#BEBEBE] text-[18px] font-[400] w-[420px]">
                      {t({
                        ru: "Обменивайте фиатные и криптовалюты безопасно по всему миру",
                        uz: "Fiat va kriptovalyutalarni butun dunyo bo'ylab xavfsiz almashish",
                        en: "Exchange fiat and cryptocurrencies safely around the world",
                      })}
                    </p>
                  </div>
                  <button className="text-[#333333] text-[16px] font-[600] bg-[#FFFFFF] p-[25px] pt-[14px] pb-[14px] rounded-[10px]">
                    {t({
                      ru: "Связаться →",
                      uz: "Aloqa →",
                      en: "Contact →",
                    })}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
