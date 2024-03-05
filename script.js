const cryptoRequested = document.getElementById("requested-crypto").value;
const resultTabContent = document.getElementById("resultTab");
let cryptoCurrentPrice = '';

document.getElementById("toUSDtext").innerText = `${cryptoRequested}`;
document.getElementById("crypto-image").innerHTML = `<img src="https://coinicons-api.vercel.app/api/icon/${cryptoRequested.toLowerCase()}"/>`


const crypto = {
    headers: {
        'x-access-token': 'coinranking2fa54e52adbbc9d4820c9099de539478bbc2721518cd237d',
    },
};

const getCoins = async () => {
    const response = await fetch('https://api.coinranking.com/v2/coins', crypto);
    const result = await response.json();

    cryptoCurrentPrice = (Number(result.data.coins[22].price)).toFixed(2); // need mofification about input

    document.getElementById("leftStatics").innerText = `1 LTC = ${cryptoCurrentPrice}`;

    resultTabContent.innerText = `1 LTC = ${cryptoCurrentPrice}`;
}

getCoins();

const calc = document.getElementById("calc");

calc.addEventListener('click', function () {
    const input = document.getElementById("amountInputed").value;
    let result = cryptoCurrentPrice * input;
    Number(result).toFixed(3);
    resultTabContent.innerText = `${input} LTC = ${result}`;
})






