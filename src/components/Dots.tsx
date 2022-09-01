import type { FC } from "react"
import { Dot } from "./Dot"

const dots: [letter: string, numbers: number[]][] = [
    ["a", [1, 4, 7]],
    ["b", [2, 4, 6]],
    ["c", [3, 4, 5]],
    ["d", [1, 2, 3, 5, 6, 7]],
    ["e", [3, 4, 5]],
    ["f", [2, 4, 6]],
    ["g", [1, 4, 7]],
]

export const Dots: FC = () => (
    <>
        {dots.map(([letter, numbers]) => numbers.map((number) => (
            <Dot key={`${letter}${number}`} name={`${letter}${number}`} />
        )))}
    </>
)
