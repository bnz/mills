import type { FC } from "react"
import { i18n } from "./i18n/i18n"

export const TmpRestartButton: FC = () => (
    <button
        className="absolute top-1 left-1/3 z-20 -translate-x-1/2"
        onClick={() => {
            localStorage.clear()
            window.location = window.location
        }}
    >
        {i18n("сначала")}
    </button>
)
