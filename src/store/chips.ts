import { atom, selector } from "recoil"
import { localStorageEffect } from "./localStorageEffect"
import { player as playerAtom } from "./player"
import { checkLines } from "./useCheckLines"

export const selectedChip = atom<string>({
    key: "selectedChip",
    default: "",
    effects: [
        localStorageEffect("selectedChip"),
    ],
})

export const currentPlayerChips = selector<string[]>({
    key: "currentPlayerChips",
    get: ({ get }) => {
        const _chips = get(chips)
        const current: string[] = []
        const player = get(playerAtom)
        Object.keys(_chips).forEach((key) => {
            if (key[0] === player) {
                current.push(_chips[key])
            }
        })
        return current
    },
})

export const isGameFirstPhase = selector<boolean>({
    key: "isFirstGamePhase",
    get: ({ get }) => Object.values(get(chips)).findIndex((location) => location === "") !== -1,
})

// {"b1":"d7","b2":"d5","b3":"a7","b4":"a1","b5":"d2","b6":"c3","b7":"b4","b8":"e4","b9":"f4","w1":"g7","w2":"e5","w3":"d6","w4":"a4","w5":"d1","w6":"d3","w7":"c4","w8":"b6","w9":"e3"}

export const chips = atom<Record<string, string>>({
    key: "chips",
    default: {
        b1: "",
        b2: "",
        b3: "",
        b4: "",
        b5: "",
        b6: "",
        b7: "",
        b8: "",
        b9: "",
        w1: "",
        w2: "",
        w3: "",
        w4: "",
        w5: "",
        w6: "",
        w7: "",
        w8: "",
        w9: "",
    },
    effects: [
        localStorageEffect("chips"),
    ],
})

export const getNextChip = selector({
    key: "getNextChip",
    get({ get }) {
        const _chips = get(chips)
        const player = get(playerAtom)

        return Object.keys(_chips).find((key) => (
            key[0] === player && _chips[key] === ""
        ))
    },
    set({ set }, { chipName, location }: any) {
        set(chips, (prevValue) => ({
            ...prevValue,
            [chipName]: location,
        }))
    },
})

export const matchedLines = atom<Set<string>>({
    key: "matchedLine",
    default: new Set(),
    effects: [
        localStorageEffect("matched-lines"),
    ],
})

export const cachedLines = atom<Set<string>>({
    key: "cachedLines",
    default: new Set(),
    effects: [
        localStorageEffect("cached-lines"),
    ],
})

export const clickOnDot = selector<string>({
    key: "clickOnDot",
    get: () => "",
    set: ({ get, set }) => {
        const matched = checkLines(get(currentPlayerChips))
        if (matched.size > 0) {
            set(matchedLines, matched)
            set(cachedLines, matched)
        } else {
            set(playerAtom, (was) => was === "w" ? "b" : "w")
        }
    },
})

export const getLocationPossibleMove = () => {

}
