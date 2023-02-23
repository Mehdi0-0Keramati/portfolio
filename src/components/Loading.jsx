import { useStateContext } from "../context/Context";

const Loading = () => {
    const { currentColor, t } = useStateContext()
    return (
        <div style={{ direction: "ltr" }} className=" h-screen w-screen flex flex-col items-center justify-center">
            <h1 style={{ color: currentColor }} className="rtl:font-soltan relative loading text-4xl mb-12">
                {t("loading")}
                <span className="absolute -right-4  rtl:-left-4" style={{ "--j": '1' }}>.</span>
                <span className="absolute -right-8  rtl:-left-8" style={{ "--j": '2' }}>.</span>
                <span className="absolute -right-12 rtl:-left-12" style={{ "--j": '3' }}>.</span>
            </h1>
            <div className="gap-2 hand flex items-center justify-center">

                <div style={{ "--i": '1' }} className="flex flex-col items-center justify-between dark:bg-main-bg bg-main-dark-bg relative finger finger-one h-28 w-10 rounded-2xl">
                    <span style={{ background: currentColor }} className="absolute top-3 w-3/4 h-1"></span>
                    <span style={{ background: currentColor }} className="absolute top-5 w-3/4 h-1"></span>
                    <span style={{ background: currentColor }} className="absolute bottom-2 w-8 h-8 rounded-t-3xl rounded-b-xl "></span>
                </div>
                <div style={{ "--i": '2' }} className="flex flex-col items-center justify-between dark:bg-main-bg bg-main-dark-bg relative finger finger-two h-32 w-10 rounded-2xl">
                    <span style={{ background: currentColor }} className="absolute top-3 w-3/4 h-1"></span>
                    <span style={{ background: currentColor }} className="absolute top-5 w-3/4 h-1"></span>
                    <span style={{ background: currentColor }} className="absolute bottom-2 w-8 h-8 rounded-t-3xl rounded-b-xl "></span>
                </div>
                <div style={{ "--i": '3' }} className="flex flex-col items-center justify-between dark:bg-main-bg bg-main-dark-bg relative finger finger-three h-40 w-10 rounded-2xl">
                    <span style={{ background: currentColor }} className="absolute top-3 w-3/4 h-1"></span>
                    <span style={{ background: currentColor }} className="absolute top-5 w-3/4 h-1"></span>
                    <span style={{ background: currentColor }} className="absolute bottom-2 w-8 h-8 rounded-t-3xl rounded-b-xl "></span>
                </div>
                <div style={{ "--i": '4' }} className="flex flex-col items-center justify-between dark:bg-main-bg bg-main-dark-bg relative finger finger-four h-32 w-10 rounded-2xl">
                    <span style={{ background: currentColor }} className="absolute top-3 w-3/4 h-1"></span>
                    <span style={{ background: currentColor }} className="absolute top-5 w-3/4 h-1"></span>
                    <span style={{ background: currentColor }} className="absolute bottom-2 w-8 h-8 rounded-t-3xl rounded-b-xl "></span>
                </div>
                <div style={{ "--i": '4' }} className="flex flex-col items-center justify-between dark:bg-main-bg bg-main-dark-bg relative finger finger-five h-10 w-12 rounded-tr-xl rounded-br-3xl ">
                    <span className="dark:bg-main-bg bg-main-dark-bg absolute w-10 h-5 -top-4 left-0"></span>
                </div>
            </div>
        </div >
    )
}

export default Loading