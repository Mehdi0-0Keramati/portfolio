import { RiReactjsLine } from "react-icons/ri";
import { DiPhotoshop, DiSass } from "react-icons/di";
import { BiCodeBlock } from "react-icons/bi";
import { BsWordpress } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState(false);
  const [currentColor, setCurrentColor] = useState("#F55050");
  const [currentMode, setCurrentMode] = useState("light");
  const [currentLang, setCurrentLang] = useState("en");
  const { t, i18n } = useTranslation();

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("ThemeMode", e.target.value);
    setSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setSettings(false);
  };
  const setLang = (e) => {
    i18n.changeLanguage(e.target.value);
    setCurrentLang(e.target.value);
    localStorage.setItem("currentLang", e.target.value);
    setSettings(false);
  };

  //todo Data

  const navItems = [
    {
      name: t("navItem1"),
      href: "home",
    },
    {
      name: t("navItem2"),
      href: "about",
    },
    {
      name: t("navItem3"),
      href: "service",
    },
    {
      name: t("navItem4"),
      href: "portfolio",
    },
    {
      name: t("navItem5"),
      href: "contact",
    },
  ];
  const themeColors = [
    {
      name: "blue-theme",
      color: "#1A97F5",
    },
    {
      name: "green-theme",
      color: "#03C9D7",
    },
    {
      name: "purple-theme",
      color: "#7352FF",
    },
    {
      name: "red-theme",
      color: "#F55050",
    },
    {
      name: "indigo-theme",
      color: "#3F72AF",
    },
    {
      color: "#F55302",
      name: "orange-theme",
    },
  ];
  const aboutData = [
    {
      skill: t("aboutSkills1"),
      description: t("aboutSkills1Description1"),
      icon: <BiCodeBlock />,
    },
    {
      skill: t("aboutSkills2"),
      description: t("aboutSkills1Description2"),
      icon: <BiCodeBlock />,
    },
    {
      skill: t("aboutSkills3"),
      description: t("aboutSkills1Description3"),
      icon: <BsWordpress />,
    },
    {
      skill: t("aboutSkills5"),
      description: t("aboutSkills1Description5"),
      icon: <DiPhotoshop />,
    },
  ];
  const serviceData = [
    {
      skill: t("html"),
      description: t("htmlDescription"),
      icon: <AiOutlineHtml5 />,
    },
    {
      skill: t("css"),
      description: t("cssDescription"),
      icon: <FaCss3 />,
    },
    {
      skill: t("js"),
      description: t("jsDescription"),
      icon: <IoLogoJavascript />,
    },
    {
      skill: t("react"),
      description: t("reactDescription"),
      icon: <RiReactjsLine />,
    },
    {
      skill: t("sass"),
      description: t("sassDescription"),
      icon: <DiSass />,
    },
    {
      skill: t("tailwind"),
      description: t("tailwindDescription"),
      icon: <SiTailwindcss />,
    },
    {
      skill: t("bootstrap"),
      description: t("bootstrapDescription"),
      icon: <SiBootstrap />,
    },
    {
      skill: t("photoshop"),
      description: t("photoshopDescription"),
      icon: <DiPhotoshop />,
    },
  ];
  const portfolioTitle = [
    {
      name: t("all"),
      activetab: [true, false, false, false, false],
    },
    {
      name: t("app"),
      activetab: [false, true, false, false, false],
    },
    {
      name: t("templates"),
      activetab: [false, false, true, false, false],
    },
    {
      name: t("games"),
      activetab: [false, false, false, true, false],
    },
    {
      name: t("graphicDesign"),
      activetab: [false, false, false, false, true],
    },
  ];
  const portfolioData = [
    {
      all: [
        {
          title: t("app"),
          projectName: t("projectName1"),
          pic: "bg-dashboard",
          githubLink: "https://github.com/Mehdi0-0Keramati/AdminDashboard",
          viewOnline: "https://Mehdi0-0Keramati.github.io/AdminDashboard",
        },
        {
          title: t("app"),
          projectName: t("projectName2"),
          pic: "bg-weatherforecast",
          githubLink: "https://github.com/Mehdi0-0Keramati/weather_forecast",
          viewOnline: "https://mehdi0-0keramati.github.io/weather_forecast",
        },
        {
          title: t("app"),
          projectName: t("projectName3"),
          pic: "bg-musicPlayer",
          githubLink: "https://github.com/Mehdi0-0Keramati/MUSICPLAYER",
          viewOnline: "https://mehdi0-0keramati.github.io/MUSICPLAYER",
        },
        {
          title: t("app"),
          projectName: t("projectName4"),
          pic: "bg-alannews",
          githubLink: "https://github.com/Mehdi0-0Keramati/AlanNews",
          viewOnline: "https://mehdi0-0keramati.github.io/AlanNews",
        },
        {
          title: t("app"),
          projectName: t("projectName5"),
          pic: "bg-cryptocurrency",
          githubLink: "https://github.com/Mehdi0-0Keramati/crypto-currency",
          viewOnline: "https://mehdi0-0keramati.github.io/crypto-currency",
        },
        {
          title: t("reactjs"),
          projectName: t("projectName6"),
          pic: "bg-legends_landingpage",
          githubLink: "https://github.com/Mehdi0-0Keramati/legends-landingpage",
          viewOnline: "https://Mehdi0-0Keramati.github.io/legends-landingpage",
        },
        {
          title: t("reactjs"),
          projectName: t("projectName7"),
          pic: "bg-GPT3",
          githubLink: "https://github.com/Mehdi0-0Keramati/GPT-3",
          viewOnline: "https://Mehdi0-0Keramati.github.io/GPT-3",
        },
        {
          title: t("reactjs"),
          projectName: t("projectName8"),
          pic: "bg-business",
          githubLink: "https://github.com/Mehdi0-0Keramati/business",
          viewOnline: "https://Mehdi0-0Keramati.github.io/business",
        },
        {
          title: t("reactjs"),
          projectName: t("projectName9"),
          pic: "bg-covid19",
          githubLink: "https://github.com/Mehdi0-0Keramati/covid19",
          viewOnline: "https://Mehdi0-0Keramati.github.io/covid19",
        },
        {
          title: t("reactjs"),
          projectName: t("projectName10"),
          pic: "bg-littleProject",
          githubLink: "https://github.com/Mehdi0-0Keramati/LittlePorject-ReactJs",
          viewOnline: "https://littleproject-reactjs.netlify.app",
        },
        {
          title: t("vanillajs"),
          projectName: t("projectName11"),
          pic: "bg-bootstrapTemplate",
          githubLink:
            "https://github.com/Mehdi0-0Keramati/modern_bootstrap_template",
          viewOnline: "https://mehdi0-0keramati.github.io/modern_bootstrap_template",
        },
        {
          title: t("vanillajs"),
          projectName: t("projectName12"),
          pic: "bg-videograph",
          githubLink: "https://github.com/Mehdi0-0Keramati/videograph_portfolio",
          viewOnline: "https://mehdi0-0keramati.github.io/videograph_portfolio",
        },
        {
          title: t("vanillajs"),
          projectName: t("projectName13"),
          pic: "bg-eCommerceTemplate",
          githubLink:
            "https://github.com/Mehdi0-0Keramati/eCommerce_tailwind_template",
          viewOnline:
            "https://mehdi0-0keramati.github.io/eCommerce_tailwind_template",
        },
        {
          title: t("games"),
          projectName: t("projectName22"),
          pic: "bg-SomeGames",
          githubLink: "https://github.com/Mehdi0-0Keramati/somegames",
          viewOnline: "https://Mehdi0-0Keramati.github.io/somegames",
        },
        {
          title: t("games"),
          projectName: t("projectName18"),
          pic: "bg-quizapp",
          githubLink: "https://github.com/Mehdi0-0Keramati/QuizApp",
          viewOnline: "https://Mehdi0-0Keramati.github.io/QuizApp",
        },
        {
          title: t("graphicDesign"),
          projectName: t("projectName20"),
          pic: "bg-SportWebsiteUI",
          githubLink: "https://github.com/Mehdi0-0Keramati/webdesign_UIUX",
          viewOnline: "https://github.com/Mehdi0-0Keramati/webdesign_UIUX",
        },
        {
          title: t("graphicDesign"),
          projectName: t("projectName21"),
          pic: "bg-dashboardUI",
          githubLink: "https://github.com/Mehdi0-0Keramati/webdesign_UIUX",
          viewOnline: "https://github.com/Mehdi0-0Keramati/webdesign_UIUX",
        },
      ],

      app: [
        {
          title: t("app"),
          projectName: t("projectName1"),
          pic: "bg-dashboard",
          githubLink: "https://github.com/Mehdi0-0Keramati/AdminDashboard",
          viewOnline: "https://Mehdi0-0Keramati.github.io/AdminDashboard",
        },
        {
          title: t("app"),
          projectName: t("projectName2"),
          pic: "bg-weatherforecast",
          githubLink: "https://github.com/Mehdi0-0Keramati/weather_forecast",
          viewOnline: "https://mehdi0-0keramati.github.io/weather_forecast",
        },
        {
          title: t("app"),
          projectName: t("projectName3"),
          pic: "bg-musicPlayer",
          githubLink: "https://github.com/Mehdi0-0Keramati/MUSICPLAYER",
          viewOnline: "https://mehdi0-0keramati.github.io/MUSICPLAYER",
        },
        {
          title: t("app"),
          projectName: t("projectName4"),
          pic: "bg-alannews",
          githubLink: "https://github.com/Mehdi0-0Keramati/AlanNews",
          viewOnline: "https://mehdi0-0keramati.github.io/AlanNews",
        },
        {
          title: t("app"),
          projectName: t("projectName5"),
          pic: "bg-cryptocurrency",
          githubLink: "https://github.com/Mehdi0-0Keramati/crypto-currency",
          viewOnline: "https://mehdi0-0keramati.github.io/crypto-currency",
        },
      ],

      templates: [
        {
          react: [
            {
              title: t("reactjs"),
              projectName: t("projectName6"),
              pic: "bg-legends_landingpage",
              githubLink: "https://github.com/Mehdi0-0Keramati/legends-landingpage",
              viewOnline: " https://Mehdi0-0Keramati.github.io/legends-landingpage",
            },
            {
              title: t("reactjs"),
              projectName: t("projectName7"),
              pic: "bg-GPT3",
              githubLink: "https://github.com/Mehdi0-0Keramati/GPT-3",
              viewOnline: "https://Mehdi0-0Keramati.github.io/GPT-3",
            },
            {
              title: t("reactjs"),
              projectName: t("projectName8"),
              pic: "bg-business",
              githubLink: "https://github.com/Mehdi0-0Keramati/business",
              viewOnline: " https://Mehdi0-0Keramati.github.io/business",
            },
            {
              title: t("reactjs"),
              projectName: t("projectName9"),
              pic: "bg-covid19",
              githubLink: "https://github.com/Mehdi0-0Keramati/covid19",
              viewOnline: "https://Mehdi0-0Keramati.github.io/covid19",
            },
            {
              title: t("reactjs"),
              projectName: t("projectName10"),
              pic: "bg-littleProject",
              githubLink:
                "https://github.com/Mehdi0-0Keramati/LittlePorject-ReactJs",
              viewOnline: "https://littleproject-reactjs.netlify.app",
            },
          ],
          vanillaJS: [
            {
              title: t("vanillajs"),
              projectName: t("projectName11"),
              pic: "bg-bootstrapTemplate",
              githubLink:
                "https://github.com/Mehdi0-0Keramati/modern_bootstrap_template",
              viewOnline:
                "https://mehdi0-0keramati.github.io/modern_bootstrap_template",
            },
            {
              title: t("vanillajs"),
              projectName: t("projectName12"),
              pic: "bg-videograph",
              githubLink: "https://github.com/Mehdi0-0Keramati/videograph_portfolio",
              viewOnline: "https://mehdi0-0keramati.github.io/videograph_portfolio",
            },
            {
              title: t("vanillajs"),
              projectName: t("projectName13"),
              pic: "bg-eCommerceTemplate",
              githubLink:
                "https://github.com/Mehdi0-0Keramati/eCommerce_tailwind_template",
              viewOnline:
                "https://mehdi0-0keramati.github.io/eCommerce_tailwind_template",
            },
          ],
        },
      ],

      games: [
        {
          title: t("games"),
          projectName: t("projectName18"),
          pic: "bg-quizapp",
          githubLink: "https://github.com/Mehdi0-0Keramati/QuizApp",
          viewOnline: "https://Mehdi0-0Keramati.github.io/QuizApp",
        },
        {
          title: t("games"),
          projectName: t("projectName22"),
          pic: "bg-SomeGames",
          githubLink: "https://github.com/Mehdi0-0Keramati/somegames",
          viewOnline: "https://Mehdi0-0Keramati.github.io/somegames",
        },
      ],

      graphicDesign: [
        {
          title: t("graphicDesign"),
          projectName: t("projectName20"),
          pic: "bg-SportWebsiteUI",
          githubLink: "https://github.com/Mehdi0-0Keramati/webdesign_UIUX",
          viewOnline: "https://github.com/Mehdi0-0Keramati/webdesign_UIUX",
        },
        {
          title: t("graphicDesign"),
          projectName: t("projectName21"),
          pic: "bg-dashboardUI",
          githubLink: "https://github.com/Mehdi0-0Keramati/webdesign_UIUX",
          viewOnline: "https://github.com/Mehdi0-0Keramati/webdesign_UIUX",
        },
      ],
    },
  ];

  //todo Data

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        settings,
        setSettings,
        currentMode,
        setCurrentMode,
        currentColor,
        setCurrentColor,
        currentLang,
        setCurrentLang,
        t,
        i18n,
        setMode,
        setColor,
        setLang,
        navItems,
        themeColors,
        aboutData,
        serviceData,
        portfolioTitle,
        portfolioData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
