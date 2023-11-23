

// function validateFields(){
//     const passwordValid = isPasswordValid();
//     document.getElementById('login-button').disable = !passwordValid;
// }

// function isPasswordValid(){
//     const password = document.getElementById('password').value;
//     if(!password){
//         return false;
//     }
//     return true;
// }

function Login(){
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário e a senha correspondem aos dados de admin fixos
    if (user === 'adimin' && password === 'adimin') {
      console.log('Login bem-sucedido como admin');
      localStorage.setItem('userAuthenticated', 'true');

     
      // Redireciona para a página de administração
      window.location.href = 'home.html';
    } else {
      console.error('Erro no login: Credenciais inválidas');
      Toastify({
        text: "Usuario ou senha incorretas",
        duration: 2000, // 5 segundos
        gravity: "top", // "top" ou "bottom"
        position: 'right', // 'left', 'center', ou 'right'
        backgroundColor: "linear-gradient(to right, #ff8a00, #e52e71)", // Cor de fundo para aviso
        close: true, // Mostra o botão de fechar

      }).showToast();
      // Trate a tentativa de login com credenciais inválidas
    }
}
