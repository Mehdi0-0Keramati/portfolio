import Snowfall from "react-snowfall";
import { Typewriter, Cursor } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";

import { useStateContext } from "../context/Context";

const Home = () => {
  const { currentColor, currentLang, t } = useStateContext();

  return (
    <>
      <div
        className={`${
          currentLang === "fa" ? "pr-20 md:pr-40" : ""
        } activeSection h-screen w-full flex flex-col items-start justify-center md:pl-48 p-10 gap-14 overflow-hidden`}
      >
        <Snowfall
          style={{
            opacity: "0.3",
          }}
          color={currentColor}
          snowflakeCount={80}
          speed={[0.5, 2]}
        />

        <div className="w-52 relative">
          <h2 className="absolute z-10 text-xl  font-semibold rtl:font-titr ">
            {t("myName")}
          </h2>
          <span
            style={{ background: currentColor }}
            className={`rtl:-right-3 rtl:-top-3 absolute -left-4 -top-2 w-10 h-10 rounded-full`}
          ></span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold p-2 ltr:font-summer">
          {t("im")}
          <span className="titleSkills">
            {
              <Typewriter
                words={[t("webdev"), t("frontEnd"), t("designer")]}
                loop={5}
                typeSpeed={200}
                delaySpeed={2000}
                deleteSpeed={150}
              />
            }
          </span>
          <Cursor />
        </h1>

        <div className="flex items-center justify-center gap-x-5 font-semibold">
          <button
            type="button"
            className="py-6 px-4 w-36 relative dark:text-gray-800"
            style={{ background: currentColor }}
            id="buttonAnime"
          >
            <h5 className="w-full h-full absolute left-0 top-3.5 z-10">
              {t("myProfile")}
            </h5>
            <span className="z-0 clip-path absolute left-0 top-0 w-full h-full"></span>
          </button>
          <button type="button" className="py-6 px-4 w-36">
            {t("readMore")}
          </button>
        </div>

        <div className="me hidden w-96 h-96 absolute top-28 ltr:right-32 rtl:left-32">
          <img src={require("../assets/images/me.png")} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
