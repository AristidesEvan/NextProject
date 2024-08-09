import { ReactNode } from "react";

type Props = {
    phrase: string;
    author?: string;
}

export const Card = ({phrase, author}: Props) => {
    return (
        <div className="w-96 border-2 border-sky-600 p-3 text-3xl text-center italic">
            <h1 className="font-bold text-3xl italic">"{phrase}"</h1>
            <div className="text-right text-stone-400">- {author ? author : "Author Undefined"}.</div>
        </div>
    );
}