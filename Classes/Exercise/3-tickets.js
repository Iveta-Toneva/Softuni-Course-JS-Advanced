function tickets(input, sortCriteria) {

    class Ticket {

        constructor(name, price, status) {
            this.destination = name;
            this.price = price;
            this.status = status;
        }

    };

    let ticketsArray = [];

    for (const line of input) {

        let [name, price, status] = line.split('|');
        price = Number(price);
        let object = new Ticket(name, price, status);
        ticketsArray.push(object);

    }

    switch (sortCriteria) {
        case 'destination':
            ticketsArray.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            ticketsArray.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            ticketsArray.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return ticketsArray;

}
