import type { Letters, Numbers } from "../../store/static"
import { horizontalLines, verticalLines } from "../../store/static"
import { useRecoilValue } from "recoil"
import { chips as chipsAtom } from "../../store/atoms"

export const useGetAvailableDots = (location: string) => {
    const chips = useRecoilValue(chipsAtom)

    return (): Set<string> => {
        const letter = location[0]
        const number = Number(location[1])
        let result = new Set<string>()

        const takenLocations = new Set(Object.values(chips).filter(Boolean))

        const neighboursVertical = verticalLines[letter as Letters].find((nn) => nn.find((nnn) => nnn === number))!

        switch (neighboursVertical.findIndex((_n) => _n === number)) {
            case 0:
            case 2: {
                const location = `${letter}${neighboursVertical[1]}`
                if (!takenLocations.has(location)) {
                    result = new Set(result).add(location)
                }
                break
            }
            case 1: {
                const location1 = `${letter}${neighboursVertical[0]}`
                if (!takenLocations.has(location1)) {
                    result = new Set(result).add(location1)
                }
                const location2 = `${letter}${neighboursVertical[2]}`
                if (!takenLocations.has(location2)) {
                    result = new Set(result).add(location2)
                }
                break
            }
        }

        const neighboursHorizontal = horizontalLines[number as Numbers].find((ll) => ll.find((lll) => lll === letter))!

        switch (neighboursHorizontal.findIndex((_l) => _l === letter)) {
            case 0:
            case 2: {
                const location = `${neighboursHorizontal[1]}${number}`
                if (!takenLocations.has(location)) {
                    result = new Set(result).add(location)
                }
                break
            }
            case 1: {
                const location1 = `${neighboursHorizontal[0]}${number}`
                if (!takenLocations.has(location1)) {
                    result = new Set(result).add(location1)
                }
                const location2 = `${neighboursHorizontal[2]}${number}`
                if (!takenLocations.has(location2)) {
                    result = new Set(result).add(location2)
                }
                break
            }
        }

        return result
    }
}
