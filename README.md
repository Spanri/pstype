# :fire: PSTYPE V1 :cat2: 

## О приложении
Полное название - psychotype. Определяет психотип водителя по характеру его движения.

## Технологии

### Для панели администратора
Название | Описание
---------|----------
vue | фреймворк для админки
vue-router | фреймворк для vue, маршрутизация
vuex | фреймворк для vue, хранение данных
axios | фреймворк для vue, http-запросы
google maps | гугл карты для админки

### Для сервера
Название | Описание
---------|----------
Babel | перевод в ES2015
Webpack | для babel (+ юзается в панели администратора)
npm-run-all | параллельный запуск команд
express | фреймворк для сервера
jwt | токен
mongoose | NoSQL база данных
JSDoc | Документирование
JSdoc-route-plugin | Плагин для JSDoc, параметры для описания route

## Как пользоваться
Параметры принимаются в JSON.
Ответы возвращаются в JSON и всегда содержат `status` (короткая строка, характеризующая результат выполнения) и `message` (Более подробное описание результата выполнения).

## Ссылка на сервер
[Heroku](https://pstype.herokuapp.com)

## Документация по маршрутам
[Документация](https://pstype.herokuapp.com/doc)

## Ответы:

### Статус "ок"
Сообщение | Описание
----------|---------
`ok` | Для запроса на вход
`User successfuly authorized` | Пользователь успешно авторизован. В этом случае ответ также будет содержать `token`
`User successfuly created` | Пользователь успешно создан. В этом случае ответ также содежит `token` и поле `user`с нагрузкой токена
`User successfuly changed` | Пользователь успешно изменен
`Data successfuly processed` | Данные успешно обработаны
`Data successfuly received` | Данные успешно получены

### Ошибки логина, пароля, id или логина вк
Сообщение | Описание
----------|---------
`Verify error` | Ошибка верификации токена (скорее всего истек срок действия)
`User not found` | Пользователь с таким именем не найден
`Wrong password` | Пользователь найден, но пароль неверен
`Database error` | Возникла ошибка при работе с базой данных
`User with this username already exists` | Пользователь с таким именем уже существует
`Username is required` | Отсутствует имя пользователя
`Password is required` | Отсутствует пароль
`Usernamevk is required` |  Отсутствует логин
`idvk is required` | Отсутствует id

`Verify error` также имеет поле message2, где можно посмотреть конкретное описание ошибки (генерируется само).

### Ошибки координат, возраста, пола
Сообщение | Описание
----------|---------
`Shirota is required` | Отсутствует широта
`Dolgota is required` | Отсутствует долгота
`Speed is required` | Отсутствует скорость
`Age must be >= 14` | Возраст должен быть больше либо равен 14
`Age must be <= 110`| Возраст должен быть меньше либо равен 110
`Sex must be >= 0` | Пол должен быть больше либо равен 0
`Sex must be <= 2`| Пол должен быть меньше либо равен 2
`Age must be > 14 and < 110` | Возраст должен быть от 14 до 110
`Sex must be an integer` | Пол должен быть целым числом (0 - default, 1 - м, 2 - ж)

Примечание: при неправильном типе широты, долготы или скорости выдается ошибка типа "Cast to [number] failed for value \"[\"25p\"]\" at path \"latitude\" (она сама формируется)

### Другие ошибки
Сообщение | Описание
----------|---------
`Unexpected error` | Неизвестная ошибка
`Database error` | Возникла ошибка при работе с базой данных
`Error in saving` | Ошибка сохранения, в .../map/obr

Примечание: При ошибке "Database error" также есть message2, где описана ошибка (генерируется сама). Если вдруг она возникла, можно для интереса послать этот же запрос + переменную message2.
