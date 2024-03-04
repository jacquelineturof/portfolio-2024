import { usePathname } from "next/navigation";
import Link from "next/link";
import { Poiret_One } from "next/font/google";
import useWindowSize from "@/hooks/useWindowSize";
import { useCursorContext } from "@/context/CursorContext";

import Avatar from "./Avatar";
import Menu from "./Menu";

const NAV_LINKS = [
  "home", "about", "work", "blog"
];

const poiretOne = Poiret_One({
  subsets: ["latin"],
  weight: "400"
});

export default function Navbar() {
  const { width } = useWindowSize();
  const pathname = usePathname();
  const { setIsMouseOverNav } = useCursorContext();


  const getLinkStyles = (href) => {
    if (href === pathname) {
      return "active";
    } else {
      return "capitalize text-bold px-3 py-2 rounded-full flex flex-col items-center hover:text-white";
    }
  };

  return (
    <nav className="flex h-16 px-8 py-12 w-full items-center justify-between bg-bg-gray">
      {/** brand */}
      <div className={`flex flex-col text-3xl text-black leading-none ${poiretOne.className}`}>
        <span>Jackie</span>
        <span className="ml-4"> Turof </span>
      </div>
      {/** links */}
      <div className="w-96 h-12 bg-transparent rounded-full" role="navigation">
        <ul
          className="w-full h-full hidden lg:flex items-center justify-evenly text-black relative cursor-pointer"
          onMouseEnter={() => setIsMouseOverNav(true)}
          onMouseLeave={() => setIsMouseOverNav(false)}
        >
          {NAV_LINKS.map((nl) => (
            <li
              key={nl}
              className={getLinkStyles(nl)}
            >
              <Link href={`/${nl === "home" ? "" : nl}`}>{nl}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/** show avatar on desktop, menu control on mobile */}
      {width > 700 ? <Avatar /> : <Menu />}
    </nav>
  )
};