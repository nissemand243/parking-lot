function calculatePrice(checkinTime, checkoutTime){
    
    const time = ((checkoutTime - checkinTime) / 1000)-5;
    if (time < 0) {
        return 0;
    } else {
        return 20 * (Math.floor(time/15) + 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(calculatePrice));
});