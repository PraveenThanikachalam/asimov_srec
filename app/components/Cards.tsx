import Image from "next/image";

interface iAppProps {
  title: string;
  overview: string;
  url: string;
  redirect: string;
}

export default function Cards({ title, overview, url, redirect }: iAppProps) {
  return (
    <div className="max-w-sm mt-10 mb-5 ml-2 mr-3 bg-white border p-2 sm:flex sm:flex-col sm:gap-x-3 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative h-40">
        <Image
          layout="fill"
          objectFit="cover"
          className=" rounded-t-lg bg-zinc-900"
          src={url}
          alt={"images"}
        />
      </div>
      <div className="flex flex-col justify-between h-full p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </div>
        <a
          href={redirect}
          className="inline-flex items-center self-end px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
