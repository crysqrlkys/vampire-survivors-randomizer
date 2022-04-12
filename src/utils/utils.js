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

export const createObj = (currentIds, list, min, max, prefix) => {
    let newIds = {};
    let addedIds = [];
    console.log(currentIds)
    currentIds.forEach((currentId, index) => {
        let number = currentId;
        if (number === undefined) {
            do {
                number = generateNumber(min, max);
            } while (number === currentId || addedIds.includes(number));
        }
        newIds[`${prefix}-${index}`] = list[number];
        addedIds.push(number);
    });
    return newIds;
}

export const generateObject = (currentIds, list, min, max, prefix, skip=0) => {
    let newIds = {};
    let addedIds = [];
    currentIds.forEach((currentId, index) => {
        let number = currentId;
        if (skip !== 0) {
            skip -=1;
            console.log('lll', list)
            console.log(prefix, index, number, list[number])
            newIds[`${prefix}-${index}`] = list[number];
        } else {
            do {
                number = generateNumber(min, max);
            } while (number === currentId || addedIds.includes(number));
            newIds[`${prefix}-${index}`] = list[number];
        }
        addedIds.push(number);
    });
    return newIds;
}

export const getIds = (objList) => {
    return Object.values(objList).map(el => el.id);
};

export const getObjLength = (obj) => {
    return Object.keys(obj).length;    
}

export const getObjValues = (obj) => {
    return Object.values(obj);    
}

export const createEmptyIdDictionary = (defaultItem, size, prefix) => {
    return Object.fromEntries([...Array(size)].map((_, i) => [`${prefix}-${i}`, defaultItem]));
};

export const createIdDictionary = (array, prefix) => {
    return Object.fromEntries(array.map((el, i) => [`${prefix}-${i}`, el]));
};
  