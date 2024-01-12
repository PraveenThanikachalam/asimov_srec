import Link from "next/link";
import { usePathname } from "next/navigation";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function NavBar() {
  const pathName = usePathname();

  return (
    <div className="md:absolute sm:relative md:left-4 sm:top-50 sm:justify-center sm:flex  object-contain md:top-10">
      <ul className="flex md:flex-row  w-auto h-auto sm:ml-3 sm:gap-y-5 sm:mt-10 md:mt-0   sm:gap-x-5 md:gap-x-11 md:ml-14">
        {links.map((link, idx) => (
          <div key={idx}>
            {pathName === link.href ? (
              <li>
                <Link
                  href={link.href}
                  className="text-amber-800 font-semibold text-lg"
                >
                  {link.name}
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  className="text-white font-semibold hover:text-amber-800 text-lg"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            )}
          </div>
        ))}{" "}
        {/* <Link
          className="text-white font-semibold hover:text-amber-800 text-lg"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="text-white font-semibold  hover:text-amber-800  text-lg"
          href={"/events"}
        >
          Events
        </Link>
        <Link
          className="text-white font-semibold  hover:text-amber-800  text-lg"
          href={"/gallery"}
        >
          Gallery
        </Link>
        <Link
          className="text-white font-semibold  hover:text-amber-800  text-lg"
          href={"/blog"}
        >
          Blog
        </Link>
        <Link
          className="text-white font-semibold  hover:text-amber-800  text-lg"
          href={"/about"}
        >
          About
        </Link> */}
      </ul>
    </div>
  );
}
