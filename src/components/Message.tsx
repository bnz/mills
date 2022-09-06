import type { FC } from "react"
import { isGameFirstPhase, matchedLines } from "../store/chips"
import { player as playerAtom } from "../store/player"
import { useRecoilValue } from "recoil"

export const Message: FC = () => {
    const matched = useRecoilValue(matchedLines)
    const player = useRecoilValue(playerAtom)
    const isFirstPhase = useRecoilValue(isGameFirstPhase)

    if (matched.size > 0) {
        return (
            <div className="message">
                <div className="msg">
                    забрите любую {player === "w" ? "черную" : "белую"} фишку
                </div>
            </div>
        )
    }

    const subMessage = isFirstPhase ? "поставьте фишку" : "передвиньте фишку"

    return (
        <div className="message">
            {player === "w" ? (
                <div className="white">Ход белых</div>
            ) : (
                <div className="black">Ход черных</div>
            )}
            <i>{subMessage}</i>
        </div>
    )
}
