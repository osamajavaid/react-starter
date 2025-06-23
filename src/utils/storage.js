export const getLocal = (key) => {
    const value = localStorage.getItem(key);
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
};

export const setLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocal = (key) => {
    localStorage.removeItem(key);
};
