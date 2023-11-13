"use client"
import { useEffect, useState } from "react"
import Link from "next/link";

export default function Teste() {
    const [input, setInput] = useState("")
    const [searchPerfil, setSearchPerfil] = useState("")
    const [repos, setRepos] = useState([]);
    const [perfil, setPerfil] = useState([]);

    function pesquisar(value) {
        if (value) {
            setSearchPerfil(input)

            fetch(`https://api.github.com/users/${searchPerfil}`)
                .then(Response => Response.json())
                .then(data => setPerfil(data))

            fetch(`https://api.github.com/users/${searchPerfil}/repos`)
                .then(Response => Response.json())
                .then(data => data.forEach(element => {
                    setRepos(data);
                }))
        } else {
            console.log("nada");
        }
    }

    return (
        <main className="flex min-h-screen flex-col pt-3 bg-white">
            <div className="bg-white border-black border-2 flex self-center text-center gap-2 max-w-sm  p-3 rounded-full ">
                <input type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="text-black text-sm bg-transparent w-full focus:outline-none"
                    placeholder="Insira o GitHub User..." />
                <button
                    onClick={() => pesquisar(input)}
                    className="text-black" >
                    <svg className="w-8 h-8 rounded-full p-1 hover:bg-gray-200" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>


            <div id="User">
                <div id="UserContent"
                    className="flex flex-wrap flex-row items-center text-center justify-around pt-4">
                    <img
                        src={`${perfil.avatar_url}`}
                        alt="ProfileImage"
                        className="rounded-full flex w-64 "
                    />
                    <div className="w-3/6 flex flex-col gap-2">
                        <h1 className="text-6xl text-black font-bold">{perfil.name}</h1>
                        <Link href={`${perfil.html_url}`}
                            target="_blank"
                            className="text-xl text-black font-bold hover:underline">
                            @{perfil.login}
                        </Link>
                        <h1 className="text-xl text-black">{perfil.bio}</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-around gap-2">
                    <h1 className="text-2xl font-bold text-black">Repositórios</h1>
                    <ul className="flex flex-row flex-wrap gap-2 justify-center w-full ">
                        {repos.map((repo) => (
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
                            </li>
                        ))
                        }
                    </ul >
                </div>
            </div>
        </main >
    )
}
