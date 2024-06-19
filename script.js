const inputElement = document.getElementById('input')

let notEmpty = undefined

const buttonHello = () => {
    console.log(inputElement.value)
    console.log(typeof (notEmpty))
    console.log(typeof (inputElement.value))

    if (notEmpty != undefined ) {
    document.getElementById('title').style.color = "rgb(238, 207, 30)";
    }
 }