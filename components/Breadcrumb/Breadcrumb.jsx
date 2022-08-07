import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Breadcrumb({ title, subtitle }) {
  return (
    <div className="flex space-x-2 items-center text-gray-800">
      <HomeIcon className="h-5 w-5" />
      <Link href={"/"}>
        <p className="cursor-pointer hover:text-orange-500">Home</p>
      </Link>
      <ChevronRightIcon className="h-5 w-5" />

      <Link href={"/"}>
        <p className="cursor-pointer hover:text-orange-500">Foods</p>
      </Link>
      <ChevronRightIcon className="h-5 w-5" />

      <Link href={`/category/${title}`}>
        <p className="cursor-pointer hover:text-orange-500">{title}</p>
      </Link>
      {subtitle ? (
        <>
          <ChevronRightIcon className="h-5 w-5" />
          <p className="cursor-pointer hover:text-orange-500">{subtitle}</p>
        </>
      ) : null}
    </div>
  );
}
