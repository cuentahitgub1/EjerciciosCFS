//Arreglo_Numero más grande
const num = [4,7,9,3,1,45,67,23,29,78,11,16]
let max = 0;

for (let i = 0; i <= num.length; i++) {
    if (num[i] > max)
        {max = num[i];}
}
console.log("El numero mas grande encontrado es:",max);

//Numero Encontrado_Par/Impar
if(max % 2 == 0)
    {console.log("El numero", max, "es Par")
}else if(max % 1 == 0)
    {console.log ("El numero", max, "es Impar")};

