import Link from "next/link";

export default function Navbar() {
  const NavItem = [
    { name: "Home", link: "/" },
    { name: "Foods", link: "/" },
    { name: "Ingredients", link: "/" },
    { name: "Local Culinary", link: "/" },
  ];

  return (
    <div className="h-16 w-full bg-white px-8 shadow">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-center md:justify-between">
        <Link href="/">
          <p className="cursor-pointer text-2xl font-semibold leading-relaxed text-gray-800 transition-all duration-300 ease-in-out hover:text-orange-500">
            mealapp
          </p>
        </Link>
        <div className="hidden space-x-8 md:flex">
          {NavItem.map((item) => (
            <Link key={item.name} href={item.link}>
              <p className="cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-500">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
