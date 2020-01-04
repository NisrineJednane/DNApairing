//FCC DNA pairing sol1: 

function pairElement(str) {
    let newStr = str.split(""); //split given string
    let newArr = [];
    let x = "";
    let y = "";

 //loop through newStr to pair x and its match y: 
    for (let i=0; i<newStr.length; i++) {
        element = newStr[i];

        switch(element) {
            case "G":
                match = "C";
                break;
            case "C":
                match = "G";
                break;
            case "A":
                match = "T";
                break;
            case "T":
                match = "A";
                break;
        }
        //store in newArr
        newArr.push([element, match]);
    }
    return newArr;
}
console.log(pairElement("CGC"));
