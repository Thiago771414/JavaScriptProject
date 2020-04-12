var botaoAdicionar = document.querySelector("#adicionar-paciente");//Implementamos essa adição de pacientes à tabela, no arquivo form.js, porém, o código está preso ao escutador do evento click do botão "Adicionar":
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    // Cria a tr e a td do paciente
	var pacienteTr = montaTr(paciente);
	var erros = validaPaciente(paciente);//No momento de chamarmos a função validaPaciente(paciente), extrairemos o retorno da função para a variável erro. Se o tamanho da String for maior que 0, significa que ocorreu algum erro.
	
	
	/*if (!validaPaciente(paciente)) {
        console.log("Paciente inválido");
		return;
    }*/
	   console.log(erros);
    if(erros.length > 0){
       
	   exibeMensagensDeErro(erros);
       return;
	   
	   //var mensagemErro = document.querySelector("#mensagem-erro"); //De volta ao form.js, se ocorrer algum erro na validação, selecionaremos o span que possui o id #mensagem-erro, e depois alteraremos o conteúdo de texto.
	   //mensagemErro.textContent = erros;
	   //return;
    }

    var tabela = document.querySelector("#tabela-pacientes"); 

    tabela.appendChild(pacienteTr);
	
	adicionaPacienteNaTabela(paciente); //Nós já temos uma função, em seguida iremos chamá-la acima do form.reset(), passando o paciente:
	
	form.reset();
	var mensagensErro = document.querySelector("#mensagem-erro"); //Faremos um pequeno ajuste para os casos em que adicionamos um paciente na tabela. Vamos limpar a ul no form.js. Na variável mensagensErro, usaremos document.querySelector(). Após a adição, vamos limpar as mensagens:
    mensagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagem-erro");//Para cada item do array, selecionaremos a ul, que será guardada em uma variável:
	ul.innerHTML = "";//Nós queremos limpar a lista de mensagens (ul), antes que as mensagens de erro sejam exibidas. Para esvaziar a ul, removeremos todo o conteúdo HTML. Para isto, utilizaremos a propriedade innerHTML, que nos permite controlar o HTML interno de um elemento. Passaremos uma string vazia para a propriedade
	erros.forEach(function(erro){//Além do for, existe outro tipo de iteração, o forEach(), o qual não precisamos delimitar, e que passará por todos os elementos. Para cada item do array, será realizada uma ação.
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
	/*for(var i = 0; i < erros.lenght ; i++){
        var erro = erros[i];
    }*///E para cada item do array, adicionaremos a tag <li>. Poderemos fazê-lo de diferentes formas, como usando o for tradicional:
	}



function obtemPacienteDoFormulario(form) {
    var paciente = {
	nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
	imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montaTr(paciente){
	
    var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    
	var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    if(paciente.altura < 3.0 && paciente.altura >= 0){
        return true;
    }
}

function validaPaciente(paciente) {
	 var erros = [];//A função só retornará uma coisa de cada vez, e não duas strings concatenadas. Ou ela retorna que o peso é inválido, ou que a altura é inválida. Então, em vez de retornarmos uma única string, retornaremos um array de strings.
    
	if (paciente.nome.length == 0) { //Para verificar se um campo está em branco, podemos analisar o seu tamanho (length), se ele for igual 0, significa que o campo não foi preenchido.
        erros.push("O nome não pode ser em branco");
    }
	if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }
	if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");//Se o valor do peso tiver algum problema, pegaremos o array de erros e colocaremos algo dentro, usando o método push(). Faremos o mesmo para a altura. 
    }
	if (!validaAltura(paciente.altura)) { //No entanto, usaremos o operador de negação ! para deixar o código mais legível. Apenas no caso do peso não ser válido, o erro.push() será adicionado. O mesmo será feito para a altura, e assim poderemos remover o else.
       erros.push("Altura é inválida!");
    }
	return erros;//Ao final da função, retornamos o array.
}

function adicionaPacienteNaTabela(paciente) { 
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
//Nós podemos reaproveitar o código criando a função adicionaPacienteNaTabela. Essa função receberá um paciente, e depois a tag tr será montada. O próximo passo será buscar a tabela e adicionar o pacienteTr nela.Isto é, a função já montava um paciente, verificava os erros, e o adicionava na tabela. Nós poderemos chamar a função adicionaPacienteNaTabela() - com todas as ações mencionadas -, ou podemos aproveitá-la para adicionarmos os pacientes recebidos. No arquivo buscar-pacientes.js, adicionaremos adicionaPacienteNaTabela(), que por enquanto só inclui um paciente. No entanto, teremos um array com vários deles. Logo, iremos iterar pelo array usando o forEach(), e adicionaremos cada paciente contido nele.