var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){ //Queremos que ao começarmos a digitar no filtro, seja iniciado o processo de filtragem, e para isto, adicionaremos um escutador de evento. Com o addEventListener() escutaremos um evento de input. Passaremos como segundo parâmetro uma função com a ação a ser executada quando alguém clicar no campo.
												  	
	console.log(this.value); //this captura o evento atrelado, no caso campo filtro.
	var pacientes = document.querySelectorAll(".paciente");//Conforme o nome é digitado, podemos ir comparando com os de todos os pacientes da tabela com o querySelectAll(). Exibiremos aqueles que forem iguais, e os que forem diferentes serão escondidos. Vamos, então, selecionar todos os pacientes:
	
	//for (var i = 0; i < pacientes.length; i++) { //No entanto, queremos fazer a comparação com o nome dos pacientes, não com a tr. Precisaremos iterar sobre os pacientes, para então acessarmos o nome de cada um:
        //var paciente = pacientes[i];
		//var tdNome = paciente.querySelector(".info-nome");
        //var nome = tdNome.textContent;//Agora, selecionaremos o paciente, e a partir dele a td com a classe info-nome. Daí, extrairemos o nome do paciente:
    
	 
        if (this.value.length > 0){ //se tiver algo escrtio em campo o filtro executa o for.
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
			//var expressao = new RegExp();//É bastante simples criar expressões regulares. Criaremos uma variável, que no caso chamaremos expressao, e em seguida colocaremos uma expressão regular dentro dela. Vamos gerar um objeto especial do JS, adicionando new e o nome RegExp():
            var expressao = new RegExp(this.value, "i");//Nós poderemos passar dois parâmetros para o objeto, sendo o primeiro o texto que queremos buscar, no caso, o termo digitado no campo de busca (this.value), e o segundo parâmetro será referente às características dos termos que devem ser buscados. É importante que a busca não seja case sensitive, que é a diferenciação entre letras maiúsculas e minúsculas. Devem ser buscadas tanto letras maiúsculas como minúsculas, e passaremos a letra "i" como segundo parâmetro, para indicarmos a opção case insensitive:
			if (!expressao.test(nome)){//Porém, como utilizamos a expressão regular para buscar um texto específico na tabela? Em vez de compararmos com o nome inteiro do paciente (como estávamos fazendo), vamos pedir para a expressão regular verificar se um pedaço do nome do paciente possui as letras digitadas no campo de busca. Para isso, a expressão regular tem o método test(), com a qual passaremos o que queremos testar:Esse teste irá retornar verdadeiro caso o nome contenha a expressão, ou falso caso não contenha. Como estamos testando se o nome não contém a expressão (por isso adicionaremos a classe invisivel), utilizaremos novamente o operador de negação (!). Logo, se o teste falhar, adicionaremos a classe; se não, ela será removida:
                paciente.classList.add("invisivel"); //Faremos o mesmo para esconder os pacientes, se (if) o nome for diferente do conteúdo de texto, adicionaremos uma classe. Caso não seja, isto é, se o nome for igual ao que foi digitado, removemos a classe. Faremos isso no filtra.js
            } else {
                paciente.classList.remove("invisivel");
            }
        }
		
		} else { //se não tiver nada escrito no campoFiltro. 
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
		}      
	
});
/*
Como o primeiro parâmetro é o inicio, e queremos comparar desde o início da string nome, vamos utilizar como início o valor 0, ou seja, sempre a partir do primeiro caractere. Mas qual é o fim? O fim é justamente o tamanho do valor digitado:
Podemos guardar essa string em uma variável, e compará-la com o que está sendo digitado. Caso seja falso, adicionamos a classe invisivel, se não for, removemos-a:
Mas e a distinção entre letras maiúsculas e minúsculas? Nesse caso não temos distinção entre letras maiúsculas e minúsculas, mas para contornar isso, antes de compará-las, podemos colocar as duas strings em letras minúsculas, para efetuar a comparação entre elas em seguida:
Esta é uma alternativa de implementar a mesma funcionalidade sem expressão regular, porém temos que escrever mais e nos preocupar com mais detalhes! Fica ai esta opção para você guardar nos seus conhecimentos.
var comparavel = nome.substr(0, this.value.length);
var comparavelMinusculo = comparavel.toLowerCase();
var valorDigitadoMinusculo = this.value.toLowerCase();

if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}
*/