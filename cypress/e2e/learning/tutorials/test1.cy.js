describe('Aula1: Validando funcionalidades de Login', () =>
{
  it('Validando o Login com as informações corretas', () => 
  {
    //Abrindo site do teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Selecionar o primeiro 'input':'Username'
    const inputUsername = cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    //Digitar o 'valor':'Admin' no 'input'
    inputUsername.type('Admin')

    //Selecionar o segundo 'input':'Password'
    const inputPassword = cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    //Digitar o 'valor':'admin123'
    inputPassword.type('admin123')

    //Clicar no 'buttom':'Login'
    const buttomLogin = cy.get('.oxd-button').click()

    //Verificando se o Login funcionou
    const verificar = cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
    
    cy.xpath('')
  })
})