# 6 задание
1) Реализуйте функцию copyObject, которая будет создавать копию значение (глубокую копию объекта).
2) Реализуйте функцию isCopy, которая будет принимать два аргумента - исходное значение и копию значения, и будет проверять, что копия действительно является копией исходного значения.
Возвращать данная функция должна boolean.
В публичных тестах проверка будет осуществляться проверка на уникальность при помощи Вашей функции isCopy, а также при помощи JSON.stringify. К сожалению, проверка при помощи JSON.stringify не всегда дает правильный результат. Поэтому в приватных тестах помимо Вашей функции isCopy будет также использоваться наша собственная реализация данного метода. 

Условия:
1) Функция в качестве первого аргумента принимает значение, копию которого необходимо создать;
2) Прототипы копировать не нужно;
3) Функции внутри принимаемого объекта не могут использовать внешние локальные переменные.
4) Входное значение в copyObject может быть как примитивным типом, так и непримитивным

Тип можно посмотреть в copy-object.ts