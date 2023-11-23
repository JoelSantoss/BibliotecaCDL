document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o usuário está autenticado ao carregar a página
    const isAuthenticated = localStorage.getItem('userAuthenticated');
    if (!isAuthenticated) {
      // Se não estiver autenticado, redireciona de volta para a página de login
      window.location.href = 'index.html';
    }
    else{
        Toastify({
            text: "Bem Vindo (a)",
            duration: 2000, // 3 segundos
            gravity: "top", // "top" ou "bottom"
            position: 'right', // 'left', 'center', ou 'right'
            backgroundColor: "linear-gradient(to right, #4CAF50, #45a049)", // Cor de fundo para sucesso
            close: true, // Mostra o botão de fechar
          }).showToast();
    
    }
  });

function updateDate() {
        var dateContainer = document.getElementById('date-container');
        var currentDate = new Date();
        var dateString = currentDate.toLocaleDateString('pt-BR');
        dateContainer.innerHTML = 'Data: ' + dateString;
        }

        setInterval(updateDate, 1000);

        updateDate();

function salvarLinha(numeroOrdem) {
            // Adicione aqui a lógica para salvar os dados da linha com o número de ordem fornecido.
            localStorage.setItem("ordem-"+numeroOrdem,numeroOrdem)
            alert("Visitante " + numeroOrdem + " salvo!");

        }

function adicionarLinha() {
    // Obtém a referência para a tabela
    var table = document.getElementById("attendance-table");

    // Obtém o número da última linha
    var lastRowNumber = table.rows.length;

    // Cria uma nova linha e células
    var newRow = table.insertRow(-1);

    // Adiciona células à nova linha
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var cell = newRow.insertCell(i);

        if (i === 0) {
            // Número da ordem
            cell.innerHTML = lastRowNumber;
        } else if (i === table.rows[0].cells.length - 1) {
            // Botão "Salvar"
            cell.innerHTML = '<button onclick="salvarLinha(' + lastRowNumber + ')">Salvar</button>';
        } else if (i === 1) {
            // Dropdown na coluna "Tipo de Visitante"
            cell.innerHTML = `
                <select name="atividade${lastRowNumber}_A">
                    <option value="0">Selecione</option>
                    <option value="A">Aluno Extensão</option>
                    <option value="B">Aluno Graduação</option>
                    <option value="C">Aluno Pós-Graduação</option>
                    <option value="D">Corpo Docente</option>
                    <option value="E">Diretor</option>
                    <option value="F">Funcionário</option>
                    <option value="G">Gestor</option>
                    <option value="H">Institucional</option>
                    <option value="I">Visitante</option>
                </select>`;
        } else {
            // Células de radio (ou outro input conforme necessário)
            cell.innerHTML = '<td class="radio-container"><label><input type="checkbox" name="atividade' + lastRowNumber + '_' + String.fromCharCode(65 + i - 1) + '" value="' + String.fromCharCode(65 + i - 1) + '"></label></td>';
        }
    }
}

function Logout(){
    
    localStorage.removeItem('userAuthenticated');
    window.location.href = 'index.html'
}
