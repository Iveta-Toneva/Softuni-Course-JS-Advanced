function townsToJson(array) {

    let towns = [];
    let properties = array.shift().split('|');
    let townProp = properties[1].trim();
    let latitudeProp = properties[2].trim();
    let longitudeProp = properties[3].trim();

    for (let line of array) {
        line = line.split('|');
        let town = line[1].trim();
        let latitude = line[2].toString().trim();
        let longitude = line[3].toString().trim();
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        latitude = Number(latitude);
        longitude = Number(longitude);
        let object = {};
        object[townProp] = town;
        object[latitudeProp] = latitude;
        object[longitudeProp] = longitude;
        towns.push(object);

    }

    let json = JSON.stringify(towns);
    console.log(json);

}
townsToJson(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |']);