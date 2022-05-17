const a = 3.14
let b = prompt('Введите любое число!', '0')

function asd(a, b) {
    let d = b / a
    if (d >= 100) {
        alert('More than 100')
    } else {
        alert('Smaller than 100')
    }
    return d
}


let c = asd(a, b)

alert(c)
