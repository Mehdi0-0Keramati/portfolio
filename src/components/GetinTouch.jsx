import { BsTelegram, BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import { useStateContext } from "../context/Context";

const GetinTouch = () => {
  const { currentColor, t } = useStateContext();
  return (
    <div className="ltr:font-summer z-10 fixed top-52 -left-2 hidden md:flex flex-col items-center justify-center gap-3 rtl:font-titr">
      <a
        target="_blank"
        className="contactlink hover:scale-150"
        href="https://www.instagram.com/mehdi0_0keramati"
      >
        <AiFillInstagram />
      </a>
      <a
        target="_blank"
        className="contactlink hover:scale-150"
        href="https://www.github.com/mehdi0-0keramati"
      >
        <BsGithub />
      </a>
      <a
        target="_blank"
        className="contactlink hover:scale-150"
        href="https://www.linkedin.com/in/mehdi-keramati-503533267"
      >
        <BsLinkedin />
      </a>

      <style>
        {`.contactlink:hover{
                        color:${currentColor}!important;
                    }`}
      </style>

      <h4 className="w-1 h-12 mx-3 border-r-1 border-black dark:border-white "></h4>
      <h4 className="-rotate-90 m-5">{t("followMe")}</h4>
    </div>
  );
};

export default GetinTouch;
