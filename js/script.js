// HEADER
window.addEventListener('scroll', scrollNav);
function scrollNav() {
  let svgPaths = document.querySelectorAll('.svgPath');
  if (window.pageYOffset !== 0) {
    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].classList.add('svgPathScroll');
    }
    document.querySelector('header').classList.add('headerOnScroll');
    document.querySelector('.navMenuWrap').classList.add('navMenuScroll');
    document.querySelector('.navloginMenuWrap').classList.add('navMenuScroll');
  } else {
    document.querySelector('header').classList.remove('headerOnScroll');
    document.querySelector('.navMenuWrap').classList.remove('navMenuScroll');
    document
      .querySelector('.navloginMenuWrap')
      .classList.remove('navMenuScroll');
    for (let i = 0; i < svgPaths.length; i++) {
      svgPaths[i].classList.remove('svgPathScroll');
    }
  }
}
scrollNav();
//BUTTON
const butt = document.querySelector('.button');
const buttt = document.querySelector('.everyButton');
butt.addEventListener('mouseenter', buttonOnMousee(butt));
buttt.addEventListener('mouseenter', buttonOnMousee(buttt));
function buttonOnMousee(el) {
  el.style.position = 'relative';
  el.onmousemove = function (e) {
    el.style.top = e.offsetY - el.offsetHeight / 2 + 'px';
    el.style.left = e.offsetX - el.offsetWidth / 2 + 'px';
  };
  el.onmouseout = function () {
    el.style.display = 'block';
    el.style.top = 0;
    el.style.left = 0;
  };
}

//OFFER SECTION
// offer appear
const classes = [
  'offerListItemOnScroll1',
  'offerListItemOnScroll2',
  'offerListItemOnScroll3',
  'offerListItemOnScroll4',
];
window.addEventListener('scroll', function scrollOffer() {
  let elem = document.querySelector('.offerSection');
  let elemPosition = elem.getBoundingClientRect();
  const list = document.querySelectorAll('.offerListItem');
  if (
    (elemPosition.top <= this.window.innerHeight && elemPosition.top >= 0) ||
    (elemPosition.bottom <= this.window.innerHeight && elemPosition.bottom >= 0)
  ) {
    document
      .querySelector('.offerTextWrap')
      .classList.add('offerTextWrapOnScroll');
    for (let i = 0; i < list.length; i++) {
      list[i].classList.add(classes[i]);
    }
  } else {
    document
      .querySelector('.offerTextWrap')
      .classList.remove('offerTextWrapOnScroll');
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove(classes[i]);
    }
  }
});

//Section 3

//Whats in a box list animation

window.addEventListener('scroll', scaleList);
let colorCount = 0;
const color = ['red', 'green', 'orange', 'blue', 'pink', 'violet'];
let onScrean = true;

function scaleList() {
  const elem = document.querySelector('.textWrap');
  const elemPosition = elem.getBoundingClientRect();
  const whatsList = document.querySelectorAll('.watsList li');

  if (
    (elemPosition.top <= this.window.innerHeight && elemPosition.top >= 0) ||
    // (elemPosition.top >= 0 &&
    (elemPosition.bottom <= this.window.innerHeight && elemPosition.bottom >= 0)
  ) {
    // onScrean = true;
    if (onScrean) {
      requestAnimationFrame(() => {
        for (let i = 0; i < whatsList.length; i++) {
          whatsList[i].classList.add('onScrean');
          whatsList[i].style.animationDelay = i * 1000 + 'ms';
        }
      });

      colorCount + 1 >= color.length ? (colorCount = 0) : (colorCount += 1);
      requestAnimationFrame(() => {
        elem.firstElementChild.style.transition = 0.3 + 's';
        elem.firstElementChild.style.color = color[colorCount];
      });
      onScrean = false;
    }
  } else {
    whatsList.forEach((x) => x.classList.remove('onScrean'));
    // elem.firstElementChild.style.color = 'initial';
    onScrean = true;
    return false;
  }
}
// What`s in a box Photo slider

$(document).ready(function () {
  $('.photosWrap').slick({
    adaptiveHeight: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFocus: false,
    draggable: true,
  });
});

// Photos coments
const images = document.querySelectorAll('.imgSpan');

function firstImage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        'https://source.unsplash.com/340x340/?woman,beauty',
        'https://source.unsplash.com/collection/8853143/340x340',
        'https://source.unsplash.com/340x340/?woman,face',
        'https://source.unsplash.com/340x340/?woman,body',
        'https://source.unsplash.com/340x340/?dog,smile',
        'https://source.unsplash.com/340x340/?cat,angry',
      ]);
    }, 100);
  });
}

const imageToHtml = firstImage();
imageToHtml.then((val) => {
  for (let i = 0; i < images.length; i++) {
    images[i].innerHTML = `<img src="${val[i]}" alt="Random Woman">`;
  }
});

// Slick slider
setTimeout(() => {
  $(document).ready(function () {
    $('.comentWrap').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    });
  });
}, 101);

//Bad variant. There should be pos. relftive and top = -innerHeight;
// Fixed section Every Day

// const everySection = document.querySelector('.everyDay');
// const shopSection = document.querySelector('.shopWrap');

// console.log(everySection);
// window.addEventListener('scroll', fixedPosition);
// function fixedPosition() {
//   let elemPosition = everySection.getBoundingClientRect();
//   let shopPosition = shopSection.getBoundingClientRect();
//   if (
//     (elemPosition.top <= this.window.innerHeight / 3 &&
//       elemPosition.top >= 0) ||
//     (elemPosition.bottom <= this.window.innerHeight &&
//       elemPosition.bottom >= this.window.innerHeight / 1.2)
//   ) {
//     everySection.classList.add('everyDayOnScrean');
//   } else {
//     everySection.classList.remove('everyDayOnScrean');
//   }
//   if (
//     (shopPosition.top <= this.window.innerHeight / 3 &&
//       shopPosition.top >= 0) ||
//     (shopPosition.bottom <= this.window.innerHeight &&
//       shopPosition.bottom >= this.window.innerHeight / 2)
//   ) {
//     everySection.classList.remove('everyDayOnScrean');
//   }
// }

const elemforScroll = document.querySelector('.forJs');
const contentWrap = document.querySelector('.contentWrap');
const everyButton = document.querySelector('.everyButton');
window.addEventListener('scroll', elemVisible);
function elemVisible() {
  let elemPosition = elemforScroll.getBoundingClientRect();
  if (
    elemPosition.top <= this.window.innerHeight / 2 &&
    elemPosition.top >= 0
  ) {
    contentWrap.classList.add('contentWrapVisible');
  }
  if (elemPosition.top < 0) {
    everyButton.classList.add('contentWrapVisible');
  }
  if (elemPosition.top >= this.window.innerHeight) {
    contentWrap.classList.remove('contentWrapVisible');
    everyButton.classList.remove('contentWrapVisible');
  }
}
elemVisible();
