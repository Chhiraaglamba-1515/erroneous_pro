let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: ' Zorex Multiple Function Exercises with Removable Preacher curl Attachment',
        images: 'product1.webp',
        price: 16499
    },
    {
        id: 2,
        name: '  PowerMax Fitness GH-285 Steel Multi-Function 150lbs (Blue/Black) ',
        images: 'product2.webp',
        price: 48499
    },
    {
        id: 3,
        name: ' Flexnest Commercial Leg Extension / Leg Curl',
        images: 'product3.webp',
        price: 90999
    },
    {
        id: 4,
        name: '  Cosco CE-5002 Leg Extension Weight Machine',
        images: 'product4.webp',
        price: 110000
    },
    {
        id: 5,
        name: ' Semi Automatic Leg Press Machine 190 Kilograms    ',
        images: 'product5.webp',
        price: 40000
    },
    {
        id: 6,
        name: ' 45 Degree Leg Press - Pro Series',
        images: 'product6.webp',
        price: 70000
    },
    {
        id: 7,
        name: ' Seated Row Machine',
        images: 'product7.webp',
        price: 69000
    },
    {
        id: 8,
        name: ' Functional Trainer HF-01',
        images: 'product8.webp',
        price: 140499
    },
    {
        id: 9,
        name: ' Aurion Weight Plates - Pack of 4 | Gym Weights Plates Set for Weightlifting - Black (1 Kg x 4)',
        images: 'product2.1.webp',
        price: 3000
    },
    {
        id: 10,
        name: ' Symactive Professional Metal Integrated Rubber Adjustable(5x8 Kg Rubber Weight, 14 Dumbbell Rods Pair & Nuts)',
        images: 'product2.2.webp',
        price: 8499
    },
    {
        id: 11,
        name: 'BULLAR Home Gym Set, Alloy Steel Adjustable Dumbbell Set, Steel Dumbbell Plates, (10-40kg)',
        images: 'product2.3.webp',
        price: 8999
    },
    {
        id: 12,
        name: 'IGNITE WEIGHTS Olympic Barbell Rubber Coated Metal Integrated Weight Plates with 50mm Internal Dia, 3 Holes Hand Grip Home Gym Fitness Workout(2.5-25Kg Pair) (2.5 Kg Pair)',
        images: 'product2.4.webp',
        price: 4000
    },
    {
        id: 13,
        name: 'Rep Fitness Ergo Handle Hex Dumbbell Sets. 5-50 set or 80-100 set. Available with or Without Dumbbell Rack',
        images: 'product2.5.webp',
        price: 140000
    },
    {
        id: 14,
        name: 'The Flexibell',
        images: 'product2.6.webp',
        price: 17999
    },
    {
        id: 15,
        name: '  Boldfit Cotton Wrist Band for Men & Women, Wrist Supporter for Gym',
        images: 'product3.1.webp',
        price: 399
    },
    {
        id: 16,
        name: 'Heavy Duty Handles with Solid ABS Cores and Welded D-Rings for Gym',
        images: 'product3.2.webp',
        price: 499
    },
    {
        id: 17,
        name: ' Macho Gym Gloves for Men & Women with Wrist Support',
        images: 'product3.3.webp',
        price: 379
    },
    {
        id: 18,
        name: 'Bag for Men & Women with Separate Shoes Compartment/Carry Gym Accessories',
        images: 'product3.4.webp',
        price: 1000
    },
    {
        id: 19,
        name: 'AmazonBasics 1.5in Exercise Rope for Strength Training, 30ft, Polyester, Black',
        images: 'product3.5.webp',
        price: 2599
    },
    {
        id: 20,
        name: 'Ultimate Gym Accessories Combo Set for Men and Women Workout ',
        images: 'product3.6.webp',
        price: 2500
    }

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.images}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.images}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}