const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const generateRandomId = (currentId, min, max, prefix) => {
    let number = currentId;
    do {
        number = generateNumber(min, max);
    } while (number === currentId);
    return `${prefix}-${number}`;
}

export const generateObject = (currentIds, list, min, max, prefix) => {
    let newIds = {};
    currentIds.forEach((currentId, index) => {
        let number = currentId;
        do {
            number = generateNumber(min, max);
        } while (number === currentId);
        newIds[`${prefix}-${index}`] = list[number];
    });
    return newIds;
}

export const getObjLength = (obj) => {
    return Object.keys(obj).length;    
}

export const createEmptyIdDictionary = (defaultItem, size, prefix) => {
    return Object.fromEntries([...Array(size)].map((_, i) => [`${prefix}-${i}`, defaultItem]));
};

export const createIdDictionary = (array, prefix) => {
    return Object.fromEntries(array.map((el, i) => [`${prefix}-${i}`, el]));
};
  