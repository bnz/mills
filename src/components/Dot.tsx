import type { FC } from "react"
import { cx } from "../helpers/cx"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { clickOnDot, getNextChip, isGameFirstPhase, matchedLines } from "../store/chips"

export const Dot: FC<{ name: string }> = ({ name: location }) => {
    const [chipName, setChipName] = useRecoilState(getNextChip)
    const onClick = useSetRecoilState(clickOnDot)
    const matched = useRecoilValue(matchedLines)
    const isFirstPhase = useRecoilValue(isGameFirstPhase)

    return (
        <div
            className={cx("dot", location)}
            onClick={() => {
                if (isFirstPhase) {
                    if (matched.size > 0) {
                        return
                    }
                    if (chipName) {
                        setChipName({ chipName, location })
                    }
                    onClick(location)
                }
            }}
        />
    )
}
