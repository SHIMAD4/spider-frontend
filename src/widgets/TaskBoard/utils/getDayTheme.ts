export const getDayTheme = (listId: number, todayId: number | null) => {
    return listId === todayId ? 'isToday' : 'isDefaultDay'
}