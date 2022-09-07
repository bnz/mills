import { atom, selector } from "recoil"
import { localStorageEffect } from "./effects/localStorageEffect"
import { documentTitleEffect } from "./effects/documentTitleEffect"

export const player = atom<"w" | "b">({
    key: "player",
    default: "w",
    effects: [
        localStorageEffect("player"),
        documentTitleEffect,
    ],
})

export const selectedChip = atom<string>({
    key: "selected-chip",
    default: "",
    effects: [
        localStorageEffect("selected-chip"),
    ],
})

export const currentPlayerChips = selector<string[]>({
    key: "current-player-chips",
    get({ get }) {
        const _chips = get(chips)
        const _player = get(player)
        const current: string[] = []
        Object.keys(_chips).forEach((key) => {
            if (key[0] === _player) {
                current.push(_chips[key])
            }
        })
        return current
    },
})

export const isGameFirstPhase = selector<boolean>({
    key: "is-first-game-phase",
    get({ get }) {
        return Object.values(get(chips)).findIndex((location) => location === "") !== -1
    },
})

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
    key: "get-next-chip",
    get({ get }) {
        const _chips = get(chips)
        const _player = get(player)
        return Object.keys(_chips).find((key) => key[0] === _player && _chips[key] === "")
    },
    set({ set }, { chipName, location }: any) {
        set(chips, (prevValue) => ({
            ...prevValue,
            [chipName]: location,
        }))
    },
})

export const matchedLines = atom<Set<string>>({
    key: "matched-line",
    default: new Set(),
    effects: [
        localStorageEffect("matched-lines"),
    ],
})

export const availableDots = atom<Set<string>>({
    key: "available-dots",
    default: new Set(),
    effects: [
        localStorageEffect("available-dots"),
    ],
})
