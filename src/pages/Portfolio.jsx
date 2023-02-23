import React from "react";
import { useStateContext } from "../context/Context";
import { useEffect, useState } from "react";

const Project = () => {
  const { currentColor, currentLang, portfolioTitle, portfolioData, t } =
    useStateContext();
  const [delay, setdelay] = useState(false);
  const [work, setWork] = useState();
  const [template, setTemplate] = useState(false);
  const [templateGern, setTemplateGern] = useState("ReactJS");
  const [activeTabTemplate, setActiveTabTemplate] = useState([true, false]);
  const [gern, setGern] = useState("All");
  const [activeTab, setActiveTab] = useState([true, false, false, false, false]);

  useEffect(() => {
    if (gern === "All" || gern === "همه") {
      setWork(portfolioData[0]?.all);
    } else if (gern === "App" || gern === "اپلیکیشن") {
      setWork(portfolioData[0].app);
    } else if (gern === "Templates" || gern === "قالب") {
      setTemplate(true);
      if (templateGern === "ReactJS" || gern === "ری اکت") {
        setWork(portfolioData[0].templates[0].react);
      } else if (templateGern === "VanillaJS" || gern === "جاوااسکریپت") {
        setWork(portfolioData[0].templates[0].vanillaJS);
      }
    } else if (gern === "Games" || gern === "بازی") {
      setWork(portfolioData[0].games);
    } else if (gern === "GraphicDesign" || gern === "طراحی") {
      setWork(portfolioData[0].graphicDesign);
    }
  }, [gern, templateGern, currentLang]);

  useEffect(() => {
    if (portfolioData) {
      setdelay(true);
    } else {
      setdelay(false);
    }
  }, [portfolioData]);

  return (
    <>
      <div className="activeSection w-screen min-h-screen mx-auto md:w-4/5 flex flex-col pt-10">
        {delay && (
          <>
            <div style={{ animationDelay: "1s" }}>
              <div className="relative mb-10">
                <h3 className="text-xl absolute left-1/2 -translate-x-1/2 z-10">
                  {t("projects")}
                </h3>
                <span
                  style={{ background: currentColor }}
                  className="left-1/2 -top-1.5 -translate-x-1/2 rounded-full absolute w-8 h-8"
                ></span>
              </div>

              <h1 className="text-2xl md:text-4xl my-5 text-center font-titr ltr:font-summer">
                {t("seeProjects")}
              </h1>
              <div
                style={{ background: currentColor }}
                className="w-3/5 md:w-2/5 mx-auto h-1"
              >
                <div className="relative bg-main-bg dark:bg-main-dark-bg w-10 h-1 left-2/4 -translate-x-2/4 rtl:translate-x-2/4 rtl:-left-2/4">
                  <span className="absolute rounded-full w-2 h-1 left-2 bg-black dark:bg-white"></span>
                  <span className="absolute rounded-full left-6 w-2 h-1 bg-black dark:bg-white"></span>
                </div>
              </div>
            </div>

            <div
              style={{ animationDelay: "1s" }}
              className="flex justify-center items-center w-3/4 h-20 text-center mt-10 mx-auto gap-2 md:gap-4 text-xs md:text-md"
            >
              {portfolioTitle.map(({ name, activetab }, idx) => (
                <button
                  key={idx}
                  type="button"
                  style={{ background: activeTab[idx] ? currentColor : "" }}
                  className="font-semibold dark:text-gray-100 text-gray-800 p-2 py-1 md:p-4 md:py-2 rounded-2xl mb-10"
                  onClick={() =>
                    setActiveTab(activetab) || setGern(name) || name === "templates"
                      ? setTemplate(true)
                      : setTemplate(false)
                  }
                >
                  {name}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-20 place-items-center">
          {template ? (
            <>
              <div className="m-5 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4  text-center text-xs md:text-md -mt-5">
                <button
                  className="p-2 py-1 md:p-4 md:py-2 rounded-2xl"
                  style={{ background: activeTabTemplate[0] ? currentColor : "" }}
                  type="button"
                  onClick={() =>
                    setTemplateGern("ReactJS") || setActiveTabTemplate([true, false])
                  }
                >
                  {t("reactjs")}
                </button>
                <button
                  className="p-2 py-1 md:p-4 md:py-2 rounded-2xl"
                  style={{ background: activeTabTemplate[1] ? currentColor : "" }}
                  type="button"
                  onClick={() =>
                    setTemplateGern("VanillaJS") ||
                    setActiveTabTemplate([false, true])
                  }
                >
                  {t("vanillajs")}
                </button>
              </div>
              {work?.map(
                ({ pic, title, projectName, githubLink, viewOnline }, idx) => (
                  <div
                    key={idx}
                    className={`${pic} bg-center bg-contain bg-no-repeat w-3/4 md:w-full h-64 `}
                  >
                    <div className="project-item overflow-hidden w-full h-full flex opacity-0 hover:opacity-100 flex-col justify-center items-center gap-4 dark:bg-slate-800/75 bg-slate-200/75">
                      <span className="text text-sm ltr:font-summer">{title}</span>
                      <h3
                        style={{ WebkitTextStroke: `.4px ${currentColor}` }}
                        className="text -mt-3 text-xl font-semibold"
                      >
                        {projectName}
                      </h3>

                      <div className="flex gap-4 cursor-pointer">
                        <a
                          target="_blank"
                          style={{ background: currentColor }}
                          className="link py-1 px-2 text-sm rounded-lg shadow-md -translate-x-24"
                          href={githubLink}
                          type="button"
                        >
                          {t("viewGithub")}
                        </a>
                        <a
                          target="_blank"
                          style={{ background: currentColor }}
                          className="link py-1 px-2 text-sm rounded-lg shadow-md translate-x-24"
                          href={viewOnline}
                          type="button"
                        >
                          {t("liveDemo")}
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
            </>
          ) : (
            work?.map(({ pic, title, projectName, githubLink, viewOnline }, idx) => (
              <div
                key={idx}
                className={`${pic} bg-center bg-contain bg-no-repeat w-3/4 md:w-full h-64 `}
              >
                <div className="project-item overflow-hidden w-full h-full flex opacity-0 hover:opacity-100 flex-col justify-center items-center gap-4 dark:bg-slate-800/75 bg-slate-200/75">
                  <span className="text text-sm ltr:font-summer">{title}</span>
                  <h3
                    style={{ WebkitTextStroke: `.4px ${currentColor}` }}
                    className="text -mt-3 text-xl font-semibold"
                  >
                    {projectName}
                  </h3>

                  <div className="flex gap-4 cursor-pointer">
                    <a
                      target="_blank"
                      style={{ background: currentColor }}
                      className="link py-1 px-2 text-sm rounded-lg shadow-md -translate-x-24"
                      href={githubLink}
                      type="button"
                    >
                      {t("viewGithub")}
                    </a>
                    <a
                      target="_blank"
                      style={{ background: currentColor }}
                      className="link py-1 px-2 text-sm rounded-lg shadow-md translate-x-24"
                      href={viewOnline}
                      type="button"
                    >
                      {t("liveDemo")}
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
