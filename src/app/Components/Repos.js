import RepoCard from "./RepoCard";

export default function Repos({ repos }) {
    return (
        <div className="flex flex-col items-center justify-around gap-2">
            <h1 className="text-2xl font-bold text-black">{`Repositórios (${repos.length})`}</h1>
            {repos && Object.keys(repos).length !== 0 ? (
                <ul className="flex flex-row flex-wrap gap-2 justify-center w-full ">
                    {repos.map((repo) => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </ul >
            ) : (
                <b className="text-md text-red-600">Esse usuário não possui repositórios públicos.</b>
            )
            }
        </div>

    )
}