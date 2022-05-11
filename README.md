# Запуск приложения

Перед запуском необходимо установить соответствующие пакеты с помощью команды **npm install**.

## Development версия

Запуск приложения осуществляется командой **npm start dev**

## Production версия (оптимизированная для различных браузеров, в том числе IE11)

Для запуска необходимо выполнить команду **npm run build** для сборки оптимизированной версии.
Далее необходимо установить пакет _serve_ командой **npm install -g serve**

После установки build-версию можно запускать последовательным запуском сервера **npm run server** и клиента **serve -s build**

(Для IE11 оптимизированы не все стили, некоторые SVG-файлы отображаются некорректно)

## Конфигурация приложения

### Клиентская часть - localhost:3000

### Серверная часть (json-server) - localhost:5000

В файле _generate.js_ можно настраивать параметры генерируемых данных (число пользователей, символы и т.д.)
Файл _routes.json_ содержит конфигурацию маршрутов для запросов к серверу.

## Структура проекта

- _PersonList_ - основной модуль, содержащий в себе список пользователей, и остальные модули/компоненты приложения.
- _PersonCard_ - компоненты пользователя.
- _CreateEditPersonForm_ - форма редактирования, создания пользователей.
- _Dialog_ - модальное окно.

В папке UI Kit содержатся элементы пользовательского интерфейса.


