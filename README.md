# :fire: PSTYPE V1 :cat2: 
Параметры принимаются в JSON.
Ответы возвращаются в JSON и всегда содержат `status` (короткая строка, характеризующая результат выполнения) и `message` (Более подробное описание результата выполнения).

## Глобальные методы
`GET` `/`

Возвращает название и актуальную версию API.

Все остальные методы начинаются с `api/v#`, где # это номер версии (сейчас v1).

## Аутентификация
`POST` `/api/v1/signin` или `/api/v1/vksignin`.
Для вк вместо username и password - usernamevk и idvk.

Аутентифицирует пользователя, возвращает статус приветствия и токен. Токен валиден 10 дней. Нагрузка содержит имя пользователя и его ИД.

### Параметры:
Название | Описание | Тип | Обязательность
---------|----------|-----|---------------
`username` | имя пользователя | String | да
`password` | пароль | String | да

## Регистрация
`POST` `/api/v1/signup` или `/api/v1/vksignup`

Регистрирует пользователя и возвращает токен и информацию о созданном пользователе.
Для вк вместо username и password - usernamevk и idvk.

### Параметры:
Название | Описание | Тип | Обязательность
---------|----------|-----|---------------
`username` | имя пользователя | String | да
`password` | пароль | String | да
`age` | возраст | Number | нет
`sex` | пол | Boolean | нет

## Изменение данных (не координат)
`POST` `/api/v1/change/`

Изменяет данные пользователя.

### Параметры:
Название | Описание | Тип | Обязательность
---------|----------|-----|---------------
`token` | токен | String | да
`age` | возраст | Number | нет
`sex` | пол | Boolean | нет

## Завершение режима водителя, обработка данных
`POST` `/api/v1/change/data`

Возвращает данные о пользователе: `age`, `sex`, `type`.

### Параметры:
Название | Описание | Тип | Обязательность 
---------|----------|-----|---------------
`token` | токен | String | да

## Добавление координат пользователя
`POST` `/api/v1/map/pos`

Добавляет местоположение в массив с координатами пользователя.
Примечание: долгота, широта и скорость не заданы на сервере как обязательные (техническая необходимость), будет выдавать ошибку casterror в случае отсутствия чего-либо их этого.

### Параметры:
Название | Описание | Тип | Обязательность 
---------|----------|-----|---------------
`token` | токен | String | да
`dolgota` | долгота | Number | да
`shirota` | широта | Number | да
`speed` | скорость | Number | да

## Завершение режима водителя, обработка данных
`POST` `/api/v1/map/obr`

Обрабатывает данные. 
Примечание: пока что только находит максимальную скорость, не вычисляет тип, но можешь в бд сама написать тип и проверить работу клиента.

### Параметры:
Название | Описание | Тип | Обязательность 
---------|----------|-----|---------------
`token` | токен | String | да

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
`Age must be an integer` | Возраст должен быть целым числом
`Sex must be an integer` | Пол должен быть целым числом (0 - default, 1 - м, 2 - ж)

Примечание: при неправильном типе широты, долготы или скорости выдается ошибка типа "Cast to [number] failed for value \"[\"25p\"]\" at path \"latitude\" (она сама формируется)

### Другие ошибки
Сообщение | Описание
----------|---------
`Unexpected error` | Неизвестная ошибка
`Database error` | Возникла ошибка при работе с базой данных

Примечание: При ошибке "Database error" также есть message2, где описана ошибка (генерируется сама). Если вдруг она возникла, можно для интереса послать этот же запрос + переменную message2.
