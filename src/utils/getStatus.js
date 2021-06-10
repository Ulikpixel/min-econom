import { STYLES } from "../constains";

export const getStatus = (status) => {
    switch (status) {
        case "Одобрено":
            return STYLES.green;
        case "Отказ":
            return STYLES.red;
        case "В обработке":
            return "black";
        default:
            return "black";
    }
};