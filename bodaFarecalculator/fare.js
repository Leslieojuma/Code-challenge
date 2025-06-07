function calculateBodaFare(distanceInkm) {
    const basefare = 50 ; // Base fare in shillings
    const chargePerKm = 30; // Charge per kilometer in shillings

    const totalFare = basefare + (distanceInkm * chargePerKm);
    console.log(`For a trip of ${distanceInkm} km, the total boda fare is: ${totalFare} shillings.`);
}

let input = prompt("Karibu! unafika umbali gani kwa boda?(in km)");
let distanceInkm = parseFloat(input);
if (distanceInkm > 0) {
    calculateBodaFare(distanceInkm);
}
else {
    console.log("Tafadhali sema umbali gani wataka kufika.");
}