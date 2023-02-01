const workers = [
    {"name":"Иван","salary":700},
    {"name":"Андрей","salary":1100},
    {"name":"Роман","salary":2500}
];

const getWorthyWorkers = workersArr => {
    const worthyWorkers = [];

    workersArr.forEach(currentWorker => {
        if (currentWorker.salary > 1000) {
            worthyWorkers.push(currentWorker.name);
        }
    })

    return worthyWorkers;
}

console.log(getWorthyWorkers(workers))

