import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Settings, Sidebar, ShortcutPages, GetinTouch } from "./components";
import { useStateContext } from "./context/Context";
import "./app.css";
import Loading from "./components/Loading";

const App = () => {
  const navigate = useNavigate();
  const {
    loading,
    setLoading,
    currentMode,
    setCurrentMode,
    currentColor,
    setCurrentColor,
    currentLang,
    setCurrentLang,
    i18n,
  } = useStateContext();

  useEffect(() => {
    const theme = localStorage.getItem("ThemeMode");
    const color = localStorage.getItem("colorMode");
    const lang = localStorage.getItem("currentLang");

    if (theme || color || lang) {
      setCurrentMode(theme);
      setCurrentColor(color);
      setCurrentLang(lang);
      i18n.changeLanguage(lang);
    }
    if (lang === "fa") {
      document.body.setAttribute("dir", "rtl");
    } else {
      document.body.setAttribute("dir", "ltr");
    }
  }, [currentLang]);

  useEffect(() => {
    navigate("./home");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    if (window.location.pathname === "/" || window.location.pathname === "") {
      navigate("./home");
    }
  }, [window.location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      var origTitle;

      var currentState = false;
      origTitle = document.querySelector("title").innerHTML;

      setInterval(startAnimation, 1200);

      function startAnimation() {
        document.querySelector("title").innerHTML = currentState ? origTitle : "😎";
        currentState = !currentState;
      }
    }, 1000);
  }, [document.title]);

  return (
    <div
      className={`${
        currentMode === "dark" ? "dark" : ""
      } rtl:font-soltan font-robotoBold `}
    >
      <div className="bg-main-bg dark:bg-main-dark-bg text-gray-800 dark:text-gray-200">
        <style>
          {`::-webkit-scrollbar{
                            width: 0.5rem !important;
                            background: gray !important;
                        }`}
          {`::-webkit-scrollbar-thumb{
                            background: ${currentColor} !important;
                        }`}
        </style>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <Sidebar />
            <Settings />
            <ShortcutPages />
            <GetinTouch />
            <Outlet />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
