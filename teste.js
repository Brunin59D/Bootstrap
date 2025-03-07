// alert("olá mundo")
//
// var test = prompt("digite seu nome")
//
// alert(test)


// function testTexto() { document.getElementById("titulo").style.color = "red"
// }

function  testButton() {
    if(confirm("deseja limpar?")) {
        document.getElementById("inputEmail4").value = ""
        document.getElementById("inputPassword4").value = ""
        document.getElementById("inputAddress").value = ""
        document.getElementById("inputAddress2").value = ""
        document.getElementById("inputCity").value = ""
        document.getElementById("inputCity").value = ""
        document.getElementById("inputZip").value = ""
    }
}
function colorLabel() {
    document.getElementById("labelEmail").style.color = "blue"
}
function colorLabel2() {
    document.getElementById("labelSenha").style.color = "blue"
}
function colorLabel3() {
    document.getElementById("labelEndereço").style.color = "blue"
}
function colorLabel4() {
    document.getElementById("labelCidade").style.color = "blue"
}
function colorLabel5() {
    document.getElementById("labelComplemento").style.color = "blue"
}
function colorLabel6() {
    document.getElementById("labelCep").style.color = "blue"
}
function colorLabel7() {
    document.getElementById("labelEstado").style.color = "blue"
}
function popularinput(id_inpu, label) {
    document.getElementById(id_inpu).value = label
}

