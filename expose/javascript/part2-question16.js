let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const property in statistics) {
    //property starts with 'r'
    if (property.startsWith('r')) {
        console.log(statistics[property]);
    }//property with odd value
    else if (statistics[property]%2) {
        console.log(statistics[property]);
    }
}