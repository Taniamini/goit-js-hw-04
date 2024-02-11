function isEnoughCapacity(products, containerSize) {
  // створюємо змінну для обчислення кількості значень товарів
  let totalProducts = 0;
  // обчислюємо кількість значень товарів
  for (const quantity of Object.values(products)) {
    totalProducts += quantity;
  }
  // виводимо результат обчислення, якщо значення товарів менше значення контейнера, результат буде true, інше - false
  return totalProducts <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
