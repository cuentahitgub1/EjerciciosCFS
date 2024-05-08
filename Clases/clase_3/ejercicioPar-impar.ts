

import * as rls from "readline-sync";
let numeroInsertado : number = rls.questionInt("Inserte un numero");

        if(numeroInsertado == 0){
            console.log("El numero insertado es Cero :" + numeroInsertado)
        
        }else if(numeroInsertado % 2 == 0){
            console.log("El numero insertado es Par :" + numeroInsertado)
        
        }else if(numeroInsertado % 1 == 0){
        console.log ("El numero insertado es Impar :" + numeroInsertado)};
