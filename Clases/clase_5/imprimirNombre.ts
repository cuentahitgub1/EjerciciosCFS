function imprimirNombre(nombre:string, apellido:string): string{
        let nombreCompleto:string = nombre + " " + apellido;
        return nombreCompleto;
}

function dibujarGuiones() {
        let i : number; let simbolo: string = "";
        for (i = 0; i <= 12; i++) 
            { simbolo = simbolo + "-";};	
            console.log(simbolo);}

        dibujarGuiones();
        console.log (imprimirNombre("Maico","Olguin"))
        dibujarGuiones();