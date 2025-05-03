const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];

const cardTemplate = document.querySelector('#item-template');

function makeCardByTemplate(title, description, tags, price, img) {
    const myCard = cardTemplate.content.cloneNode(true);

    myCard.querySelector('h1').textContent = title;
    myCard.querySelector('p').textContent = description;
    myCard.querySelector('.tags').textContent = tags;
    myCard.querySelector('span').textContent = price;
    myCard.querySelector('img').src = img;



    return myCard;

}

const Card1 = makeCardByTemplate('Игрушка мячик', 'Ваш питомец будет счастлив!', ["cat", "dog"], 500, './img/1.jpeg');
const Card2 = makeCardByTemplate("Игрушка лабиринт", "Поможет в развитии интеллекта!", ["cat", "dog"], 900, './img/2.jpeg');
const Card3 = makeCardByTemplate("Игрушка для котят", "Отвлечет вашего питомца!", ["cat"], 300, "./img/3.jpeg");
const Card4 = makeCardByTemplate("Миска «Котик»", "Подойдет и для собак!", ["cat", "dog"], 660, "./img/4.jpeg");
const Card5 = makeCardByTemplate("Лоток розовый", "Теперь вы можете забыть о проблемах с туалетом", ["cat"], 400, "./img/5.jpeg");
const Card6 = makeCardByTemplate("Сухой корм для кошек", "Специальная формула для милых усатиков!", ["cat"], 200, "./img/6.jpeg");
const Card7 = makeCardByTemplate("Сухой корм для собак", "Содержит полный комплекс витаминов", ["dog"], 300, "./img/7.jpeg");
const Card8 = makeCardByTemplate("Игрушка для собак", "Теперь вы можете не переживать за личные вещи", ["dog"], 500, "./img/8.jpeg");
const Card9 = makeCardByTemplate("Лежанка", "Идеальное место для отдыха!", ["cat", "dog"], 1500, "./img/9.jpeg");
const Card10 = makeCardByTemplate("Поилка для собак", "Возьмите с собой в путешествие", ["dog"], 800, "./img/10.jpeg");
const Card11 = makeCardByTemplate("Переноска", "Путешествуйте с комфортом!", ["cat", "dog"], 3500, "./img/11.jpeg");
const Card12 = makeCardByTemplate("Поводок для собак", "Для чудесных прогулок вместе", ["dog"], 800, "./img/12.jpeg");


const shopItems = document.querySelector('#shop-items');
shopItems.append(Card1);
shopItems.append(Card2);
shopItems.append(Card3);
shopItems.append(Card4);
shopItems.append(Card5);
shopItems.append(Card6);
shopItems.append(Card7);
shopItems.append(Card8);
shopItems.append(Card9);
shopItems.append(Card10);
shopItems.append(Card11);
shopItems.append(Card12);