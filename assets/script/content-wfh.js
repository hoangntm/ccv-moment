let isToggle = false;
let isDark = false;
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let ceo = document.getElementById('ceo');
let base = document.getElementById('base');
let header = document.getElementById('header');

let menuItems = document.querySelectorAll('#navigation li a[href*="#"]');
let themeSwitch = document.querySelector('.theme-switch');
let languageSwitch = document.querySelector('.language-switch');
let body = document.querySelector('body');
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let imageItems = document.querySelectorAll('#moment .event-item');
const loading = document.querySelector('.loading');
const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const loadmore = document.querySelector('#loadmore');

// Header.
let text = document.getElementById('text');
let btn = document.getElementById('btn');
btn.href = "#moment";
let title = document.querySelector('title');
let logo = document.querySelector('.logo');
let rheader1 = document.getElementById('rheader1');
let rheader2 = document.getElementById('rheader2');
let rheader3 = document.getElementById('rheader3');
let rheader4 = document.getElementById('rheader4');
let rheader5 = document.getElementById('rheader5');
let rheader6 = document.getElementById('rheader6');

// Event.
let eventTitle = document.getElementById('eventTitle');
let eventContent = document.getElementById('eventContent');

// Footer.
let footerAboutMeLabel = document.getElementById('footerAboutMeLabel');
let footerAboutMe = document.getElementById('footerAboutMe');
let footerLinkLabel = document.getElementById('footerLinkLabel');
let footerLink1 = document.getElementById('footerLink1');
let footerLink2 = document.getElementById('footerLink2');
let footerLink3 = document.getElementById('footerLink3');
let footerLink4 = document.getElementById('footerLink4');
let footerLink5 = document.getElementById('footerLink5');
let footerLink6 = document.getElementById('footerLink6');
let footerAddressLabel = document.getElementById('footerAddressLabel');
let footerBottomLabel = document.getElementById('footerBottomLabel');

var data = {
  "english": {
    "main_title": "CCV Family's Moments",
    "left_header": "CCV Moments",
    "right_header_01": "Home",
    "right_header_02": "About",
    "right_header_03": "Timeline",
    "right_header_04": "Bulletin",
    "right_header_05": "Moment",
    "right_header_06": "Contact",
    "event_title": "Event to share photos of the working corner when WFH",
    "event_content": "Ho Chi Minh City is going through a difficult period because of the covid 19 epidemic.<br>That makes our company work from home.<br>This event was created for the purpose of sharing the workspace of each employee in the company.<br>Everyone, please share your workspace and vote.<br>The person with the most votes can receive an extremely valuable prize that is 1 cup of Phuc Long milk tea awarded by HoangNTM.",
    "banner_text": "<span>These are the</span><br>memorable moments<br><span>of the</span><br>CCV family",
    "banner_btn": "Our Moments",
    "about_me": "About me",
    "about_me_content": "My name is Nguyen Tran Minh Hoang (Noir Nguyen), a front-end developer of CCV Family.",
    "quick_link": "Quick Links",
    "address": "Address",
    "footer_text": "Made by ® Noir Nguyen. All Rights Reserved.",
  },
  "japanese": {
    "main_title": "CCVファミリーのモーメント",
    "left_header": "CCVモーメント",
    "right_header_01": "ホーム",
    "right_header_02": "情報",
    "right_header_03": "タイムライン",
    "right_header_04": "通知",
    "right_header_05": "モーメント",
    "right_header_06": "コンタクト",
    "event_title": "WFH時に作業コーナーの写真を共有するイベント",
    "event_content": "ホーチミン市は、19の流行により、困難な時期を迎えています。<br>それは私達の会社を自宅で仕事にします。<br>このイベントは、社内の各従業員のワークスペースを共有することを目的として作成されました。<br>皆さん、ワークスペースを共有して投票してください。<br>投票数が最も多い人は、HoangNTMから授与されたPhucLongミルクティー1カップという非常に貴重な賞品を受け取ることができます。",
    "banner_text": "<span>これが</span><br>CCVファミリー<br><span>の</span><br>思い出に残る思い出です",
    "banner_btn": "私たちのモーメント",
    "about_me": "私について",
    "about_me_content": "私の名前は、CCVファミリーのフロントエンド開発者であるNguyen Tran Minh Hoang（Noir Nguyen）です。",
    "quick_link": "クイックリンク",
    "address": "住所",
    "footer_text": "®Noir Nguyen製。 全著作権所有。 ",
  }
}

// Loadmore.
let currentItems = 5;
loadmore.addEventListener('click', (e) => {
  const elementList = [...document.querySelectorAll('.event-container .event-item')];

  loading.classList.toggle('active');
  disableScroll();
  setTimeout(function () {
    for (let i = currentItems; i < currentItems + 4; i++) {
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
      }
    }
    currentItems += 3;

    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
      loadmore.style.display = 'none';
    }
    loading.classList.toggle('active');
    enableScroll();
  }, 2000);
})

