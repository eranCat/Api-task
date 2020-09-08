class DataClass {
    constructor(
        clientNum,//p1
        deliverOrPickup,//p2
        deliveryCode/*35/50*/,//p3
        stage = 5,//p4
        buisnessName,//p5
        sendDeliveryType /*10/11*/,//p7
        retrievedDeliveryType /*in case of change */,//p8
        amountOfPackages /*in case of change*/,//p9
        code,//p10 optional
        recepientName,//p11
        cityCode,//p12 optional
        cityName,//p13
        streetCode,//p14 optional
        streetName,//p15
        houseNumber,//p16
        entrance,//p17
        floorNumber,//p18
        apartmentNumber,//p19
        mainPhone,//p20
        secondaryPhone,//p21
        references,//p22
        amountOfPackagesBack,//p23
        notesAddress,//p24
        notesDelivery,//p25
        secondReference,//p26
        date,//p27 only when not today DD/MM/YYYY
        time,//p28 only when not now or today HH:MM
        revChargeCode,//p30
        revChargeAmount,//p31
        revChargeDate,//p32 DD/MM/YYYY
        revChargeNotes,//p33
        sendPoint,//p34 for pick up
        destPoint,//p35
        responseType = "XML",//p36 TXT or XML
        saveAutoDelivery,//p37 N/Y/L - locker / S - store
        techReqNotes,//p38
        dayTimeCode,//p39 קוד חלון זמן לביצוע|קוד יום
        reciepentEmail,//p40
        fetchDate,//p41 DD/MM /YYYY
        fetchTime,//p42 HH:MM
    ) {
        this.clientNu = clientNum//p1
        this.deliverOrPickup = deliverOrPickup//p2
        this.deliveryCode = deliveryCode/*35/50*///p3
        this.stage = stage//p4
        this.buisnessName = buisnessName //p5

        this.p6 = null

        this.sendDeliveryType = sendDeliveryType /*10/11*/ //p7
        this.retrievedDeliveryType = retrievedDeliveryType /*in case of change *///p8
        this.amountOfPackages /*in case of change*= amountOfPackages /*in case of change*/ //p9
        this.code = code //p10 optional
        this.recepientName = recepientName//p11
        this.cityCode = cityCode//p12 optional
        this.cityName = cityName//p13
        this.streetCode = streetCode//p14 optional
        this.streetName = streetName//p15
        this.houseNumber = houseNumber//p16
        this.entrance = entrance//p17
        this.floorNumber = floorNumber//p18
        this.apartmentNumber = apartmentNumber//p19
        this.mainPhone = mainPhone//p20
        this.secondaryPhone = secondaryPhone//p21
        this.references = references//p22
        this.amountOfPackagesBack = amountOfPackagesBack//p23
        this.notesAddress = notesAddress//p24
        this.notesDelivery = notesDelivery//p25
        this.secondReference = secondReference//p26
        this.date = date//p27 only when not today DD/MM/YYYY
        this.time = time//p28 only when not now or today HH:MM

        this.p29 = null

        this.revChargeCode = revChargeCode//p30
        this.revChargeAmount = revChargeAmount//p31
        this.revChargeDate = revChargeDate//p32 DD/MM/YYYY
        this.revChargeNotes = revChargeNotes//p33
        this.sendPoint = sendPoint//p34 for pick up
        this.destPoint = destPoint//p35
        this.responseType = responseType //p36 TXT or XML
        this.saveAutoDelivery = saveAutoDelivery//p37 N/Y/L - locker / S - store
        this.techReqNotes = techReqNotes//p38
        this.dayTimeCode//p39 קוד חלון זמן לביצוע|ק= dayTimeCode,//p39 קוד חלון זמן לביצוע|קוד יום
        this.reciepentEmail = reciepentEmail//p40
        this.fetchDate = fetchDate//p41 DD/MM /YYYY
        this.fetchTime = fetchTime//p42 HH:MM
    }
}