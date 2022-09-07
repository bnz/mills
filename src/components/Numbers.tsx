import type { FC } from "react"
import { cx } from "../helpers/cx"
import { horizontalLines } from "../store/static"

export const Numbers: FC = () => (
    <>
        {Object.keys(horizontalLines).map((i) => (
            <div key={i} className={cx("label-number", `nr${i}`)}>{i}</div>
        ))}
    </>
)
