import type { FC, PropsWithChildren, Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"
import { debounce } from "./helpers/debounce"
import { useRecoilValue } from "recoil"
import { player as playerAtom } from "./store/player"
import { cx } from "./helpers/cx"

const debounce2 = debounce((fn: Dispatch<SetStateAction<number>>) => {
    fn(window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth)
}, 400)

const padding = 10

export const Wrap: FC<PropsWithChildren> = ({ children }) => {
    const [w, setW] = useState(window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth)
    const S = `${w - (w / padding) * 2}px`
    const player = useRecoilValue(playerAtom)

    useEffect(() => {
        window.addEventListener("resize", () => debounce2(setW), false)
    }, [])

    return (
        <>
            <div
                className={cx("side-w", player === "w" && "visible opacity-100")}
                style={{ ["--S" as string]: S }}
            />
            <div
                className={cx("side-b", player === "b" && "visible opacity-100")}
                style={{ ["--S" as string]: S }}
            />
            <div
                className={cx("wrapper", player)}
                style={{
                    ["--P" as string]: `${w / padding}px`,
                    ["--S" as string]: S,
                }}
            >
                {children}
            </div>
        </>
    )
}