// Click on menu item.
for (let i = 0; i < menuItems.length; i++) {
  let menuItem = menuItems[i];
  menuItem.onclick = function () {
    if (isToggle === true) {
      toggleMenu.classList.toggle('active');
      navigation.classList.toggle('active');
      document.body.classList.toggle('active');
      enableScroll();
      isToggle = false;
    }
  }
}

// Toggle menu click.
toggleMenu.onclick = function () {
  isToggle = !isToggle;
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
  document.body.classList.toggle('active');
  if (isToggle) {
    disableScroll();
  } else {
    enableScroll();
  }
}

// Process move background when scroll.
window.addEventListener('scroll', function () {
  let value = window.scrollY;
  if (value < 800) {
    text.style.top = 50 + value * -0.15 + '%';
    bird1.style.top = value * -0.15 + 'px';
    bird1.style.left = value * 0.2 + '%';
    bird2.style.bottom = value * -0.5 + 'px';
    bird2.style.left = value * -0.5 + '%';
    ceo.style.top = value * -0.2 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * -0.5 + 'px';
  }
  if (value > 400) {
    btn.classList.add('totop');
    btn.innerHTML = `<i class="fas fa-arrow-up"></i>`;
    btn.href = "#home";
  } else {
    btn.classList.remove('totop');
    if (body.classList.contains('jp')) {
      btn.innerHTML = data.japanese.banner_btn;
    } else {
      btn.innerHTML = data.english.banner_btn;
    }
    btn.href = "#moment";
  }
})

// Theme switch.
themeSwitch.onclick = function () {
  body.classList.toggle('night-mode');
  isDark = !isDark;
  if (isDark) {
    stars.src="/assets/images/stars.png";
    moon.src="/assets/images/moon.png";
  } else {
    stars.src="/assets/images/cloud.png"
    moon.src="/assets/images/sun.png";
  }
}

// Language switch.
languageSwitch.onclick = function () {
  body.classList.toggle('jp');
  if (body.classList.contains('jp')) {
    title.textContent = data.japanese.main_title;
    logo.textContent = data.japanese.left_header;
    rheader1.textContent = data.japanese.right_header_01;
    rheader2.textContent = data.japanese.right_header_02;
    rheader3.textContent = data.japanese.right_header_03;
    rheader4.textContent = data.japanese.right_header_04;
    rheader5.textContent = data.japanese.right_header_05;
    rheader6.textContent = data.japanese.right_header_06;
    text.innerHTML = data.japanese.banner_text;
    btn.textContent = data.japanese.banner_btn;
    eventTitle.textContent = data.japanese.event_title;
    eventContent.innerHTML = data.japanese.event_content;
    footerAboutMeLabel.textContent = data.japanese.about_me;
    footerAboutMe.textContent = data.japanese.about_me_content;
    footerLinkLabel.textContent = data.japanese.quick_link;
    footerLink1.textContent = data.japanese.right_header_01;
    footerLink2.textContent = data.japanese.right_header_02;
    footerLink3.textContent = data.japanese.right_header_03;
    footerLink4.textContent = data.japanese.right_header_04;
    footerLink5.textContent = data.japanese.right_header_05;
    footerLink6.textContent = data.japanese.right_header_06;
    footerAddressLabel.textContent = data.japanese.address;
    footerBottomLabel.textContent = data.japanese.footer_text;
  } else {
    title.textContent = data.english.main_title;
    logo.textContent = data.english.left_header;
    rheader1.textContent = data.english.right_header_01;
    rheader2.textContent = data.english.right_header_02;
    rheader3.textContent = data.english.right_header_03;
    rheader4.textContent = data.english.right_header_04;
    rheader5.textContent = data.english.right_header_05;
    rheader6.textContent = data.english.right_header_06;
    text.innerHTML = data.english.banner_text;
    btn.textContent = data.english.banner_btn;
    eventTitle.textContent = data.english.event_title;
    eventContent.innerHTML = data.english.event_content;
    footerAboutMeLabel.textContent = data.english.about_me;
    footerAboutMe.textContent = data.english.about_me_content;
    footerLinkLabel.textContent = data.english.quick_link;
    footerLink1.textContent = data.english.right_header_01;
    footerLink2.textContent = data.english.right_header_02;
    footerLink3.textContent = data.english.right_header_03;
    footerLink4.textContent = data.english.right_header_04;
    footerLink5.textContent = data.english.right_header_05;
    footerLink6.textContent = data.english.right_header_06;
    footerAddressLabel.textContent = data.english.address;
    footerBottomLabel.textContent = data.english.footer_text;
  }
}

// Click on image item.
for (let i = 0; i < imageItems.length; i++) {
  let imageItem = imageItems[i];
  imageItem.onclick = function () {
    imageItem.classList.toggle('active');
    if (imageItem.classList.contains('active')) {
      disableScroll();
    } else {
      enableScroll();
    }
  }
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}