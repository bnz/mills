import type { FC } from "react"
import { cx } from "../helpers/cx"
import { verticalLines } from "../store/useCheckLines"

export const Letters: FC = () => (
    <>
        {Object.keys(verticalLines).map((letter) => (
            <div key={letter} className={cx("label-letter", letter)}>{letter}</div>
        ))}
    </>
)
