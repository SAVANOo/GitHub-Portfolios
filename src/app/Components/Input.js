import { useState } from "react"

export default function Input({ setPerfil, setRepos }) {
    const [input, setInput] = useState()

    async function pesquisar(value) {
        if (value) {
            fetch(`https://api.github.com/users/${value}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erro na API do GitHub: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(userData => {
                    setPerfil(userData)

                    if (userData.login) {
                        // Se o usuário existir, obter repositórios
                        fetch(`https://api.github.com/users/${value}/repos`)
                            .then(response => response.json())
                            .then(repoData => setRepos(repoData)
                            )
                            .catch(repoError => {
                                console.error('Erro ao buscar repositórios do usuário no GitHub:', repoError.message);
                            });
                    }
                }
                )
                .catch(error => {
                    console.error('Erro ao buscar dados do usuário no GitHub:', error.message);
                    // Trate o erro ou exiba uma mensagem para o usuário
                });

        } else {
            console.log("nada");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o comportamento padrão de recarregamento da página
        await pesquisar(input);
    };
    return (
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
    )
}