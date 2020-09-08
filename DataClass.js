class DataClass {
    constructor(
        clientNum,//p1
        deliverOrPickup,//p2
        deliveryCode/*35/50*/,//p3
        recepientName,//p11
        cityName,//p13
        streetName,//p15
        houseNumber,//p16
        mainPhone,//p20
        secondReference,//p26
        responseType ,//p36 TXT or XML
        saveAutoDelivery,//p37 N/Y/L - locker / S - store
        reciepentEmail//p40
    ) {
        this.clientNu = clientNum//p1
        this.deliverOrPickup = deliverOrPickup//p2
        this.deliveryCode = deliveryCode/*35/50*///p3
        this.recepientName = recepientName//p11
        this.cityName = cityName//p13
        this.streetName = streetName//p15
        this.houseNumber = houseNumber//p16
        this.mainPhone = mainPhone//p20
        this.secondReference = secondReference//p26
        this.responseType = responseType //p36 TXT or XML
        this.saveAutoDelivery = saveAutoDelivery//p37 N/Y/L - locker / S - store
        this.reciepentEmail = reciepentEmail//p40
    }
}