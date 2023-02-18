# 1 Задание
Напишите функцию промисификации (promisify). Функция промисификация - функция принимает коллбек, а возвращает промис.
Код должен быть лаконичным и понятным

Пример использования
```
const getSumAsync = (num1, num2, callback) => { 
    if (!num1 || !num2) {
        return callback(new Error("Missing arguments"), null);
    }
    return callback(null, num1 + num2);
}

const getSumPromise = promisify(getSumAsync);

getSumPromise(1, 1)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err);
    })
```