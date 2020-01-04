//FCC DNA pairing sol2:
function pairElement(s) {
    //define "p" with all possible combos
    let p = {T:'A', A:'T', C:'G', G:'C'}; 
    //split "s" to one-character array:
    let newS = s.split("");
    for (let i=0; i<newS.length; i++) {
        newS[i] = [newS[i], p[newS[i]]];
    }
    return newS;
}
