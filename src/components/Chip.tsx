import type { FC } from "react"
import { cx } from "../helpers/cx"
import {
    availableDots,
    chips,
    isGameFirstPhase,
    matchedLines,
    selectedChip,
    player as playerAtom,
} from "../store/atoms"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { useGetAvailableDots } from "../helpers/game/useGetAvailableDots"

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
    const setAvailable = useSetRecoilState(availableDots)

    const getAvailableDots = useGetAvailableDots(location)

    const doDeleteMe = matched.size > 0 && name[0] !== player

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

        const neighbours = getAvailableDots()

        if (
            !isFirstPhase &&
            neighbours.size > 0
            && name[0] === player
            && matched.size <= 0
        ) {
            if (selected === name) {
                setSelected("")
                setAvailable(new Set())
            }
            if (selected === "" || (selected !== name && selected !== "")) {
                setSelected(name)
                setAvailable(neighbours)
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
            {/*{name}*/}
        </div>
    )
}
