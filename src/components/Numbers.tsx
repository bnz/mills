import type { FC } from "react"
import { cx } from "../helpers/cx"

export const labelNumbers = [1, 2, 3, 4, 5, 6, 7]

export const Numbers: FC = () => (
    <>
        {labelNumbers.map((i) => (
            <div key={i} className={cx("label-number", `nr${i}`)}>{i}</div>
        ))}
    </>
)
