function capitalize(text: string): string {
    if (text.length === 0) {
        return text
    }

    const firstChar = text.charAt(0).toUpperCase()
    const rest = text.slice(1)

    return `${firstChar}${rest}`
}

export default capitalize;