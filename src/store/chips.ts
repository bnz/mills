import { atom, selector } from "recoil"
import { localStorageEffect } from "./localStorageEffect"
import { player } from "./player"

// {"b1":{"location":"d5","selected":false},"b2":{"location":"g7","selected":false},"b3":{"location":"d7","selected":false},"b4":{"location":"f4","selected":false},"b5":{"location":"e3","selected":false},"b6":{"location":"g1","selected":false},"b7":{"location":"d2","selected":false},"b8":{"location":"c3","selected":false},"b9":{"location":"a1","selected":false},"w1":{"location":"e5","selected":false},"w2":{"location":"d6","selected":false},"w3":{"location":"f6","selected":false},"w4":{"location":"g4","selected":false},"w5":{"location":"e4","selected":false},"w6":{"location":"f2","selected":false},"w7":{"location":"d1","selected":false},"w8":{"location":"d3","selected":false},"w9":{"location":"b2","selected":false}}

interface Chip {
    location: string
    selected: boolean
}

export const chips = atom<Record<string, Chip>>({
    key: "chips",
    default: {
        b1: {
            location: "",
            selected: false,
        },
        b2: {
            location: "",
            selected: false,
        },
        b3: {
            location: "",
            selected: false,
        },
        b4: {
            location: "",
            selected: false,
        },
        b5: {
            location: "",
            selected: false,
        },
        b6: {
            location: "",
            selected: false,
        },
        b7: {
            location: "",
            selected: false,
        },
        b8: {
            location: "",
            selected: false,
        },
        b9: {
            location: "",
            selected: false,
        },

        // - - - - - - - - - - -

        w1: {
            location: "",
            selected: false,
        },
        w2: {
            location: "",
            selected: false,
        },
        w3: {
            location: "",
            selected: false,
        },
        w4: {
            location: "",
            selected: false,
        },
        w5: {
            location: "",
            selected: false,
        },
        w6: {
            location: "",
            selected: false,
        },
        w7: {
            location: "",
            selected: false,
        },
        w8: {
            location: "",
            selected: false,
        },
        w9: {
            location: "",
            selected: false,
        },
    },
    effects: [
        localStorageEffect("chips"),
    ],
})

export const getNextChip = selector({
    key: "getNextChip",
    get({ get }) {
        const _chips = get(chips)
        const _player = get(player)

        return Object.keys(_chips).find((key) => (
            key[0] === _player && _chips[key].location === ""
        ))
    },
    set({ set }, { chipName, location }: any) {
        set(chips, (prevValue) => ({
            ...prevValue,
            [chipName]: {
                ...prevValue[chipName],
                location,
            },
        }))
    },
})
