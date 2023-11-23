

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
      // Trate a tentativa de login com credenciais inválidas
    }
}
