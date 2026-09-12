export const getActiveDayState = (
    dayId: number,
    listId: number,
    todayId: number | null,
) => {
    return dayId === listId && dayId !== todayId
}
