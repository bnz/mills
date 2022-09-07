import type { FC } from "react"
import { useRecoilValue } from "recoil"
import { chips as chipsAtom } from "../store/atoms"
import { Chip } from "./Chip"

export const Chips: FC = () => {
    const chips = useRecoilValue(chipsAtom)

    return (
        <>
            {Object.keys(chips).map((chip) => (
                <Chip key={chip} name={chip} location={chips[chip]} />
            ))}
        </>
    )
}
