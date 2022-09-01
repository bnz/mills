import type { FC } from "react"
import { Wrap } from "./Wrap"
import { Chips } from "./components/Chips"
import { Dots } from "./components/Dots"
import { Numbers } from "./components/Numbers"
import { Letters } from "./components/Letters"

export const App: FC = () => (
    <Wrap>
        <Numbers />
        <Letters />
        <div className="square-out">
            <div className="square-mid" />
            <div className="square-inner" />
            <div className="line-left" />
            <div className="line-right" />
            <div className="line-top" />
            <div className="line-bottom" />
            <Dots />
            <Chips />
        </div>
    </Wrap>
)
