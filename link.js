var THEIR_NAME = '[data-name="theirname"]'; //小图变大图的div
var YOUR_NAME = '[data-name="yourname"]'; //用来锁定大图的img
var HIS_NAME = '[data-name="hisname"]'; //用来锁定大页面上的寄语
var MY_NAME = '[data-name="myname"]'; //用来锁定每个缩略图
var SMALL_EST = 'smallest';
var HIDDEN_BOBY = 'hiddenbigimg';
var DATA_A = '["data-a"]';

//
function huoqu(imageUrl, titleSays) {
    'use strict';
    var bigimg = document.querySelector(YOUR_NAME); //大页面的img
    bigimg.setAttribute('src', imageUrl); //截取src
    var bigsays = document.querySelector(HIS_NAME); //锁定寄语
    bigsays.textContent = titleSays;
}

//获取纯url
function bigimgFromsmall(apple) {
    'use strict';
    return apple.getAttribute('data-img-url');
}

//获取纯寄语
function bigsaysFromsmall(apple) {
    'use strict';
    return apple.getAttribute('data-says');
}

//总函数
function totail(apple) {
    'use strict';
    huoqu(bigimgFromsmall(apple), bigsaysFromsmall(apple));
}

//
function addAppleHandle(app) {
    'use strict';
    app.addEventListener('click', function (event) {
        event.preventDefault();
        totail(app);
        resetbigimg();
    });
}

//
function getApplesArray() {
    'use strict';
    var apples = document.querySelectorAll(MY_NAME);
    var appleArray = [].slice.call(apples);
    return appleArray;
}

//
function hidebigimg() {
    'use strict';
    document.body.classList.add(HIDDEN_BOBY);
}

//
function resetbigimg() {
    'use strict';
    //
    var theirname = document.querySelector(THEIR_NAME);
    document.body.classList.remove(HIDDEN_BOBY);
    theirname.classList.add(SMALL_EST);
    setTimeout(() => {
        theirname.classList.remove(SMALL_EST);
    }, 50);
}

//
function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function (event) {
        event.preventDefault();
        console.log(event.key);
        if (event.key === 'Escape') {
            hidebigimg();
        };
    });
}

//
function through() {
    'use strict';
    var apples = getApplesArray();
    apples.forEach(addAppleHandle);
    addKeyPressHandler();
}

through();