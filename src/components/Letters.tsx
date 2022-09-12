import type { FC } from "react"
import { cx } from "../helpers/cx"
import { verticalLines } from "../store/static"
import { useRecoilValue } from "recoil"
import { hoveredDot } from "../store/atoms"

export const Letters: FC = () => {
    const [hovered] = useRecoilValue(hoveredDot)

    return (
        <>
            {Object.keys(verticalLines).map((letter) => (
                <div
                    key={letter}
                    className={cx(
                        "label-letter",
                        letter,
                        hovered === letter && "label-hovered",
                    )}
                >
                    {letter}
                </div>
            ))}
        </>
    )
}
