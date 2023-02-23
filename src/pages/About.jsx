import { useStateContext } from "../context/Context";

const About = () => {
  const { currentColor, aboutData, t } = useStateContext();
  return (
    <div className="activeSection lg:w-4/5 min-h-screen mx-auto flex items-start justify-center p-14 md:p-32 lg:p-10 py-20 md:gap-x-16 ">
      <div className="h-92 hidden lg:block lg:basis-1/3 relative">
        <div
          style={{ background: currentColor, zIndex: "-1" }}
          className="absolute w-72 h-72 rounded-full top-36 left-2"
        ></div>
        <img
          className="w-full h-full"
          src={require("../assets/images/me2.png")}
          alt=""
        />
      </div>
      <div className="basis-full lg:basis-2/3">
        <div className="relative">
          <h2 className="absolute z-10 text-xl rtl:font-semibold rtl:font-titr ltr:font-summer">
            {t("about")}
          </h2>
          <span
            style={{ background: currentColor }}
            className={`rtl:-right-3 rtl:-top-3 absolute -left-4 -top-2 w-10 h-10 rounded-full`}
          ></span>
        </div>

        <h1 className="mt-10 mb-5 text-4xl font-semibold rtl:font-titr ">
          {t("helloName")}
        </h1>
        <div
          style={{ background: currentColor }}
          className="w-20 h-1 m-2 mb-4"
        ></div>
        <p className="text-gray-400 text-sm text-md">{t("AboutDescreption")}</p>

        <div className="grid md:grid-cols-2 mt-12 gap-8 gap-y-12">
          {aboutData.map(({ skill, description, icon }) => (
            <div key={skill} className="flex  items-center justify-between gap-8">
              <div className="relative">
                <h2 className="absolute z-10 -left-2 -top-1 font-semibold text-xl">
                  {icon}
                </h2>
                <span
                  style={{ background: currentColor }}
                  className="absolute -left-6 -top-4 w-8 h-8 rounded-full"
                ></span>
              </div>

              <div>
                <h3 className="text-lg font-titr ltr:font-summer">{skill}</h3>
                <p className="mt-2 text-xs text-gray-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
