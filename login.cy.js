describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверил цвет кнопки восст.пароля


        cy.get('#mail').type('german@dolnikov.ru');  // Ввели верный логин
        cy.get('#pass').type('qa_one_love1');  // Ввели правильный пароль
        cy.get('#loginButton').click(); // Нажал войти


        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крести и его видит пользователь
    })



    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверил цвет кнопки восст.пароля


        cy.get('#mail').type('german@dolnikov.ru');  // Ввели верный логин
        cy.get('#pass').type('qa_one_love7');  // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти


        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крести и его видит пользователь
    })




       it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверил цвет кнопки восст.пароля


        cy.get('#mail').type('germandolnikov.ru');  // Ввели логин без @
        cy.get('#pass').type('qa_one_love1');  // Ввели правильный пароль
        cy.get('#loginButton').click(); // Нажал войти

        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крести и его видит пользователь
    })


       it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверил цвет кнопки восст.пароля

        cy.get('#forgotEmailButton').click(); // Нажимаю восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru');  // Ввёл почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажал отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крести и его видит пользователь
    })



       it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверил цвет кнопки восст.пароля

        cy.get('#mail').type('erman@dolnikov.ru');  // Ввели неверный логин
        cy.get('#pass').type('qa_one_love1');  // Ввели правильный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что текст совпадает
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и его видит пользователь
    })


       it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверил цвет кнопки восст.пароля


        cy.get('#mail').type('GerMan@Dolnikov.ru');  // Ввели верный логин
        cy.get('#pass').type('qa_one_love1');  // Ввели правильный пароль
        cy.get('#loginButton').click(); // Нажал войти


        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крести и его видит пользователь
    })
})










// + Найти поле логин и ввести верный логин
// + Найти поле пароль и ввести правильный пароль
// + найти кнопку Войти и нажать на неё
// Проверить, что авторизация прошла успешно