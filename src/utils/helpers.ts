export function TimeOfDay(): string {
    const date = new Date()
    const hours = date.getHours()
    if (hours < 12) {
        return 'Morning'
    } else if (hours < 18) {
        return 'Afternoon'
    } else {
        return 'Evening'
    }
}

export function CountdownDays(date: Date): String {
    const today = new Date()
    const diff = date.getTime() - today.getTime()
    const days = Math.ceil(diff / (1000 * 3600 * 24))
    if(days === 0) {
        return 'Today';
    }else
    {
        return days.toString().concat(' days');
    }
}