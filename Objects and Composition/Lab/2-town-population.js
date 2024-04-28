function townPopulation(array) {

    let towns = {};

    for (const townInfo of array) {
        let [name, population] = townInfo.split(' <-> ');
        population = Number(population);
        if (towns[name]) {
            towns[name] += population;
        } else {
            towns[name] = population;
        }
    }

    Object.keys(towns).forEach(town => {
        console.log(`${town} : ${towns[town]}`);
    });

}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);