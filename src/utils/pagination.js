export const pagination = (arr) => {
    return (item, end) => {
        const start = (item - 1) * end;
        const finish = start + end;
        const result = arr.slice(start, finish);
        return result;
    };
};
