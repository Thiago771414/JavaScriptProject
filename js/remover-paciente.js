	var tabela = document.querySelector("table");

	tabela.addEventListener("dblclick", function(event) { //Para não termos que ficar escutando o evento a cada linha da tabela, e para as linhas adicionadas por meio do formulário, iremos delegar a responsabilidade de escutar os eventos para o pai de todos, no caso, a tag <table>. Faremos isso com addEventListenter() no remover-paciente.js:
														  //Dentro da função, perguntamos ao pai qual filho recebeu o clique, pois é ele que será removido. Desta vez não podemos utilizar o this, já que o dono do evento é a tabela, logo, ela acabará sendo removida. Para descobrirmos qual filho foi clicado, utilizaremos o event como parâmetro na função:	
		//event.target.remove();//Ele irá nos dizer quem foi clicado, quem foi o alvo, pela propriedade target. Enquanto o this se refere ao dono do evento, o event.target será quem sofreu propriamente o evento. O próximo passo será remover o elemento após o duplo clique:
		//event.target.parentNode.remove(); //No entanto, queremos remover a linha completa, ou seja, a tag <tr>, pai do <td>.Para selecionarmos o pai de um elemento, trabalharemos com a propriedade parentNode. A seguir selecionaremos quem foi clicado e removeremos o seu pai, uma tag <tr>:
		//var alvoEvento = event.target;
		//var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
		//paiDoAlvo.remove();
		
		event.target.parentNode.classList.add("fadeOut");//adicionaremos a classe fadeOut do css ao elemento
		
		setTimeout(function() {	
			event.target.parentNode.remove(); //Quando queremos aguardar um tempo, devemos usar a função setTimeout. Será passada como parâmetro uma função anônima com quanto tempo deve ser aguardado
		}, 500);
		
	});
	
	
	/*var pacientes = document.querySelectorAll(".paciente"); //Primeiramente, devemos selecionar as linhas. Todas elas possuem a classe paciente, portanto iremos selecioná-las:
	pacientes.forEach(function(paciente) { //Agora, para cada linha e paciente, faremos algo:
		paciente.addEventListener("dblclick", function() { //E para cada paciente, adicionaremos um escutador de eventos para escutar o evento de duplo clique, o dblclick:
			this.remove();//Quem será clicado? O dono do evento, certo? Este é que sofrerá a ação de duplo clique e executará a função. Para acessar o dono do evento, em que o evento está atrelado, utilizaremos uma palavra reservada do JavaScript chamada this
		});
	});*/