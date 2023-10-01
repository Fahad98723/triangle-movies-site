import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const SocialButton = () => {
  return (
    <div className="flex flex-wrap my-2">
      <div className="bg-[#1877f2] p-1 rounded flex items-center m-1">
        <BiLogoFacebook className="text-white text-[20px] " />
        <p className="text-white mx-1">Facebook</p>
      </div>
      <div className="bg-[#c13584] p-1 rounded flex items-center m-1">
        <AiOutlineInstagram className="text-white text-[20px] " />
        <p className="text-white mx-1">Instagram</p>
      </div>
      <div className="bg-[#128c7e] p-1 rounded flex items-center m-1">
        <BsWhatsapp className="text-white text-[20px] " />
        <p className="text-white mx-1">Whatsapp</p>
      </div>
    </div>
  );
};

export default SocialButton;
