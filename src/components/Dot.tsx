import type { FC } from "react"
import { cx } from "../helpers/cx"
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from "recoil"
import { availableDots, selectedChip, hoveredDot } from "../store/atoms"
import { Letters, Numbers } from "../store/static"
import { playerMove } from "../helpers/game/playerMove"
import { useCallback } from "react"

export const Dot: FC<{ name: string }> = ({ name: location }) => {
    const hovered = useSetRecoilState(hoveredDot)
    const available = useRecoilValue(availableDots)
    const selected = useRecoilValue(selectedChip)
    const isDotAvailable = available.has(location) && selected !== ""
    const [ltr, nbr]: [Letters, Numbers] = location as unknown as [Letters, Numbers]

    return (
        <div
            className={cx("dot", location, isDotAvailable && "animate")}
            onMouseEnter={useCallback(() => hovered([ltr, nbr]), [ltr, nbr])}
            onMouseLeave={useCallback(() => hovered([null, null]), [])}
            onClick={useRecoilCallback(playerMove.bind(null, location, isDotAvailable), [location])}
        />
    )
}
