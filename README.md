# Вычислитель отличий
### Hexlet tests and linter status:
[![Actions Status](https://github.com/AnastasiyaKoltsova/frontend-bootcamp-project-46/workflows/hexlet-check/badge.svg)](https://github.com/AnastasiyaKoltsova/frontend-bootcamp-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/7e9d0aa1573be23c8a3d/maintainability)](https://codeclimate.com/github/AnastasiyaKoltsova/frontend-bootcamp-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7e9d0aa1573be23c8a3d/test_coverage)](https://codeclimate.com/github/AnastasiyaKoltsova/frontend-bootcamp-project-46/test_coverage)
## Описание
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.
## Возможности утилиты:
Поддержка разных входных форматов: yaml, json
Генерация отчета в виде plain text, stylish и json.
## Пример использования:
#### формат plain
```
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
```
#### формат stylish
```
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```
