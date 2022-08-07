import Link from "next/link";

export default function MealCard({ category, thumbnail, nextLink, params }) {
  return (
    <Link href={`/${nextLink}/${params}`}>
      <div className="cursor-pointer rounded-lg bg-white p-3 text-gray-800 shadow hover:text-orange-500">
        <div className="rounded-lg bg-gray-100 p-3">
          <picture>
            <img src={thumbnail} alt="thumbnail" className="rounded-lg" />
          </picture>
        </div>
        <p className="mt-3 cursor-pointer text-center font-semibold transition-all duration-300 ease-in-out">
          {category}
        </p>
      </div>
    </Link>
  );
}
