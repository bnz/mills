import { atom } from "recoil"
import { localStorageEffect } from "./localStorageEffect"

const documentTitleEffect = ({ onSet }: { onSet: any }) => {
    onSet((newValue: any) => {
        const titleBase = document.title.split(" - ")[0]
        document.title = `${titleBase} - ${newValue === "w" ? "ход белых" : "ход черных"}`
    })
}

export const player = atom<"w" | "b">({
    key: "player",
    default: "w",
    effects: [
        localStorageEffect("player"),
        documentTitleEffect,
    ],
})

