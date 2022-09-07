const setTypeKeys = new Set([
    "matched-lines",
    "available-dots",
])

export const localStorageEffect = (key: string) => ({ setSelf, onSet }: { setSelf: any, onSet: any }) => {
    const savedValue = localStorage.getItem(key)

    if (savedValue != null) {
        let obj = JSON.parse(savedValue)
        if (setTypeKeys.has(key)) {
            obj = new Set(obj)
        }
        setSelf(obj)
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
        if (newValue instanceof Set) {
            newValue = [...newValue]
        }
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue))
    })
}
