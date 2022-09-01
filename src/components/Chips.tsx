import type { FC } from "react"
import { cx } from "../helpers/cx"
import { useRecoilState, useRecoilValue } from "recoil"
import { chips as chipsAtom } from "../store/chips"
import { player as playerAtom } from "../store/player"

export const Chips: FC = () => {
    const [chips, setChips] = useRecoilState(chipsAtom)
    const player = useRecoilValue(playerAtom)

    return (
        <>
            {Object.keys(chips).map((chip) => {
                const { selected, location } = chips[chip]
                const isAvailable = chip[0] === player

                return (
                    <div
                        key={chip}
                        className={cx(
                            chip[0] === "w" ? "chip-white" : "chip-black",
                            location,
                            selected && "selected",
                        )}
                        onClick={() => {
                            if (isAvailable) {
                                setChips((currVal) => {
                                    const copy = structuredClone(currVal)
                                    Object.keys(copy).forEach((key) => {
                                        if (key !== chip) {
                                            copy[key].selected = false
                                        }
                                    })
                                    return {
                                        ...copy,
                                        [chip]: {
                                            ...copy[chip],
                                            selected: !copy[chip].selected,
                                        },
                                    }
                                })
                            }
                        }}
                    />
                )
            })}
        </>
    )
}
