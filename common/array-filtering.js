const mixedArray = [6,23,68,15,51,79,22,8];

const isEven = num => {
    return num % 2 === 0;
}

const filterArray = (arrayToFilter, filterFn) => {
    const filteredArray = [];

    arrayToFilter.forEach(num =>{
        if (filterFn(num)) {
            filteredArray.push(num);
        }
    })

    return filteredArray;
}

console.log(filterArray(mixedArray, isEven));