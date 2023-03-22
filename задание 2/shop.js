let goods = {
    1: {
        id: 1,
        name: 'товар1',
        description: 'Описание1',
        sizes: ['xs', 's', 'l'],
        price: 100,
        available: true,
    },
    2: {
        id: 2,
        name: 'товар2',
        description: 'Описание2',
        sizes: ['xs', 's'],
        price: 200,
        available: true,
    },
    3: {
        id: 3,
        name: 'товар3',
        description: 'Описание3',
        sizes: ['xs', 's', 'l', 'xl'],
        price: 300,
        available: false,
    },
    4: {
        id: 4,
        name: 'товар4',
        description: 'Описание4',
        sizes: ['xs', 's', 'l', 'xxl'],
        price: 400,
        available: false,
    },
    5: {
        id: 5,
        name: 'товар5',
        description: 'Описание5',
        sizes: ['s', 'l', 'xl'],
        price: 500,
        available: true,
    },
};

let basket = [
    {
        good: 1,
        amount: 3,
    },
    {
        good: 2,
        amount: 5,
    },
    {
        good: 5,
        amount: 2,
    },
];

// добавление товара
function addGoodToBasket(goodId, amount) {
    basket.push({ 'good': goodId, 'amount': amount })
    return basket
}

// удаление товара
function removeGoodFromBasket(goodId) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good == goodId) {
            basket.splice(i, 1)
        }
    }
    return basket
}

// очистка корзины
function clearBasket() {
    basket.splice(0, basket.length)
    return basket
}

// подсчет общего количества и стоимости товара
function totalGoods() {
    let totalAmount = 0
    let totalSumm = 0
      for (let i = 0; i < basket.length; i++) {
        totalSumm += basket[i].amount * goods[basket[i].good].price
        totalAmount += basket[i].amount
    }
    return { 'totalAmount': totalAmount, 'totalSumm': totalSumm }
}




console.log(addGoodToBasket(3, 7));
console.log(removeGoodFromBasket(5));
// console.log(clearBasket())
console.log(totalGoods())