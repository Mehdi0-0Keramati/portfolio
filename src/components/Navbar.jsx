import { NavLink } from "react-router-dom"
import { useStateContext } from "../context/Context"
const Navbar = () => {
  const { currentColor, navItems } = useStateContext();
  return (
    <nav className="bg-main-dark-bg dark:bg-gray-200 fixed bottom-0 w-full z-10">
      <ul style={{ borderTop: `2px solid ${currentColor}` }} className="flex items-center justify-center p-2">
        {
          navItems.map(({ name, href }, idx) => (
            <li className="mx-4 font-semibold" key={idx}>
              <NavLink className="text-xs md:text-sm text-gray-300 dark:text-gray-800" style={({ isActive }) => ({ color: isActive ? currentColor : '' })}
                to={href}>
                {name}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar