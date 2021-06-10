export const searchRegistry = (arr, text) => {
    const result = arr.filter((item) => (
        item.inn === text ||
        item.name === text ||
        item.company === text
    ));
    return result;
};