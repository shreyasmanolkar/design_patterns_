// Proxy pattern
// allows to use one object know as the proxy as a place holder of another object
// proxy can control access to the object so insted of using that object directly we use the proxy and the proxy in turn uses that object.


// External API service

function CryptoCurrencyAPI(){
    this.getValue = function(coin){
        console.log("Calling External API...");
        switch(coin){
            case "Bitcoin":
                return "$8500"
            case "Litecoin":
                return "$50"
            case "Ethereum":
                return "$175"
        }
    }
};

// /////////////////////

const api = new CryptoCurrencyAPI();

// console.log(api.getValue("Bitcoin"));
// console.log(api.getValue("Litecoin"));
// console.log(api.getValue("Ethereum"));

function CryptoCurrencyProxy(){
    this.api = new CryptoCurrencyAPI();
    this.cache = {};

    this.getValue = function(coin){
        if(this.cache[coin] == null){
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin];
    }
};

const proxy = new CryptoCurrencyProxy();

console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Bitcoin"));