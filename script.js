let meninos = ["Bento", "Zé", "Chico", "Jão"];
let meninas = ["Maria", "Josefa", "Florentina", "Francisca"];

let i = 0;

while(i < meninos.length){ 
    let j = 0;
    
    while(j < meninas.length){
        
        console.log(`Casal: ${meninos[i]} e ${meninas[j]}`); //[posição dentro lista]
        j++;
    }
    
    i++;
}