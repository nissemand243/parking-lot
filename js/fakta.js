//faktas strategy

class faktaShopStrategy{

    customerInformation = "De første 5 minutter er gratis, men vi vil så gerne have at i bliver lidt længere herefter koster det 20 kr pr 15 min"

    constructor(){
        
    }
    
    calculatePrice(checkinTime, checkoutTime){
        
        const time = ((checkoutTime - checkinTime) / 1000)-5;
        if (time < 0) {
            return 0;
        } else {
            return 20 * (Math.floor(time/15) + 1);
        }
    }

}
document.addEventListener('DOMContentLoaded', () => {
    const parkingLot = new ParkingLot(new faktaShopStrategy());

    main(parkingLot);
});