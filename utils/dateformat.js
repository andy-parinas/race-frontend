import { DateTime } from "luxon";

export function dateFormat(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}-${hours}-${minutes}`;
}

export function endDayTime(date) {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}-23:59`;
}

export function getCurrentDate() {
    const currentDateTime = DateTime.local();
    return currentDateTime.toFormat("yyyy-MM-dd");
}

export function getNextDate(days = 1) {
    const currentDate = DateTime.local();
    const nextDateTime = currentDate.plus({ days: days });

    return nextDateTime.toFormat("yyyy-MM-dd");
}

export function toLocatedDate(date){

}
