import type { FC } from "react"
import { cx } from "../helpers/cx"
import { useRecoilCallback, useRecoilState } from "recoil"
import { player } from "../store/player"
import { getNextChip } from "../store/chips"

export const Dot: FC<{ name: string }> = ({ name: location }) => {
    const [chipName, setChipName] = useRecoilState(getNextChip)

    return (
        <div
            className={cx("dot", location)}
            onClick={useRecoilCallback(({ set }) => () => {
                if (chipName) {
                    setChipName({ chipName, location })
                    set(player, (was) => was === "w" ? "b" : "w")
                }
            }, [chipName, setChipName, location])}
        />
    )
}
