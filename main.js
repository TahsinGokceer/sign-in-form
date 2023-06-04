const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const contianer = document.getElementById('container')

signUpButton.addEventListener('click', () => contianer.classList.add('right-panel-active'))
signInButton.addEventListener('click', () => contianer.classList.remove('right-panel-active'))
