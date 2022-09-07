import type { FC } from "react"
import { Dot } from "./Dot"
import type { Letters } from "../store/static"
import { verticalLines } from "../store/static"

export const Dots: FC = () => (
    <>
        {Object.keys(verticalLines).map((letter) =>
            verticalLines[letter as Letters].map((numbers) =>
                numbers.map((number) =>
                    <Dot key={`${letter}${number}`} name={`${letter}${number}`} />,
                ),
            ),
        )}
    </>
)
