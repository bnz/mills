import type { FC } from "react"
import { cx } from "../helpers/cx"

const labelLetters = ["a", "b", "c", "d", "e", "f", "g"]

export const Letters: FC = () => (
    <>
        {labelLetters.map((letter) => (
            <div key={letter} className={cx("label-letter", letter)}>{letter}</div>
        ))}
    </>
)
