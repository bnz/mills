import { horizontalLines, verticalLines } from "../../store/static"
import { findMatch } from "./findMatch"

export const checkLines = (currentChips: string[]): Set<string> => {
    const result = new Set<string>()
    const horizontal = findMatch(horizontalLines, currentChips)
    if (horizontal) {
        result.add(horizontal)
    }
    const vertical = findMatch(verticalLines, currentChips)
    if (vertical) {
        result.add(vertical)
    }
    return result
}
