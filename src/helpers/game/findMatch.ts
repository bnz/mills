const arrIncludesArr = <T, >(arr1: T[], arr2: T[]): boolean => arr2.every((r) => arr1.includes(r))

export const findMatch = (lines: any, currentChips: any): string => {
    let result: string = ""
    Object.keys(lines).forEach((key) => {
        lines[key].forEach((line: any[]) => {
            const ln = line.map((l: string | number) => typeof l === "string" ? `${l}${key}` : `${key}${l}`)
            if (arrIncludesArr(currentChips, ln)) {
                result = ln.join(",")
            }
        })
    })
    return result
}
