import { FC } from "react"
import { useRecoilCallback } from "recoil"

export const DebugButton: FC = () => (
    <button
        className="absolute top-1 left-1/2 z-20 -translate-x-1/2"
        onClick={useRecoilCallback(({ snapshot }) => async () => {
            for (const node of snapshot.getNodes_UNSTABLE()) {
                const value = await snapshot.getPromise(node)
                console.debug(node.key, value)
            }
        }, [])}
    >
        Dump State
    </button>
)
