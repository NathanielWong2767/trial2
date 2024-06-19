const inputElement = document.getElementById('input')

let notEmpty = inputElement.value

const buttonHello = () => {
    console.log(inputElement.value)

    if (notEmpty != null ) {
    document.getElementById('title').style.color = "rgb(238, 207, 30)";
    }
 }