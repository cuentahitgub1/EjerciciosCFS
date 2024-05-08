import * as rls from "readline-sync";

let nroDeseado : number = rls.questionInt("Inserte su altura para la montana rusa: ");

if (nroDeseado > 129) 
    { console.log('Su altura es apta para este juego, que lo disfrute :)');} else 

    {console.log('Su altura no cumple con los requisitos minimos para este tipo juegos, por favor retirese :('); }