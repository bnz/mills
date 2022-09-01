import { atom } from "recoil"
import { localStorageEffect } from "./localStorageEffect"

export const player = atom<"w" | "b">({
    key: "player",
    default: "w",
    effects: [
        localStorageEffect("player"),
    ],
})

