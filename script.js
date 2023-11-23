


function validate(){
  const user = document.getElementById('user').value;
  const password = document.getElementById('password').value;

  // Verifica se o usuário e a senha correspondem aos dados de admin fixos
  if (user === 'adimin' && password === 'adimin') {
    console.log('Login bem-sucedido como admin');
    localStorage.setItem('userAuthenticated', 'true');
    // Redireciona para a página de home
    window.location.href = 'home.html';
  } 
  else if (user === '' || password ===''){
    Toastify({
      text: "Preencha todos os campos",
      duration: 3000, // 2 segundos
      gravity: "top", // "top" ou "bottom"
      position: 'right', // 'left', 'center', ou 'right'
      backgroundColor: "linear-gradient(to right, #ff8a00, #e52e71)", // Cor de fundo para aviso
      close: true, // Mostra o botão de fechar

    }).showToast();
  }
   else {
    console.error('Erro no login: Credenciais inválidas');
    Toastify({
      text: "Usuario ou senha incorretas",
      duration: 3000, // 3 segundos
      gravity: "top", // "top" ou "bottom"
      position: 'right', // 'left', 'center', ou 'right'
      backgroundColor: "linear-gradient(to right, #ff8a00, #e52e71)", // Cor de fundo para aviso
      close: true, // Mostra o botão de fechar

    }).showToast();
    // Trate a tentativa de login com credenciais inválidas
  }
}

function Login(){
   validate();
}
