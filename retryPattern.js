// retry pattern
// is a powerful design pattern that allows us to gracefully handle temporary failures in our application when ever we are making external netword calls to external api or database service.

async function retryOperation(){
    let currentTry = 0;
    
    while(true){
        try{
            externalServiceCall();
            console.log("succeeded!");
            break;
        }catch(err){
            currentTry++;
            console.log(`failed attempt ${currentTry}`);

            if(currentTry >= 10){
                console.log("Retry maximum reached. Exiting");
                break;
            }
        }
        await sleep(3000);
    }
};

// await sleep(3000);

async function sleep(ms){
    return new Promise( resolve => {
        setTimeout(()=>{
            resolve()
        }, ms);
    });
}

function externalServiceCall(){
    console.log("Calling external service...");
    const shouldPass = Math.random() < 0.2;

    if(shouldPass){
        return true;
    } else {
        throw "Failure";
    }
};

retryOperation();