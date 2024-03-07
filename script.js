const cryptoRequested = document.getElementById("requested-crypto").value;
const resultTabContent = document.getElementById("resultTab");
let cryptoCurrentPrice = '';

document.getElementById("toUSDtext").innerText = `${cryptoRequested}`;
document.getElementById("crypto-image").innerHTML = `<img src="https://coinicons-api.vercel.app/api/icon/${cryptoRequested.toLowerCase()}"/>`




const getCoins = async () => {
    const response = await fetch('https://api.coinbase.com/v2/prices/LTC-USD/buy');
    const result = await response.json();

    cryptoCurrentPrice = (Number(result.data.amount)).toFixed(3); // need mofification about input

    document.getElementById("leftStatics").innerText = `1 LTC = ${cryptoCurrentPrice}`;

    resultTabContent.innerText = `1 LTC = ${cryptoCurrentPrice}`;
}

getCoins();

const calc = document.getElementById("calc");

calc.addEventListener('click', function () {
    const input = document.getElementById("amountInputed").value;
    let result = cryptoCurrentPrice * input;
    resultTabContent.innerText = `${input} LTC = ${Number(Number(result).toFixed(3))}`;
})