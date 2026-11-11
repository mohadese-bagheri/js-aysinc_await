
const myPromise = (delay, target) => {
    return new Promise((resolve, reject) => {
        let foodready = true;

        setTimeout(() => {
            if (foodready) {
                resolve(`${target} بعد از ${delay} حاضر شد`);
            } else {
                reject(`ناموفق بعد از ${delay} ثانیه`);
            }
        }, delay * 1000);
    });
};
const x = 30;
console.log(x);

console.log("starting...");

async function processfood() {
    try {
        const dessert = await myPromise(2, "دسر");
        console.log(dessert);

        const food = await myPromise(2, "غذا");
        console.log(food);

        const drink = await myPromise(2, "نوشیدنی");
        console.log(drink);


    } catch (error) {
        console.log(error);

    }
}

processfood();



console.log("ending...");


