// Создаем коллекцию Map для хранения блюд и их поваров
const dishesAndChefs = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
]);

// Создаем коллекцию Map для хранения заказов каждого клиента
const orders = new Map();

// Функция для добавления заказа клиента
function addOrder(client, dish) {
    if (orders.has(client)) {
        orders.get(client).push(dish);
    } else {
        orders.set(client, [dish]);
    }
}

// Заказы клиентов
addOrder({ name: 'Алексей' }, 'Пицца "Пепперони"');
addOrder({ name: 'Алексей' }, 'Тирамису');

addOrder({ name: 'Мария' }, 'Суши "Калифорния"');
addOrder({ name: 'Мария' }, 'Пицца "Маргарита"');

addOrder({ name: 'Ирина' }, 'Чизкейк');

// Вывод информации о заказах
orders.forEach((dishes, client) => {
    console.log(`${client.name} заказал(а):`);
    dishes.forEach(dish => {
        console.log(`- ${dish}`);
        console.log(`  (готовит: ${dishesAndChefs.get(dish)})`);
    });
    console.log('');
});
