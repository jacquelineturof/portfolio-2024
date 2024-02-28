import { usePathname } from "next/navigation";

const NAV_LINKS = [
  "home", "about", "work", "blog"
];

export default function Navbar({ setIsNav }) {
const pathname = usePathname();

  const getLinkStyles = (href) => {
    if (href === pathname) {
      return "active";
    } else {
      return "capitalize text-bold px-3 py-2 rounded-full flex flex-col items-center hover:text-white";
    }
  };

  return (
    <div className="w-96 h-12 bg-transparent rounded-full" role="navigation">
      <ul 
        className="w-full h-full hidden lg:flex items-center justify-evenly text-black relative cursor-pointer"
        onMouseEnter={() => setIsNav(true)}
        onMouseLeave={() => setIsNav(false)}
      >
        { NAV_LINKS.map((nl, index) => (
          <li
            key={nl} 
            className={getLinkStyles(nl)}
          >
            {nl}
          </li>
        ))}
      </ul>
    </div>
  )
};