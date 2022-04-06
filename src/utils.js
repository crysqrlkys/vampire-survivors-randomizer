const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const generateRandomId = (currentId, min, max) => {
    let number = currentId;
    do {
        number = generateNumber(min, max);
    } while (number === currentId);
    return number;
}