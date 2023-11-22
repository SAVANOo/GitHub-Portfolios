"use client"
import { useState } from "react"
import Repos from "./Components/Repos";
import UserInfos from "./Components/UserInfos";
import Input from "./Components/Input";
export default function Teste() {
    
    const [repos, setRepos] = useState([]);
    const [perfil, setPerfil] = useState([]);


    return (
        <main className="flex min-h-screen flex-col pt-3 bg-white">
            <Input setPerfil={setPerfil} setRepos={setRepos} />

            <div id="User">
                {perfil && Object.keys(perfil).length !== 0 && (
                    <UserInfos perfil={perfil} />
                )}

                {repos && repos.length !== 0 && <Repos repos={repos} />}

            </div>
        </main >
    )
}
