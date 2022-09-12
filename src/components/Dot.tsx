import type { FC } from "react"
import { cx } from "../helpers/cx"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {
    availableDots,
    currentPlayerChips,
    getNextChip,
    isGameFirstPhase,
    matchedLines,
    selectedChip,
    player as playerAtom, hoveredDot,
} from "../store/atoms"
import { checkLines } from "../helpers/game/checkLines"
import { Letters, Numbers } from "../store/static"

export const Dot: FC<{ name: string }> = ({ name: location }) => {
    const isFirstPhase = useRecoilValue(isGameFirstPhase)
    const current = useRecoilValue(currentPlayerChips)

    const setPlayer = useSetRecoilState(playerAtom)
    const hovered = useSetRecoilState(hoveredDot)

    const [chipName, setChipName] = useRecoilState(getNextChip)
    const [matched, setMatched] = useRecoilState(matchedLines)
    const [available, setAvailable] = useRecoilState(availableDots)
    const [selected, setSelected] = useRecoilState(selectedChip)

    const isDotAvailable = available.has(location) && selected !== ""

    const [ltr, nbr]: [Letters, Numbers] = location as unknown as [Letters, Numbers]

    return (
        <div
            className={cx("dot", location, isDotAvailable && "animate")}
            onMouseEnter={() => hovered([ltr, nbr])}
            onMouseLeave={() => hovered([null, null])}
            onClick={() => {
                if (isFirstPhase) {
                    if (matched.size > 0) {
                        return
                    }
                    setChipName({ chipName, location })

                    // TODO !!

                    // const checked = checkLines(current)
                    // if (checked.size > 0) {
                    //     setMatched(checked)
                    // } else {
                    //     setPlayer((was) => was === "w" ? "b" : "w")
                    // }
                    setPlayer((was) => was === "w" ? "b" : "w")
                } else if (isDotAvailable) {
                    setChipName({ chipName: selected, location })
                    setSelected("")
                    setAvailable(new Set())

                    const checked = checkLines(current)
                    if (checked.size > 0) {
                        setMatched(checked)
                    } else {
                        setPlayer((was) => was === "w" ? "b" : "w")
                    }
                }
            }}
        />
    )
}

// {"b1":"e5","b2":"c4","b3":"c5","b4":"d3","b5":"f2","b6":"d1","b7":"g4","b8":"g7","b9":"a4","w1":"d6","w2":"f6","w3":"b4","w4":"d5","w5":"c3","w6":"d2","w7":"g1","w8":"f4","w9":"a7"}
