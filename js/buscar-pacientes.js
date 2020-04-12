var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();//O XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP. O trecho XML do nome indica que ele era utilizado anteriormente para realizar o transporte de dados do tipo XML, no entanto, atualmente ele consegue trafegar outros tipos de dados, como textos.
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //Essa ação será equivalente a chegarmos no navegador no momento em que ainda não enviamos a requisição, apenas verificando se o endereço está correto, se existe e está fazendo as configurações da requisição. Para que ela seja realizada, precisaremos chamar o método send():
    
	xhr.addEventListener("load", function(){ //Para os dados serem exibidos, após o envio da requisição, devemos escutar um evento específico que é acionado quando a requisição termina e a sua resposta é carregada. Ao escutarmos o evento, carregaremos a resposta da requisição - que no caso, serão nossos dados. Esse evento é o load, característico do XMLHttpRequest:
	var erroAjax = document.querySelector("#erro-ajax");
	if (xhr.status == 200) {
	var resposta = xhr.responseText;
	var pacientes = JSON.parse(resposta); //Os dados possuem uma estrutura parecida com o objeto do JavaScript porque eles estão no formato JSON (sigla de JavaScript Object Notation), um formato de dados parecidos com os objetos do JavaScript que podemos transportar pela web.

//A semelhança é tanta que podemos facilmente converter JSON (o texto da resposta da requisição) em objetos do JavaScript com os quais estamos mais acostumados a utilizar, como array ou mesmo uma string. Queremos que ele seja transformado em um array de objetos, mais útil para o JS.

//Para conseguirmos transformar a resposta, que é um texto (uma string), em um array de pacientes, usaremos um "transformador", mais precisamente um parseador de JSON para objetos do JavaScript. Para realizarmos esta tarefa usaremos o método parse(). Assim, receberemos o texto em JSON, que depois será parseado. Em seguida, será retornado um objeto JavaScript. Como nossa resposta se parece com um objeto, o método entenderá isso e nos retornará um array do objetos:
		//console.log(resposta);		 //E para acessarmos os dados da resposta, usaremos a propriedade responseText do XMLHttpRequest. Para testarmos, podemos guardá-la em uma variável, e depois imprimi-la no console do navegador
		//console.log(typeof resposta);
	
			pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente); //Passamos o paciente como parâmetro da função anônima, o qual será adicionado na tabela em seguida. Como se tornaram desnecessários, removemos os console.log()s.
        });
		}else {
            erroAjax.classList.remove("invisivel");
        }
	});                               //Para que ele realize as requisições, devemos ensiná-lo e configurá-lo do jeito que queremos. Por exemplo, informaremos que uma requisição será feita para o seguinte endereço: https://api-pacientes.herokuapp.com/pacientes, com alguns de seus métodos.
	
	xhr.send();
                                  //O primeiro será open(), com o qual especificaremos o tipo de requisição a ser feita, no caso, GET. Também indicaremos para onde queremos fazê-la:
});

//Qual dos seguintes códigos configura a nossa requisição para ser do tipo POST e para o endereço www.xyz.com.br/compras ?
//Dado que temos um XMLHttpRequest, precisamos configurar nossa requisição para dizer para qual servidor queremos enviá-la e também qual método HTTP devemos usar.

//Fazemos isto através do método .open() , passando o método e a url :

//xhr.open("POST","www.xyz.com.br/compras");