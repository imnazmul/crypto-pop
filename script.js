const cryptoRequested = document.getElementById("requested-crypto").value;

document.getElementById("toUSDtext").innerText = `${cryptoRequested}`;
document.getElementById("crypto-image").innerHTML = `<img src="https://coinicons-api.vercel.app/api/icon/${cryptoRequested.toLowerCase()}"/>`

const logoHandler = async() => {
    const data = await fetch("https://api3.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
    const r = await data.json();
    console.log(r)
}

logoHandler()



// console.log(cryptoImage)
