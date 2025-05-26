import React from "react";
import "../index.css";
import screen1 from "../assets/1 screen.svg";
import screen2 from "../assets/2 screen.svg";
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
      </main>
    </div>
  );
}

export default Main;
