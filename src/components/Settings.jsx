import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

import { useStateContext } from "../context/Context";

const Settings = () => {
  const {
    settings,
    setSettings,
    currentColor,
    currentMode,
    setMode,
    setColor,
    setLang,
    currentLang,
    themeColors,
    t,
  } = useStateContext();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setSettings(true);
        }}
        className="fixed bottom-20 right-2 md:right-8 z-10 font-semibold text-3xl"
      >
        <CiSettings />
      </button>
      <div
        className={`${
          settings ? "flex" : "hidden"
        } fixed z-30 h-full w-full bg-half-transparent-dark `}
      >
        <div className="settingAnime fixed w-96 h-full p-5 bg-white dark:bg-secondary-dark-bg dark:text-white">
          <div className="flex w-full justify-between py-3 text-xl font-semibold">
            <h3>{t("settings")}</h3>
            <button type="button" onClick={() => setSettings(false)}>
              <AiFillCloseCircle />
            </button>
          </div>

          <div className="border-gray-400 border-t-1 w-full py-3">
            <h3 className="mb-4">{t("changeLang")}</h3>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                checked={currentLang === "fa"}
                className="cursor-pointer"
                id="fa"
                value="fa"
                onChange={setLang}
              />
              <label className="text-sm" htmlFor="fa">
                {t("fa")}
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                checked={currentLang === "en"}
                className="cursor-pointer"
                id="en"
                value="en"
                onChange={setLang}
              />
              <label className="text-sm" htmlFor="en">
                {t("en")}
              </label>
            </div>
          </div>

          <div className="border-gray-400 border-t-1 w-full py-3">
            <h3 className="mb-4">{t("themeOptions")}</h3>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                checked={currentMode === "light"}
                className="cursor-pointer"
                id="light"
                value="light"
                onChange={setMode}
              />
              <label className="text-sm" htmlFor="light">
                {t("light")}
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                checked={currentMode === "dark"}
                className="cursor-pointer"
                id="dark"
                value="dark"
                onChange={setMode}
              />
              <label className="text-sm" htmlFor="dark">
                {t("dark")}
              </label>
            </div>
          </div>

          <div className="border-gray-400 border-t-1 w-full py-3">
            <h3>{t("themeColors")}</h3>
            <div className="flex justify-evenly items-center mt-5">
              {themeColors.map(({ color, name }) => (
                <button
                  key={name}
                  onClick={() => setColor(color)}
                  type="button"
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: color }}
                >
                  {color === currentColor && <BsCheckLg />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
