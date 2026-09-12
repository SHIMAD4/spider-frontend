export const generateDays = (count = 31) => {
    const startDate = new Date(Date.now())

    const days = Array.from({ length: count }).map((_, index) => {
        const newDate = new Date(startDate)
        newDate.setDate(startDate.getDate() + index)

        return newDate.toISOString().slice(0, 10)
    })

    return Array.from({ length: count }).map((_, index) => {
        return {
            id: index + 1,
            tasks: [],
            date: days[index],
        }
    })
}
