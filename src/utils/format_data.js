import dayjs from "dayjs";

export function formatMonthDay(date,format) {
    return dayjs(date).format(format)
}

export function getDiffDate(startDate, endDate) {
    return dayjs(endDate).diff(startDate, "day")
}
