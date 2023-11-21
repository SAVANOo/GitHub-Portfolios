import Link from "next/link";

export default function UserInfos({ perfil }) {
    return (
        <div id="UserContent"
            className="flex flex-wrap flex-row items-center text-center justify-around p-3">
            <img
                width={460}
                height={460}
                src={perfil.avatar_url}
                alt="ProfileImage"
                className="rounded-full flex w-64 "
            />
            <div className="max-w-lg flex flex-col gap-2">
                <h1 className="text-6xl text-black font-bold">{perfil.name}</h1>
                <Link href={`${perfil.html_url}`}
                    target="_blank"
                    className="text-xl text-black  font-bold hover:underline">
                    @{perfil.login}
                </Link>
                <h1 className="text-xl text-left text-black">{perfil.bio}</h1>
            </div>
        </div>
    )
}