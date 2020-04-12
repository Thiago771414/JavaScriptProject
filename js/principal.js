var titulo = document.querySelector(".titulo"); //selecione a classe título e quarde dentro da variável título.
titulo.textContent = "Aparecida Nutricionista"; //escreve no lugar da classe título.

//var paciente = document.querySelector("#primeiro-paciente"); //extrai a informação pelo id.
var pacientes = document.querySelectorAll(".paciente"); //querySelectorAll cria um vector pacientes que captura toda minha lista.

for (var i = 0; i < pacientes.length; i++) { //length percorre o meu vector até o final dele.

    var paciente = pacientes[i]; //var paciente guarda o meu vector.

var tdPeso = paciente.querySelector(".info-peso"); //extrai a informação pela classe.
var peso = tdPeso.textContent; // extrai a informação em forma de texto.

var tdAltura = paciente.querySelector(".info-altura");//extrai a informação pela classe.
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc"); //seleciona na tabela  a posição de cálculo do imc.


var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido");
	pesoEhValido = false;
	tdImc.textContent = "Peso inválido!";
	paciente.classList.add("paciente-invalido"); //classList acessa as classes, add() adiciona a classe desejada.

}
if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida");
	alturaEhValida = false;
	tdImc.textContent = "Altura inválida!";
	paciente.classList.add("paciente-invalido"); //classList acessa as classes, add() adiciona a classe desejada.
}
if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
	tdImc.textContent = imc.toFixed(2);//tofixed() casas decimais.
	 
}else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
}
}


 /* if (peso <= 0) {
 console.log("Peso inválido");
}

 if (peso > 1000) {
  console.log("Peso inválido");
}
*/
//var imc = peso / (altura*altura);
//tdImc.textContent = imc; //escreve na tabela o valor calculado do imc.
//exibe a informação:
//console.log(paciente); // tr
//console.log(pacientes);
//console.log(tdPeso); // td que tem o peso
//console.log(peso);
//console.log(tdAltura);
//console.log(altura);
//console.log(imc);


