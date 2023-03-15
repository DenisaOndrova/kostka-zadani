//ukol 2

let number = 1;
const dice = document.querySelector('.dice');
const side = () =>{
    number = number+1
    if (number ===7){
        number=1
    }
    dice.src=`img/side${number}.svg`
}
document.addEventListener('keydown', side)