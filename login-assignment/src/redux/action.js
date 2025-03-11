export const addItem = (list) => {
    return {
        type : "ADD",
        payload : list,
    };
};

export const removeItem = (list) => {
    return {
        type: "REMOVE",
        payload: list,
    };
};