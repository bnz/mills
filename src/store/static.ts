export type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7

export type Letters = "a" | "b" | "c" | "d" | "e" | "f" | "g"

export const horizontalLines: Record<Numbers, [Letters, Letters, Letters][]> = {
    1: [["a", "d", "g"]],
    2: [["b", "d", "f"]],
    3: [["c", "d", "e"]],
    4: [["a", "b", "c"], ["e", "f", "g"]],
    5: [["c", "d", "e"]],
    6: [["b", "d", "f"]],
    7: [["a", "d", "g"]],
}

export const verticalLines: Record<Letters, [Numbers, Numbers, Numbers][]> = {
    "a": [[1, 4, 7]],
    "b": [[2, 4, 6]],
    "c": [[3, 4, 5]],
    "d": [[1, 2, 3], [5, 6, 7]],
    "e": [[3, 4, 5]],
    "f": [[2, 4, 6]],
    "g": [[1, 4, 7]],
}
