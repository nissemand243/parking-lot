//faktas strategy

class nettoShopStrategy{
    
    getDescription(){
        return "De første 15 minutter er til 10 kr, herefter koster det 5 kr pr 15 min"
    }
    
    calculatePrice(checkinTime, checkoutTime){
        
        const time = ((checkoutTime - checkinTime) / 1000)-15;
        if (time < 0) {
            return 10;
        } else {
            return 10 + (5 * (Math.floor(time/15) + 1));
        }
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const parkingLot = new ParkingLot(new nettoShopStrategy());

    main(parkingLot);
});