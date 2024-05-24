function townsToJson(array) {

    let towns = [];

    for (let index = 1; index < array.length; index++) {

        let line = array[index].split('|');
        let townName = line[1].trim();
        let latitude = line[2].trim();
        let longitude = line[3].trim();

        let town = {
            Town: townName,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2))
        }

        towns.push(town);

    }

    let jsonInfo = JSON.stringify(towns);
    console.log(jsonInfo);

}
townsToJson(['| Town | Latitude | Longitude |',

    '| Veliko Turnovo | 43.0757 | 25.6172 |',

    '| Monatevideo | 34.50 | 56.11 |']);