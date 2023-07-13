export const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
}