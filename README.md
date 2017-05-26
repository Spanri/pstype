# PSTYPE API V1 :sparkles: :fire:
Параметры принимаются в JSON.
Ответы возвращаются в JSON и всегда содержат `status` (короткая строка, характеризующая результат выполнения) и `message` (Более подробное описание результата выполнения).

## Глобальные методы
`GET` `/`

Возвращает название и актуальную версию API.

Все остальные методы начинаются с `api/v#`, где # это номер версии.

## Аутентификация
`POST` `/api/v1/signin`

Аутентифицирует пользователя и возвращает токен. Токен валиден 10 дней. Нагрузка содержит имя пользователя и его ИД.

### Параметры:
Название | Описание
---------|---------
`username` | имя пользователя
`password` | пароль

### Ответы:
Сообщение | Статус | Описание
----------|--------|---------
`Invalid username or password` | `error` | Имя пользователя или пароль не удовлетворяют даже начальным условиям, то есть не валидны для регистрации
`User not found` | `error` | Пользователь с таким именем не найден
`Wrong password` | `error` | Пользователь найден, но пароль неверен
`Database error` | `error` | Возникла ошибка при работе с базой данных
`Encryption error` | `error`| Возникла ошибка при хэшировании пароля
`User successfuly authorized` | `ok`| Пользователь успешно авторизован. В этом случае ответ также будет содержать `token`

## Регистрация
`POST` `/api/v1/signup`

Регистрирует пользователя и возвращает токен и информацию о созданном пользователе.

### Параметры:
Название | Описание
---------|---------
`username` | имя пользователя
`password` | пароль
`age` | возраст

### Ответы:
Сообщение | Статус | Описание
----------|--------|---------
`Invalid username or password` | `error` | Имя пользователя или пароль не валидны. (Должны содержать только буквы латинского алфавита, длина > 6 символов)
`Invalid age. (must be 14..110)` | `error` | Некорректный возраст. (Должен быть от 14 до 110)
`User already exists` | `error` | Пользователь с таким именем уже существует
`Database error` | `error` | Возникла ошибка при работе с базой данных
`Encryption error` | `error` | Возникла ошибка при хэшировании пароля
`User successfuly created` | `ok` | Пользователь успешно создан. В этом случае ответ так же содежит `token` и поле `user`, содержащее нагрузку токена
