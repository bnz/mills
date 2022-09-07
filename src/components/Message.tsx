import type { FC } from "react"
import { isGameFirstPhase, matchedLines, player as playerAtom } from "../store/atoms"
import { useRecoilValue } from "recoil"
import { i18n } from "../i18n/i18n"

export const Message: FC = () => {
    const matched = useRecoilValue(matchedLines)
    const player = useRecoilValue(playerAtom)
    const isFirstPhase = useRecoilValue(isGameFirstPhase)

    if (matched.size > 0) {
        return (
            <div className="message">
                <div className="msg">
                    {i18n("забрите любую")} {player === "w" ? i18n("черную") : i18n("белую")} {i18n("фишку")}
                </div>
            </div>
        )
    }

    const subMessage = isFirstPhase ? i18n("поставьте фишку") : i18n("передвиньте фишку")

    return (
        <div className="message">
            {player === "w" ? (
                <div className="white">
                    {i18n("Ход белых")}
                </div>
            ) : (
                <div className="black">
                    {i18n("Ход черных")}
                </div>
            )}
            <i>{subMessage}</i>
        </div>
    )
}
