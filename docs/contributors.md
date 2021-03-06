# Контрибьютинг

**Если хотите сообщить о проблеме, не участвуя в ее решении**

Создайте [issue в Github](https://github.com/gpn-prototypes/ui-kit/issues/new). Команда разработки сама запланирует работу над ней.

**Если изменения большие**

- Сообщите о своем желании прислать PR и обсудите доработку. При необходимости — созвонитесь. Возможно, мы уже все поправили или запланировали такую же задачу.
- Пришлите PR и [пройдите ревью](review.md).

**Если изменения небольшие либо вы не смогли согласовать свою работу**

Пришлите PR и [пройдите ревью](review.md).

Обратите внимание, что мелкие баги или опечатки могут быть уже поправлены в одном из открытых PR.

## Оформление PR

Старайтесь облегчить чтение и проверку вашего кода, так как любой ревьюер — человек, который может пропустить деталь, не учесть что-то при проектировании, неточно понять задачу.

Сделать PR понятным для остальных помогут:

- [Шаблон с чеклистом для PR](../.github/pull_request_template.md), автоматически подставится при создании PR.
- Ваши комментарии к PR. Их можно добавить, не дожидаясь появления первых вопросов.
- Комментарии в коде к неочевидным решениям или специальным браузерным хакам. При этом комментариями в коде не следует злоупотреблять. Код должен говорить сам за себя и быть понятным.
  Следует придерживаться такого правила: если ощущается необходимость что-то прокомментировать внутри метода, этот код лучше выделить в новый метод.

Пункты, на которые стоит обратить внимание при оформлении.
Общее:

- Автор задачи выбрал правильную ветку для PR.
- Правильно выбраны [типы коммитов](commits-style.md): используются fix/feat/BREAKING CHANGE – это критично для обновления версий пакета.
- Новое решение не противоречит существующим PR.

Код:

- Код написан понятно, имена переменных читаемы, не используются сложные конструкции.
- Код подходит под описание задачи. Не было проведено другой работы не по задаче, которая может повлиять на другие части библиотеки.
- Нет (по возможности) числовых отступов в css, используются [переменные](https://github.com/gpn-prototypes/ui-kit/tree/master/src/components/Theme) и css-классы из дизайн-системы.

Тесты:

- [Есть тесты](unit-tests.md) на новую функциональность или исправленный баг (если баг не связан с версткой, то с большей вероятностью к нему можно добавить тесты).
- Тесты понятны, каждый тест-кейс написан в отдельном блоке.
- Тест не проверяет и не опирается на часто меняющуюся логику (например тексты)

Сборка:

- В CI нет ошибок сборки, типов, stylelint, eslint, prettier.
- Стенд Storybook собрался.
- На стенде не падают страницы, не возникают неожиданные ошибки в консоли.
