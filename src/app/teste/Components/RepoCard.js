import Link from "next/link";

export default function RepoCard({ repo }) {
    return (
        <li key={repo.id} className="bg-gray-900 p-2 rounded w-64 flex flex-col gap-3 justify-between">

            <div className="flex flex-col">
                <h1 className="font-sans font-bold text-lg text-white">{repo.name}</h1>

                {repo.description &&
                    <h2 className="text-xs text-gray-300 font-semibold truncate">{repo.description}</h2>
                }
            </div>

            <div className="gap-3 flex">
                <Link
                    href={repo.svn_url}
                    target="_blank"
                    className="text-white font-semibold bg-blue-600 py-1 px-2 rounded-full transition duration-200 ease-in-out hover:bg-blue-900">
                    Projeto
                </Link>

                {repo.homepage &&
                    <Link
                        href={repo.homepage}
                        target="_blank"
                        className="text-white font-semibold bg-green-600 py-1 px-2 rounded-full transition duration-200 ease-in-out hover:bg-green-900 ">
                        Deploy
                    </Link>
                }
            </div>
        </li>)
}