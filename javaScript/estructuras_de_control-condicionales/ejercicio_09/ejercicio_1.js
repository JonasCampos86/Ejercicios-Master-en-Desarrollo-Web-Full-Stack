/*
Condicional swich
9 🗓 Meses del año

Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente.


*/


let mesUsuario; 

do{
    mesUsuario = parseInt(prompt(`Dime un número del 1 al 12 y te dire a que mes del año pertenece`));

    if(mesUsuario>0 && mesUsuario<=12){
        switch (mesUsuario){
            case 1:
                window.alert(`Enero`)
            break
            case 2:
                window.alert(`Febrero`)
            break
            case 3:
                window.alert(`Marzo`)
            break
            case 4:
                window.alert(`Abril`)
            break
            case 5:
                window.alert(`Mayo`)
            break
            case 6:
                window.alert(`Junio`)
            break
            case 7:
                window.alert(`Julio`)
            break
            case 8:
                window.alert(`Agosto`)
            break
            case 9:
                window.alert(`Septiembre`)
            break
            case 10:
                window.alert(`Octubre`)
            break
            case 11:
                window.alert(`Noviembre`)
            break
            case 12:
                window.alert(`Diciembre`)
            break
        }
    }else{
        window.alert(`No has introducido un número o no has introducido uno que no corresponde a un mes, vuelve a intentarlo`)
        mesUsuario = NaN;}
}while(isNaN(mesUsuario));