import RepoCard from "./RepoCard";

export default function Repos({ repos }) {
    return (
        <div className="flex flex-col items-center justify-around gap-2">
            <h1 className="text-2xl font-bold text-black">Repositórios</h1>
            <ul className="flex flex-row flex-wrap gap-2 justify-center w-full ">
                {repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))
                }
            </ul >
        </div>

    )
}
