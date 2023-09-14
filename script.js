// script.js
document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const showerMinutes = parseFloat(document.getElementById('shower').value);
    const dishwasherLoads = parseFloat(document.getElementById('dishwasher').value);
    const laundryLoads = parseFloat(document.getElementById('laundry').value);
    const toiletFlushes = parseFloat(document.getElementById('toilet').value);
    const cookingMinutes = parseFloat(document.getElementById('cooking').value);
    const gardeningMinutes = parseFloat(document.getElementById('gardening').value);
    const drinkingLiters = parseFloat(document.getElementById('drinking').value);
    const cleaningMinutes = parseFloat(document.getElementById('cleaning').value);
    const carwashMinutes = parseFloat(document.getElementById('carwash').value);
    const otherLiters = parseFloat(document.getElementById('other').value);

    const waterFootprint = calculateWaterFootprint(
        showerMinutes,
        dishwasherLoads,
        laundryLoads,
        toiletFlushes,
        cookingMinutes,
        gardeningMinutes,
        drinkingLiters,
        cleaningMinutes,
        carwashMinutes,
        otherLiters
    );

    document.getElementById('result').textContent = `Your daily water footprint is approximately ${waterFootprint.toFixed(2)} liters.`;
});

function calculateWaterFootprint(
    showerMinutes,
    dishwasherLoads,
    laundryLoads,
    toiletFlushes,
    cookingMinutes,
    gardeningMinutes,
    drinkingLiters,
    cleaningMinutes,
    carwashMinutes,
    otherLiters
) {
    // Define conversion factors for each activity
    const showerFactor = 9; // Liters per minute
    const dishwasherFactor = 10; // Liters per load
    const laundryFactor = 20; // Liters per load
    const toiletFactor = 5; // Liters per flush
    const cookingFactor = 1.5; // Liters per minute
    const gardeningFactor = 5; // Liters per minute
    const drinkingFactor = 1; // Liters per liter
    const cleaningFactor = 2; // Liters per minute
    const carwashFactor = 20; // Liters per minute
    // Update the other factor as needed

    // Calculate the water footprint for each activity
    const showerFootprint = showerMinutes * showerFactor;
    const dishwasherFootprint = dishwasherLoads * dishwasherFactor;
    const laundryFootprint = laundryLoads * laundryFactor;
    const toiletFootprint = toiletFlushes * toiletFactor;
    const cookingFootprint = cookingMinutes * cookingFactor;
    const gardeningFootprint = gardeningMinutes * gardeningFactor;
    const drinkingFootprint = drinkingLiters * drinkingFactor;
    const cleaningFootprint = cleaningMinutes * cleaningFactor;
    const carwashFootprint = carwashMinutes * carwashFactor;
    // Calculate the footprint for the "other" category
    const otherFootprint = otherLiters; // Update this based on your specific calculation

    // Calculate the total water footprint
    const totalFootprint =
        showerFootprint +
        dishwasherFootprint +
        laundryFootprint +
        toiletFootprint +
        cookingFootprint +
        gardeningFootprint +
        drinkingFootprint +
        cleaningFootprint +
        carwashFootprint +
        otherFootprint;

    return totalFootprint;
}
