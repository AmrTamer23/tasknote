export function TimeOfDay(): string {
    const date = new Date()
    const hours = date.getHours()
    if (hours < 12) {
        return 'Morning'
    } else if (hours < 18) {
        return 'Asfternoon'
    } else {
        return 'Evening'
    }
}