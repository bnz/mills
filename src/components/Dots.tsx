import type { FC } from "react"
import { Dot } from "./Dot"
import { Letters, verticalLines } from "../store/useCheckLines"

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
