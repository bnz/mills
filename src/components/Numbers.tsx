import type { FC } from "react"
import { cx } from "../helpers/cx"
import { horizontalLines, Numbers as NumbersType } from "../store/static"
import { useRecoilValue } from "recoil"
import { hoveredDot } from "../store/atoms"

export const Numbers: FC = () => {
    const [, hovered] = useRecoilValue(hoveredDot)

    return (
        <>
            {Object.keys(horizontalLines).map((i) => (
                <div
                    key={i}
                    className={cx(
                        "label-number",
                        `nr${i}`,
                        hovered === (i as never as NumbersType) && "label-hovered",
                    )}
                >
                    {i}
                </div>
            ))}
        </>
    )
}
