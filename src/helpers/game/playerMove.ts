import {
    availableDots,
    currentPlayerChipsLocations,
    getNextChip,
    isGameFirstPhase,
    matchedLines,
    player as playerAtom, selectedChip,
} from "../../store/atoms"
import { checkLines } from "./checkLines"
import { CallbackInterface } from "recoil"

type PlayerMove = (
    location: string,
    isDotAvailable: boolean,
    props: { set: CallbackInterface["set"], snapshot: CallbackInterface["snapshot"] },
) => () => Promise<void>

export const playerMove: PlayerMove = (location, isDotAvailable, { set, snapshot }) => async () => {
    const isFirstPhase = await snapshot.getPromise(isGameFirstPhase)
    const chipName = await snapshot.getPromise(getNextChip)

    if (isFirstPhase) {
        const matched = await snapshot.getPromise(matchedLines)
        if (matched.size > 0) {
            return
        }
        set(getNextChip, { chipName, location })
    } else if (isDotAvailable) {
        set(getNextChip, { chipName, location })
        set(selectedChip, "")
        set(availableDots, new Set())
    }

    if (isFirstPhase || isDotAvailable) {
        const checked = checkLines([
            ...await snapshot.getPromise(currentPlayerChipsLocations),
            location,
        ])
        if (checked.size > 0) {
            set(matchedLines, checked)
        } else {
            set(playerAtom, (was) => was === "w" ? "b" : "w")
        }
    }


}
