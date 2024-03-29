// bilka strategy


class bilkaShopStrategy{

    getDescription(){
        return "Velkommen til Bilka. Det koster 10 kr pr påbegyndt kvarter"
    }

    calculatePrice(checkinTime, checkoutTime){
        const time = (checkoutTime - checkinTime) / 1000;
        return 10 * (Math.floor(time/15)+1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new bilkaShopStrategy()));
});