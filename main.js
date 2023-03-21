const DISCOUNT = 20;

let goods = [
    {
        name: 'Футбольний мяч',
        price: 899,
        pic: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/3b7341a09fc940308c22ac7e01293638_9366/GK3487_01_standard.WebP',
        color: 'white',
        model: 'GK3487',
        type: 'ball',
        count: 40,
        byuCount: 1
    },
     {
        name: `Волейбольний м'яч`,
        price: 360,
        pic: 'https://volberg.com.ua/image/cache/cache/1-1000/53/main/423c-MVA200_2-0-2-1200x1187.jpg',
        color: 'yellow',
        model: 'GT4324',
        type: 'ball',
        count: 51,
        byuCount: 1
    },
    {
        name: 'Баскетбольний мяч',
        price: 450,
        pic: 'https://tt-billiard.ua/image/cache/catalog/photo_tovarov/igrovye_stoly/jelektronnyj_basketbol/2428_basketbolnyj_mjach_eurocup_18sm_1727/basketball_01-1200x900.jpg',
        color: 'orange',
        model: 'GK0998',
        type: 'ball',
        count: 10,
        byuCount: 1
    },
    {
        name: 'Тенісний мяч',
        price: 250,
        pic: 'https://images.prom.ua/2874147453_w640_h640_tennisnye-myachi-dlya.jpg',
        color: 'yellowgreen',
        model: 'GK3343',
        type: 'ball',
        count: 4,
        byuCount: 1
    },
    {
        name: 'Фітбольний мяч',
        price: 500,
        pic: 'https://cdn.27.ua/sc--media--prod/default/05/b8/53/05b85309-4ef5-417f-a8fe-8180380862e9.jpg',
        color: 'pink',
        model: 'GK3431',
        type: 'ball',
        count: 1400,
        byuCount: 1
    },
    {
        name: 'iphone 13',
        price: 30000,
        pic: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_13_7.png',
        color: 'gray',
        model: 'HY3091',
        type: 'phone',
        count: 1400,
        byuCount: 1
    },
    {
        name: 'iphone 14',
        price: 35000,
        pic: 'https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/pgnfa3nbhlafzzkfq6if/iphone_14_family_lineup_plus_pro_max',
        color: 'gray',
        model: 'HY3092',
        type: 'phone',
        count: 1400,
        byuCount: 1
    },
    {
        name: 'Redmi note 12',
        price: 20000,
        pic: 'https://www.yugatech.com/wp-content/uploads/2022/10/redmi-note-12_1.png',
        color: 'white',
        model: 'JK8231',
        type: 'phone',
        count: 1400,
        byuCount: 1
    },
    {
        name: 'Redmi note 10s',
        price: 10000,
        pic: 'data:image/jpeg;base64,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',
        color: 'white',
        model: 'JK8225',
        type: 'phone',
        count: 1400,
        byuCount: 1
    },
    {
        name: 'Honor 12',
        price: 15000,
        pic: 'data:image/jpeg;base64,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',
        color: 'white',
        model: 'HB6531',
        type: 'phone',
        count: 1400,
        byuCount: 1
    },
    {
        name: 'iphone 13',
        price: 30000,
        pic: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_13_7.png',
        color: 'gray',
        model: 'HG6243',
        type: 'laptop',
        count: 1400,
        byuCount: 1
    },
    {
        name: 'iphone 14',
        price: 35000,
        pic: 'https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/pgnfa3nbhlafzzkfq6if/iphone_14_family_lineup_plus_pro_max',
        color: 'gray',
        model: 'MG6243',
        type: 'laptop',
        count: 1400,
        byuCount: 1
    },
    {
        name: 'Redmi note 12',
        price: 20000,
        pic: 'https://www.yugatech.com/wp-content/uploads/2022/10/redmi-note-12_1.png',
        color: 'white',
        model: 'QQ6111',
        type: 'laptop',
        count: 1400,
        byuCount: 1
    },
    {
        name: 'Redmi note 10s',
        price: 10000,
        pic: 'data:image/jpeg;base64,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',
        color: 'white',
        model: 'QK6122',
        type: 'laptop',
        count: 1400,
        byuCount: 1
    },
    {
        name: 'Honor 12',
        price: 15000,
        pic: 'data:image/jpeg;base64,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',
        color: 'white',
        model: 'OQ6121',
        type: 'laptop',
        count: 1400,
        byuCount: 1
    },
];


let cartList = [];
for(let el of goods){
    $('.container').append(`<div class='card ${el.type}' id='${el.model}'>
    <div class='cardName'>${el.name}</div>
    <img src='${el.pic}'>
    <div class='row'>
        <div>${el.model}</div>
        <div>${el.type}</div>
        <div class='bColor' style='background-color: ${el.color}'></div>
    </div>
    <div><s class='sm'>${el.price} грн</s> <span>${el.price - Math.floor(((el.price)*(DISCOUNT/100)))} грн<span class='discount'>-${DISCOUNT}%</span></span></div>
    <button class='buyBtn' id='${el.model}'>Купити</button>
    </div>`);

    $('.buyList').append(`<div class="buyListGoods goods" id='${el.model}'>
    <img src='${el.pic}'>
    <div class="content">
    <div class="contentText text">
    <p>${el.name}</p>
    <div><p>model:${el.model} </p> <p>type:${el.type}</p></div>
    </div>
    <div class="contentBtn Btn">
    <button class='detail'>Details</button>
    <button class='deleate' id='${el.model}'>Deleate</button>
    </div>
    </div>
    </div>`)
}

$('.deleate').click(function(e){
     cartList.pop() 
     console.log(cartList);
     $('.counter').text(cartList.length) 
    for(let el of goods){
        if(e.target.id==el.model){
            $(`#${el.model}`).css('display','none')
         }
    }
})

$('.buyBtn').click(function(e){
    for(let el of goods){
        if(el.model == e.target.id){
            if(!cartList.includes(el)){
            cartList.push(el);
            }else{
                el.byuCount++;
                console.log(cartList);
            }
               $(`#${el.model}`).css('display','flex')
        }
    }
    console.log(cartList);
    $('.counter').text(cartList.length)
});



$('.shopingCart').click(function(){
    $('.buyList').css('display','flex')
})
$('.shopingCart').dblclick(function(){
    $('.buyList').css('display','none')
})
$('.Katalog').click(function(){
    $('.shadow').show(1000)
    $('.KatalogMenu').show(1000)
})
$('.close').click(function(){
    $('.shadow').hide(1000)
    $('.KatalogMenu').hide(1000)
})
$('.back').click(function(){
    for(let el of goods){
          $(`.${el.type}`).css('display','flex')
    }
})
$('.Balls').click(function(){
    for(let el of goods){
        if(el.type!='ball'){
          $(`.${el.type}`).css('display','none')
        }else{
            $(`.${el.type}`).css('display','flex')
          }
    }
})
$('.Phone').click(function(){
    for(let el of goods){
        if(el.type!='phone'){
          $(`.${el.type}`).css('display','none')
        }else{
            $(`.${el.type}`).css('display','flex')
          }
    }
})
$('.Laptop').click(function(){
    for(let el of goods){
        if(el.type!='laptop'){
          $(`.${el.type}`).css('display','none')
        }else{
          $(`.${el.type}`).css('display','flex')
        }
    }
})





