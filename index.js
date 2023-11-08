let carro={
    marca: "Chevrolet",
    motor: "1.4",
    cor: "Preto",
    nome: "Celta",
    portas: "4",
    marchas: "5",
};

console.log(carro);

document.getElementById("corDoCarro").innerHTML = "Cor do carro: " + carro.cor + "<br>";
document.getElementById("marcaDoCarro").innerHTML = "Marca: " + carro.marca + "<br>";
document.getElementById("motorDoCarro").innerHTML = "Motor: " + carro.motor + "<br>";
document.getElementById("nomeDoCarro").innerHTML = "Nome do carro: " + carro.nome + "<br>";
document.getElementById("portasDoCarro").innerHTML = "Portas: " + carro.portas + "<br>";
document.getElementById("marchasDoCarro").innerHTML = "Marcha: " + carro.marchas + "<br>";

document.getElementById("corDoCarroEx1").innerHTML = "Cor do carro: " + carro.cor + "<br>";
delete carro.cor;
console.log(carro);
document.getElementById("corDoCarroEx2").innerHTML = "Cor do carro: " + carro.cor + "<br>";

document.getElementById("novaCorDoCarroEx1").innerHTML = "Cor do carro: " + carro.cor + "<br>";
carro.cor = "vermelho";
console.log(carro);
document.getElementById("novaCorDoCarroEx2").innerHTML = "Cor do carro: " + carro.cor + "<br>";

