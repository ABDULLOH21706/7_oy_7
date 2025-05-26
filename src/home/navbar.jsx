// import React from "react";
// import logo from "../assets/logo.svg";

// function Navbar() {
//   return (
//     <div className="flex items-center justify-center w-[100%]">
//       <header className="flex items-center justify-between w-[100%] p-[25px] pl-[245px] pr-[245px] bg-[#1F2025]">
//         <div className="flex items-center justify-center gap-[47px]">
//           <div className="w-[52px]">
//             <img src={logo} alt="" draggable="false" />
//           </div>
//           <div className="flex items-center justify-center gap-[55px]">
//             <p className="text-[#C7C7C8] text-[14px] font-[400] cursor-pointer">
//               Продукты
//             </p>
//             <p className="text-[#C7C7C8] text-[14px] font-[400] cursor-pointer">
//               Отзывы
//             </p>
//             <p className="text-[#C7C7C8] text-[14px] font-[400] cursor-pointer">
//               О нас
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center justify-center gap-[40px]">
//           <div className="flex items-center justify-center">
//             <select class="form-select" aria-label="Default select example" className="border-[1px] border-[#3D3D3D] text-[#F1F1F1]">
//               <option value="1">Rus</option>
//               <option value="2">Uzb</option>
//               <option value="3">Eng</option>
//             </select>
//           </div>
//           <div className="flex items-center justify-center">
//             <button className="text-[#333333] text-[16px] font-[600] bg-[#FFFFFF] p-[25px] pt-[14px] pb-[14px] rounded-[10px]">
//                 Стать клиентом
//             </button>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Navbar;


import React from "react";
import logo from "../assets/logo.svg";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center justify-center w-[100%]">
      <header className="flex items-center justify-between w-[100%] p-[25px] pl-[245px] pr-[245px] bg-[#1F2025]">
        <div className="flex items-center justify-center gap-[47px]">
          <div className="w-[52px]">
            <img src={logo} alt="" draggable="false" />
          </div>
          <div className="flex items-center justify-center gap-[55px]">
            <p className="text-[#C7C7C8] text-[14px] font-[400] cursor-pointer">
              {t({ ru: "Продукты", uz: "Mahsulotlar", en: "Products" })}
            </p>
            <p className="text-[#C7C7C8] text-[14px] font-[400] cursor-pointer">
              {t({ ru: "Отзывы", uz: "Fikrlar", en: "Reviews" })}
            </p>
            <p className="text-[#C7C7C8] text-[14px] font-[400] cursor-pointer">
              {t({ ru: "О нас", uz: "Biz haqimizda", en: "About us" })}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[40px]">
          <div className="flex items-center justify-center">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border-[1px] border-[#3D3D3D] text-[#F1F1F1] bg-[#1F2025]"
            >
              <option value="ru">Rus</option>
              <option value="uz">Uzb</option>
              <option value="en">Eng</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-[#333333] text-[16px] font-[600] bg-[#FFFFFF] p-[25px] pt-[14px] pb-[14px] rounded-[10px]">
              {t({
                ru: "Стать клиентом",
                uz: "Mijoz bo‘lish",
                en: "Become a client",
              })}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
