import type { FC } from "react"
import { cx } from "../helpers/cx"
import { chips, isGameFirstPhase, matchedLines, selectedChip } from "../store/chips"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { player as playerAtom } from "../store/player"

interface ChipProps {
    name: string
    location: string
}

export const Chip: FC<ChipProps> = ({ name, location }) => {
    const [selected, setSelected] = useRecoilState(selectedChip)
    const [player, setPlayer] = useRecoilState(playerAtom)
    const isFirstPhase = useRecoilValue(isGameFirstPhase)
    const [matched, setMatched] = useRecoilState(matchedLines)
    const setChips = useSetRecoilState(chips)
    const doDeleteMe = matched.size && name[0] !== player

    const onClick = () => {
        if (doDeleteMe) {
            setChips((currVal) => {
                const copy = JSON.parse(JSON.stringify(currVal))
                delete copy[name]
                return copy
            })
            setMatched(new Set())
            setPlayer((was) => was === "w" ? "b" : "w")
            return
        }

        if (!isFirstPhase) {
            if (name[0] === player) {
                setSelected((currVal) => currVal === name ? "" : name)
            }
        }
    }

    return (
        <div
            {...(doDeleteMe ? {
                onMouseEnter: (e: { target: any }) => {
                    e.target.classList.add("delete-cross")
                },
                onMouseLeave: (e: { target: any }) => {
                    e.target.classList.remove("delete-cross")
                },
            } : {})}
            className={cx(
                name[0] === "w" ? "chip-white" : "chip-black",
                location,
                selected === name && "selected",
            )}
            onClick={onClick}
        >
            {name}
        </div>
    )
}
