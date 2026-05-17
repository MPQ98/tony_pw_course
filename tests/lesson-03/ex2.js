let yourHeight = 170; //Nhập chiều cao (cm)
let yourPerfectWeight = (yourHeight - 100) * 9 / 10;
let yourMaximumWeight = yourHeight - 100;
let yourMinimumWeight = (yourHeight - 100) * 8 / 10;

if (yourHeight <= 100 || yourHeight >= 200) {
    console.log('Chiều cao của bạn phải lớn hơn 100cm và nhỏ hơn 200cm');
}
else {
    console.log(
        'Cân nặng lý tưởng của bạn là: ' + yourPerfectWeight + 'kg. Cân nặng tối đa của bạn là: ' + yourMaximumWeight + 'kg. Cân nặng tối thiểu của bạn là: ' + yourMinimumWeight + 'kg.');
}



