import { BsGithub, BsLinkedin } from "react-icons/bs"
import { AiFillCloseCircle, AiFillInstagram } from "react-icons/ai"
import { RiMenu3Line } from "react-icons/ri";

import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useStateContext } from "../context/Context"

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    const { currentColor, navItems, t } = useStateContext()
    return (
        <>
            <button className="z-20 absolute md:fixed right-10 top-10 font-semibold text-3xl" onClick={() => setActiveMenu(true)}>
                <RiMenu3Line />
            </button>
            <div className={`${activeMenu ? "flex" : "hidden"} fixed z-20 h-full w-full bg-half-transparent-light dark:bg-half-transparent-dark dark:text-white`}>
                <nav className="navanime fixed w-96 h-full" style={{ background: currentColor }}>
                    <ul className="h-full w-full flex flex-col justify-between direction py-10 px-7">
                        <div className="w-full flex justify-between items-center text-2xl font-semibold mb-10">
                            <h1 className="ltr:font-summer">miro</h1>
                            <button onClick={() => setActiveMenu(false)}><AiFillCloseCircle /></button>
                        </div>
                        {navItems.map(({ name, href }, idx) => (
                            <li
                                className="flex items-center gap-2 text-3xl md:text-5xl font-semibold"
                                key={idx}
                            >
                                <span className="w-3 h-3 border-1 border-black rounded-full"></span>
                                <NavLink
                                    onClick={() => { setActiveMenu(false) }}
                                    style={({ isActive }) => ({ color: isActive ? "#3f2900" : '' })}
                                    to={href}>
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                        <div className="flex items-center justify-between mt-10 font-semibold rtl:font-titr ltr:font-summer">
                            <h3 className="dark:text-gray-200">{t("followMe")}</h3>
                            <div className="contact flex gap-3">
                                <a className="hover:scale-150" href="https://www.instagram.com/mehdi0_0keramati"><AiFillInstagram /></a>
                                <a className="hover:scale-150" href="https://www.github.com/mehdi0-0keramati"><BsGithub /></a>
                                <a className="hover:scale-150" href="https://www.linkedin.com/in/mehdi-keramati-503533267"><BsLinkedin /></a>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar