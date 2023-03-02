import {months} from "../constants/date";

function formatDate(data: Date, lang: "am" | "en" | "ru"): string {
    const date = new Date(data);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const formattedDate = `${day} ${months[lang][monthIndex]}, ${year}`;

    return formattedDate;
}

export default formatDate;