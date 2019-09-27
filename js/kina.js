class kinaShopStrategy{

    getDescription(){
        return "Velkommen Kina's ambasade, her koster det intet at parkere, men vi holder øje med dig!"
    }

    calculatePrice(checkinTime, checkoutTime){
        return 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const parkinglot = new ParkingLot(new kinaShopStrategy());
    new Monitor(parkinglot);
});