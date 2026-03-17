const fs = require('fs');
const path = require('path');

const ordersPath = path.join('d:', 'BANWEB', 'fashion-store', 'backend', 'data', 'orders.json');
try {
    const content = fs.readFileSync(ordersPath, 'utf8');
    JSON.parse(content);
    console.log('orders.json is valid');
} catch (e) {
    console.error('orders.json is NOT valid:', e.message);
}

const productsPath = path.join('d:', 'BANWEB', 'fashion-store', 'backend', 'data', 'products.json');
try {
    const content = fs.readFileSync(productsPath, 'utf8');
    JSON.parse(content);
    console.log('products.json is valid');
} catch (e) {
    console.error('products.json is NOT valid:', e.message);
}

const usersPath = path.join('d:', 'BANWEB', 'fashion-store', 'backend', 'data', 'users.json');
try {
    const content = fs.readFileSync(usersPath, 'utf8');
    JSON.parse(content);
    console.log('users.json is valid');
} catch (e) {
    console.error('users.json is NOT valid:', e.message);
}
