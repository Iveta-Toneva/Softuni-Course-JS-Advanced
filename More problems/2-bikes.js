class BikeRentalService {

    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikes) {

        let addedBikes = [];

        for (const bike of bikes) {
            let [brand, quantity, price] = bike.split('-');
            quantity = Number(quantity);
            price = Number(price);
            if (!this.availableBikes.find(b => b.brand === brand)) {
                this.availableBikes.push({ brand, quantity, price });
                addedBikes.push(brand);
            } else {
                let bike = this.availableBikes.find(b => b.brand === brand);
                bike.quantity += quantity;
                if (bike.price <= price) {
                    bike.price = price;
                }
            }
        }

        return `Successfully added ${addedBikes.join(', ')}`;
    }

    rentBikes(selectedBikes) {
        let total = 0;
        for (const selectedBike of selectedBikes) {
            let [brand, quantity] = selectedBike.split('-');
            quantity = Number(quantity);
            let bike = this.availableBikes.find(b => b.brand === brand);
            if (!bike || bike.quantity < quantity) {
                return `Some of the bikes are unavailable or low on quantity in the bike rental service.`;
            }
            let price = bike.price * quantity;
            total += price;
            bike.quantity -= quantity;
        }
        return `Enjoy your ride! You must pay the following amount $${total.toFixed(2)}.`;
    }

    returnBikes(returnedBikes) {
        for (const returnedBike of returnedBikes) {
            let [brand, quantity] = returnedBike.split('-');
            quantity = Number(quantity);
            let bike = this.availableBikes.find(b => b.brand === brand);
            if (!bike) {
                return 'Some of the returned bikes are not from our selection.';
            }
            bike.quantity += quantity;

        }
        return 'Thank you for returning!';
    }
    revision() {

        let output = [`Available bikes:`];
        this.availableBikes.sort((a, b) => a.price-b.price);

        for (const bike of this.availableBikes) {
            output.push(`${bike.brand} quantity:${bike.quantity} price:$${bike.price}`);
        }

        output.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`);
        return output.join('\n');
    }


}

