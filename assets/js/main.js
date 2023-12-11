
//  START Swap to variables
let a = 5
let b = 10

a = a + b
b = a - b
a = a - b

console.log(a)
console.log(b)
// END Swap to variables



// START Birthday
function chechkFullName(name, surname) {
    return name + " ~ " + surname;
}


function sendFullData(dateNow, dateBirth) {
    let result = dateNow - dateBirth
    console.log(chechkFullName("Jale", "Jabiyeva"), result, result + 1);

}

sendFullData(2023, 2008)
// END Birtday


//  START Fortune
function fortune(jobTitle, geographicLocation, partnerName, childrenCount) {

    console.log(" You will be a " + jobTitle + " in " + geographicLocation + " , and married to " + partnerName + " with " + childrenCount + "kids . ")

}
fortune("Programmer ", "Baku", "Rahim", 4)

// END Fortune
