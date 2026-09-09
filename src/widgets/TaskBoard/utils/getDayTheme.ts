export const getDayTheme = (listId: number, todayId: number | null) => {
    return listId === todayId ? 'isToday' : 'isDefaultDay'
}

export const getActiveDayState = (
    dayId: number,
    listId: number,
    todayId: number | null,
) => {
    return dayId === listId && dayId !== todayId
}
