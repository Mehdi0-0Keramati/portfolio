import { NavLink } from "react-router-dom"
import { useStateContext } from "../context/Context";

const ShortcutPages = () => {
    const { currentColor, navItems } = useStateContext();



    return (
        <div className="z-10 fixed right-8 h-screen hidden md:flex flex-col items-center justify-center gap-3">
            {
                navItems.map(({ href, name }, idx) => (
                    <NavLink
                        key={idx}
                        className="border-1 border-black dark:border-gray-500 rounded-full w-3 h-3"
                        style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "transparent" })}
                        to={href}>
                    </NavLink>
                ))
            }
        </div>
    )
}

export default ShortcutPages