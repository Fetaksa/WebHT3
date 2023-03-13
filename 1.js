function celsiusToFarenheit(tempC){
    let tempF = (9/5)* tempC + 32;
    return Math.floor(tempF*100)/100;
}

let num = +prompt('Введите температуру в градусах Цельсия: ');
alert(`Цельсий --> ${num}, Фаренгейт --> ${celsiusToFarenheit(num)}`);