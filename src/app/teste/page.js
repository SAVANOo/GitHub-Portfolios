"use client"
import { useEffect, useState } from "react"
import Link from "next/link";

export default function Teste() {
    const searchPerfil = "savano"
    const [repos, setRepos] = useState([]);
    const [perfil, setPerfil] = useState([]);

    fetch(`https://api.github.com/users/${searchPerfil}/repos`)
        .then(Response => Response.json())
        .then(data => data.forEach(element => {
            setRepos(data);
        }))

    fetch(`https://api.github.com/users/${searchPerfil}`)
        .then(Response => Response.json())
        .then(data => setPerfil(data))

    return (
        <main className="flex min-h-screen flex-col">
            <div id="UserContent"
                className="flex flex-wrap flex-row items-center text-center justify-around pt-4">
                <img
                    src={`${perfil.avatar_url}`}
                    alt="ProfileImage"
                    className="rounded-full flex w-64 "
                />
                <div className="w-3/6 flex flex-col gap-2">
                    <h1 className="text-6xl font-bold">{perfil.name}</h1>
                    <Link href={`${perfil.html_url}`}
                        target="_blank"
                        className="text-xl font-bold hover:underline">
                        @{perfil.login}
                    </Link>
                    <h1 className="text-xl te">{perfil.bio}</h1>
                </div>
            </div>

            <div className="flex flex-col items-center justify-around gap-2">
                <h1 className="text-2xl font-bold">Repositórios</h1>
                <ul className="flex flex-row flex-wrap gap-2 justify-center w-full ">
                    {repos.map((repo) => (
                        <li key={repo.id} className="bg-gray-900 p-2 rounded w-64 flex flex-col gap-3 justify-between">

                            <div className="flex flex-col">
                                <h1 className="font-sans font-bold text-lg">{repo.name}</h1>

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
                        </li>
                    ))
                    }
                </ul >
            </div>
        </main >
    )
}
