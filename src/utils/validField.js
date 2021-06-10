export const validField = (value) => value ? undefined : "Заполните поле";
export const validFieldMin = (min) => (value) => {
    return value.length < min ? `Введите больше ${min} цифр` : undefined
};
export const validFieldMax = (max) => (value) => {
    return value.length > max ? `Максимальное количество ${max} цифр` : undefined
};