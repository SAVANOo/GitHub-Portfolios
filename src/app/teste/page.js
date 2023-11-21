"use client"
import { useState } from "react"
import Repos from "./Components/Repos";
import UserInfos from "./Components/UserInfos";
export default function Teste() {
    const [input, setInput] = useState()
    const [repos, setRepos] = useState([]);
    const [perfil, setPerfil] = useState([]);

    async function pesquisar(value) {
        if (value) {

            fetch(`https://api.github.com/users/${value}`)
                .then(response => response.json())
                .then(data => setPerfil(data));

            fetch(`https://api.github.com/users/${value}/repos`)
                .then(response => response.json())
                .then(data => setRepos(data));
        } else {
            console.log("nada");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o comportamento padrão de recarregamento da página
        await pesquisar(input);
    };

    return (
        <main className="flex min-h-screen flex-col pt-3 bg-white">
            <form onSubmit={handleSubmit}
                className="bg-white flex border border-black self-center text-center gap-2 max-w-sm p-3 rounded-full">
                <input type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="text-black text-sm bg-transparent w-full focus:outline-none"
                    placeholder="Insira o GitHub User..." />
                <button
                    type="submit"
                    className="text-black" >
                    <svg className="w-8 h-8 rounded-full p-1 hover:bg-gray-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" />
                    </svg>
                </button>
            </form>



            <div id="User">
                {perfil && Object.keys(perfil).length !== 0 && (
                    <UserInfos perfil={perfil} />
                )}

                {repos && repos.length !== 0 && <Repos repos={repos} />}

            </div>
        </main >
    )
}
