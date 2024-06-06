# Тестування працездатності системи

## Засоби тестування

Тестування CRUD застоснку виконується за допомогою онлайн-інструменту Postman. Для його роботи необхідно встановити Postman Agent.

### Отримання інформації про усіх користувачів

<img src="./images/testing_userlist1.png">

<img src="./images/testing_userlist2.png">

<img src="./images/testing_userlist3.png">

### Отримання інформації про певного користувача за його ID

<img src="./images/testing_userinfo.png">

### Успішне створення нового користувача

<img src="./images/testing_newuser_success.png">

### Вміст таблиці "user" після створення нового користувача

<img src="./images/testing_db_contents_1.png">

### Помилка "Нікнейм зайнято" при спробі створити нового користувача

<img src="./images/testing_newuser_nicknametaken.png">

### Помилка "Електронну пошту зайнято" при спробі створити нового користувача

<img src="./images/testing_userlist3.png">

### Успішне видалення користувача

<img src="./images/testing_deleteuser_success.png">

### Помилка "Користувача не знайдено" при спробі його видалити

<img src="./images/testing_deleteuser_notfound.png">

### Оновлення інформації про користувача

<img src="./images/testing_edituserinfo.png">

### Вміст таблиці "user" після виконання усіх операцій

<img src="./images/testing_db_contents_2.png">