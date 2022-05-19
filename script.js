// HEADER
window.addEventListener('scroll', function scrollNav() {
    let svgPaths = document.querySelectorAll('.svgPath');

    if (window.pageYOffset !== 0) {
        for (let i = 0; i < svgPaths.length; i++) {
            svgPaths[i].classList.add('svgPathScroll');
            console.log(svgPaths[i]);
        };
        document.querySelector('header').classList.add('headerOnScroll');
        document.querySelector('.navMenuWrap').classList.add('navMenuScroll');
        document.querySelector('.navloginMenuWrap').classList.add('navMenuScroll');


    } else {
        document.querySelector('header').classList.remove('headerOnScroll');
        document.querySelector('.navMenuWrap').classList.remove('navMenuScroll');
        document.querySelector('.navloginMenuWrap').classList.remove('navMenuScroll');
        for (let i = 0; i < svgPaths.length; i++) {
            svgPaths[i].classList.remove('svgPathScroll');
            console.log(svgPaths[i]);
        };
    };
});





// console.log('Hello');
// const qwe = {
//     qaz: 4,
//     wsx: 7,
//     edc: 3,
// }
// const asd = {
//     qaz: 8,
//     wsx: 16,
//     edc: 8,
// }

// function recept(qwe, asd) {
//     const q = [];
//     for (let key in qwe) {
//         for (let b in asd) {
//             if (key == b) {
//                 q.push(Math.floor(asd[b] / qwe[key]));
//             }
//         }
//     }
//     console.log(q.sort()[0]);
// }

// recept(qwe, asd)