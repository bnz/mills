export const documentTitleEffect = ({ onSet }: { onSet: any }) => {
    onSet((newValue: any) => {
        const titleBase = document.title.split(" - ")[0]
        document.title = `${titleBase} - ${newValue === "w" ? "ход белых" : "ход черных"}`
    })
}
