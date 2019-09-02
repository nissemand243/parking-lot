// fotex strategy

class fotexShopStrategy{

    calculatePrice(checkinTime, checkoutTime){
        const time = (checkoutTime - checkinTime) / 1000;
        return 15 * (Math.floor(time/15)+1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(calculatePrice));
});