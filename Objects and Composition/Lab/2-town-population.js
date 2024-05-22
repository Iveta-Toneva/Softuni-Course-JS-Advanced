function townsPopulation(array) {

    let towns = {};

    for (const line of array) {
        let [town, population] = line.split(' <-> ');
        population = Number(population);

        if (towns[town]) {
            towns[town] += population;
        } else {
            towns[town] = population;
        }
    }

    Object.keys(towns).forEach(town => {
        console.log(`${town} : ${towns[town]}`);
    });

}
townsPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);