function heroesInventory(array) {

    const heroes = [];

    for (const line of array) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        let hero = { name, level, items };
        heroes.push(hero);

    }

    let json = JSON.stringify(heroes);
    console.log(json);
}

heroesInventory(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara']);