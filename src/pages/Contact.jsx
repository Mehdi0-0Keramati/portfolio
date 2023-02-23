import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useStateContext } from "../context/Context";

const Contact = () => {
  const { currentColor, t } = useStateContext();
  const form = useRef();
  const alr = useRef();
  const loading = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    loading.current.classList.add("active");

    emailjs
      .sendForm(
        "service_48lj0ke",
        "template_d6m0fne",
        form.current,
        "srOSEOrJ89xFliQby"
      )
      .then(
        (result) => {
          console.log(result.text);
          alr.current.classList.add("active");
          loading.current.classList.remove("active");
        },
        (error) => {
          console.log(error.text);
        }
      );
    alr.current.classList.remove("active");
  };

  return (
    <div className="activeSection lg:w-4/5 min-h-screen mx-auto flex items-start justify-center p-10 md:p-20 lg:p-10 py-20 md:gap-x-16 ">
      <div className="hidden lg:block lg:basis-1/3 h-92 relative">
        <div
          style={{ background: currentColor, zIndex: "-1" }}
          className="w-full h-full opacity-20 absolute bottom-0 left-0 rounded-lg"
        ></div>
        <img
          className="w-full h-full"
          src={require("../assets/images/contact.png")}
          alt=""
        />
      </div>

      <div className="basis-full lg:basis-2/3">
        <div className="relative">
          <h2 className="absolute z-10 text-xl rtl:font-semibold font-titr ltr:font-summer">
            {t("contact")}
          </h2>
          <span
            style={{ background: currentColor }}
            className="rtl:-right-4 absolute -left-4 -top-2 w-10 h-10 rounded-full"
          ></span>
        </div>

        <h1 className="mt-10 mb-5 text-4xl font-semibold font-titr ">
          {t("getInTouch")}
        </h1>
        <div
          style={{ background: currentColor }}
          className="w-20 h-1 m-2 mb-4"
        ></div>
        <p className="text-sm text-gray-400">{t("contactDescription")}</p>

        <div
          style={{
            background: currentColor,
            left: localStorage.getItem("currentLang") === "fa" ? "2rem" : "80%",
          }}
          ref={alr}
          className="alert text-md  rtl:font-soltan rtl:font-semibold"
        >
          {t("messageSended")}
          <span></span>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="w-full flex flex-col md:flex-row gap-4 my-10">
            <div className="md:basis-2/4 h-10 relative border-1 border-black dark:border-white ">
              <label
                className="px-6 flex items-center justify-center ltr:font-summer rtl:right-10 rtl:w-4 absolute left-4 -top-2.5 bg-main-bg dark:bg-main-dark-bg  rtl:font-semibold text-sm"
                htmlFor="name"
              >
                {t("yourName")}
              </label>
              <input
                name="user_name"
                style={{ outlineColor: currentColor }}
                className="text-red-400 valid:text-green-400 bg-transparent w-full h-full p-4"
                id="name"
                type="text"
                required
              />
            </div>
            <div className="md:basis-2/4 h-10 relative border-1 border-black dark:border-white ">
              <label
                className="px-6 flex items-center justify-center ltr:font-summer rtl:right-10 rtl:w-4 absolute left-4 -top-2.5 bg-main-bg dark:bg-main-dark-bg  rtl:font-semibold text-sm"
                htmlFor="email"
              >
                {t("yourEmail")}
              </label>
              <input
                name="user_email"
                style={{ outlineColor: currentColor }}
                className="text-red-400 valid:text-green-400 bg-transparent w-full h-full p-4"
                type="email"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label
              className="px-6 flex items-center justify-center ltr:font-summer rtl:right-10 rtl:w-4 absolute left-4 -top-2.5 bg-main-bg dark:bg-main-dark-bg  rtl:font-semibold text-sm"
              htmlFor="textarea"
            >
              {t("yourMessage")}
            </label>
            <textarea
              name="message"
              style={{ outlineColor: currentColor }}
              className="p-4 border-1 border-black dark:border-white resize-y w-full h-full bg-transparent"
              id="textarea"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <input
            ref={loading}
            type="submit"
            style={{ background: currentColor }}
            className="ltr:mb-16 loading cursor-pointer py-3 px-6 mt-4 font-semibold hover:shadow-md dark:shadow-white/25 shadow-black"
            value={t("sendMessage")}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
