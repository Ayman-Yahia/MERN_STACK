function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headCount=0
        let attempts=0
        while (headCounts<5){
        attempts++;
        if (tossCoin() == "heads"){
            headCount++;
        }
        else {
            headCount=0
            console.log("didnt get a head");
        }

        }
        if (attempts > 100){
            reject(`The coin has been flipped more than 100 times without getting 5 heads in a row.`);
        }
        else if (headCount == 5){
            resolve(`flipped heads five time in a row after ${attempts} coin flips!`);
        }
    });
    }
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );