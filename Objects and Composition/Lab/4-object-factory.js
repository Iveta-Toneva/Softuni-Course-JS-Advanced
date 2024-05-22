function factory(library, orders) {

    let resultArray = [];

    for (const order of orders) {
        
        let object = Object.assign({}, order.template);

        for (const part of order.parts) {
            object[part] = library[part];

        }
        resultArray.push(object);
    }

    return resultArray;

}


