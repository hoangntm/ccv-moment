let isToggle = false;
let isDark = false;
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let body = document.querySelector('body');
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let header = document.getElementById('header');

let menuItems = document.querySelectorAll('#navigation li a[href*="#"]');
let themeSwitch = document.querySelector('.theme-switch');
let languageSwitch = document.querySelector('.language-switch');
let imageItems = document.querySelectorAll('#moment .moment-item');

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

// Moment.
let momentTitle = document.getElementById('momentTitle');
let momentTitle1 = document.getElementById('momentTitle1');
let momentContent1 = document.getElementById('momentContent1');
let momentTitle2 = document.getElementById('momentTitle2');
let momentContent2 = document.getElementById('momentContent2');
let momentTitle3 = document.getElementById('momentTitle3');
let momentContent3 = document.getElementById('momentContent3');
let momentTitle4 = document.getElementById('momentTitle4');
let momentContent4 = document.getElementById('momentContent4');
let momentTitle5 = document.getElementById('momentTitle5');
let momentContent5 = document.getElementById('momentContent5');
let momentTitle6 = document.getElementById('momentTitle6');
let momentContent6 = document.getElementById('momentContent6');
let loadmoreBtn = document.getElementById('loadmore');

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
    "moment_title": "CCV Moment",
    "moment_title1": "Hold My Hand",
    "moment_content1": "- Thong: This bug is so hard to fix, can you hold my hand to motivate me to fix it?<br>- Tri: OK!🥰",
    "moment_title2": "Professional Dev",
    "moment_content2": "Sang: Fix 2 bugs at the same time!😎",
    "moment_title3": "LOL 🤣",
    "moment_content3": "- Hien: This is so funny!<br>- Nhat: Let's me check what is funny!",
    "moment_title4": "Before the Meeting!",
    "moment_content4": "Let's sefie before the meeting happen!💖",
    "moment_title5": "Do exercise",
    "moment_content5": "Exercise for health. 🏃‍♂️<br>(Why does Tri look so miserable? 😂) ",
    "moment_title6": "Women's Day💖",
    "moment_content6": "Small gift from CEO to women on International Women's Day. 🎁",
    "moment_title7": "Sleeping Beauty 😴",
    "moment_content7": "Take a short nap during the break in the middle of the day. ",
    "moment_title8": "Working Hard 😋",
    "moment_content8": "Working Hard 😋",
    "moment_title9": "3 eggs",
    "moment_content9": "3 eggs 😋",
    "moment_title10": "Visit DBS company.",
    "moment_content10": "Visit Delta Brains JSC company.",
    "moment_title11": "Japan Lotus (Pt.1)",
    "moment_content11": "Business trip in Japan Lotus. 👨‍✈️",
    "moment_title12": "Japan Lotus (Pt.2)",
    "moment_content12": "Business trip in Japan Lotus. 👨‍✈️",
    "moment_title13": "CEO's Birthday (Pt.1)",
    "moment_content13": "CEO's birthday 🎁🎈🎉",
    "moment_title14": "CEO's Birthday (Pt.2)",
    "moment_content14": "CEO's birthday 🎁🎈🎉",
    "moment_title15": "CEO's Birthday (Pt.3)",
    "moment_content15": "CEO's birthday 🎁🎈🎉",
    "moment_title16": "CEO's Birthday (Pt.4)",
    "moment_content16": "CEO's birthday 🎁🎈🎉",
    "moment_title17": "CEO's Birthday (Pt.5)",
    "moment_content17": "CEO's birthday 🎁🎈🎉",
    "moment_title18": "CEO's Birthday (Pt.6)",
    "moment_content18": "CEO's birthday 🎁🎈🎉",
    "moment_title19": "Travel to CanTho (Pt.1)",
    "moment_content19": "Travel to CanTho (Pt.1) 🧳✈🚢",
    "moment_title20": "Travel to CanTho (Pt.2)",
    "moment_content20": "Travel to CanTho (Pt.2) 🧳✈🚢",
    "moment_title21": "Travel to CanTho (Pt.3)",
    "moment_content21": "Travel to CanTho (Pt.3) 🧳✈🚢",
    "moment_title22": "Travel to CanTho (Pt.4)",
    "moment_content22": "Travel to CanTho (Pt.4) 🧳✈🚢",
    "moment_title23": "Travel to CanTho (Pt.5)",
    "moment_content23": "Travel to CanTho (Pt.5) 🧳✈🚢",
    "moment_title24": "Travel to CanTho (Pt.6)",
    "moment_content24": "Travel to CanTho (Pt.6) 🧳✈🚢",
    "moment_title25": "Go Eat And Drink (Pt.1)",
    "moment_content25": "After working hard, we decide to go eat and drink! 🍻🥂",
    "moment_title26": "Go Eat And Drink (Pt.2)",
    "moment_content26": "After working hard, we decide to go eat and drink! 🍻🥂",
    "moment_title27": "Year End Party 2020 (Pt.1)",
    "moment_content27": "At year end party, we had happy moments! 🍻🥂",
    "moment_title28": "Year End Party 2020 (Pt.2)",
    "moment_content28": "At year end party, we had happy moments! 🍻🥂",
    "moment_title29": "Mid-Autumn Festival",
    "moment_content29": "Mid-Autumn Festival 🍪",
    "loadmore_moment": `Load More<i class="fas fa-arrow-right"></i>`,
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
    "moment_title": "CCVモーメント",
    "moment_title1": "私の手を握って",
    "moment_content1": "・Thongさん: このバグは修正が非常に難しいので、手を握って修正するように動機付けてもらえますか？<br>・Triさん: もちろん！!🥰",
    "moment_title2": "プロの開発者",
    "moment_content2": "Sangさん: 2つのバグを同時に修正できます！😎",
    "moment_title3": "LOL 🤣",
    "moment_content3": "・Hienさん: とっても面白いね！<br>・Nhatさん: 何がおもしろいのかチェックしてみよう！",
    "moment_title4": "会議の前に！",
    "moment_content4": "会議が始まる前に自分撮りしましょう！💖",
    "moment_title5": "運動をする",
    "moment_content5": "健康のための運動。🏃‍♂️<br>（なぜTriさんはとても惨めに見えるのですか？😂）",
    "moment_title6": "女性の日💖",
    "moment_content6": "国際女性デーのCEOから女性へのささやかな贈り物。🎁",
    "moment_title7": "眠れる森の美女 😴",
    "moment_content7": "日中の休憩中に短い昼寝をします。 ",
    "moment_title8": "頑張る 😋",
    "moment_content8": "頑張る 😋",
    "moment_title9": "卵3個",
    "moment_content9": "卵3個 😋",
    "moment_title10": "DBS会社にアクセスしてください。",
    "moment_content10": "Delta BrainsJSC会社にアクセスしてください。",
    "moment_title11": "ジャパンロータス（パート1）",
    "moment_content11": "Japan Lotusでの出張。 👨‍✈️",
    "moment_title12": "ジャパンロータス（パート2）",
    "moment_content12": "Japan Lotusでの出張。 👨‍✈️",
    "moment_title13": "CEOの誕生日 (パート1)",
    "moment_content13": "CEOの誕生日 🎁🎈🎉",
    "moment_title14": "CEOの誕生日 (パート2)",
    "moment_content14": "CEOの誕生日 🎁🎈🎉",
    "moment_title15": "CEOの誕生日 (パート3)",
    "moment_content15": "CEOの誕生日 🎁🎈🎉",
    "moment_title16": "CEOの誕生日 (パート4)",
    "moment_content16": "CEOの誕生日 🎁🎈🎉",
    "moment_title17": "CEOの誕生日 (パート5)",
    "moment_content17": "CEOの誕生日 🎁🎈🎉",
    "moment_title18": "CEOの誕生日 (パート6)",
    "moment_content18": "CEOの誕生日 🎁🎈🎉",
    "moment_title19": "CanThoへの旅行  (パート1)",
    "moment_content19": "CanThoへの旅行  (パート1) 🧳✈🚢",
    "moment_title20": "CanThoへの旅行  (パート2)",
    "moment_content20": "CanThoへの旅行  (パート2) 🧳✈🚢",
    "moment_title21": "CanThoへの旅行  (パート3)",
    "moment_content21": "CanThoへの旅行  (パート3) 🧳✈🚢",
    "moment_title22": "CanThoへの旅行  (パート4)",
    "moment_content22": "CanThoへの旅行  (パート4) 🧳✈🚢",
    "moment_title23": "CanThoへの旅行  (パート5)",
    "moment_content23": "CanThoへの旅行  (パート5) 🧳✈🚢",
    "moment_title24": "CanThoへの旅行  (パート6)",
    "moment_content24": "CanThoへの旅行  (パート6) 🧳✈🚢",
    "moment_title25": "食べて飲む  (パート1)",
    "moment_content25": "一生懸命頑張った後、食べに行くことにしました！ 🍻🥂",
    "moment_title26": "食べて飲む  (パート2)",
    "moment_content26": "一生懸命頑張った後、食べに行くことにしました！ 🍻🥂",
    "moment_title27": "年末パーティー2020 (パート1)",
    "moment_content27": "年末のパーティーで、私たちは幸せな瞬間を過ごしました！ 🍻🥂",
    "moment_title28": "年末パーティー2020 (パート2)",
    "moment_content28": "年末のパーティーで、私たちは幸せな瞬間を過ごしました！ 🍻🥂",
    "moment_title29": "半ば秋祭り",
    "moment_content29": "半ば秋祭り 🍪",
    "loadmore_moment": `もっと読み込む<i class="fas fa-arrow-right"></i>`,
    "banner_text": "<span>これが</span><br>CCVファミリー<br><span>の</span><br>思い出に残る思い出です",
    "banner_btn": "私たちのモーメント",
    "about_me": "私について",
    "about_me_content": "私の名前は、CCVファミリーのフロントエンド開発者であるNguyen Tran Minh Hoang（Noir Nguyen）です。",
    "quick_link": "クイックリンク",
    "address": "住所",
    "footer_text": "®Noir Nguyen製。 全著作権所有。 ",
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
    momentTitle.textContent = data.japanese.moment_title;
    momentTitle1.textContent = data.japanese.moment_title1;
    momentContent1.innerHTML = data.japanese.moment_content1;
    momentTitle2.textContent = data.japanese.moment_title2;
    momentContent2.innerHTML = data.japanese.moment_content2;
    momentTitle3.textContent = data.japanese.moment_title3;
    momentContent3.innerHTML = data.japanese.moment_content3;
    momentTitle4.textContent = data.japanese.moment_title4;
    momentContent4.innerHTML = data.japanese.moment_content4;
    momentTitle5.textContent = data.japanese.moment_title5;
    momentContent5.innerHTML = data.japanese.moment_content5;
    momentTitle6.textContent = data.japanese.moment_title6;
    momentContent6.innerHTML = data.japanese.moment_content6;
    momentTitle7.textContent = data.japanese.moment_title7;
    momentContent7.innerHTML = data.japanese.moment_content7;
    momentTitle8.textContent = data.japanese.moment_title8;
    momentContent8.innerHTML = data.japanese.moment_content8;
    momentTitle9.textContent = data.japanese.moment_title9;
    momentContent9.innerHTML = data.japanese.moment_content9;
    momentTitle10.textContent = data.japanese.moment_title10;
    momentContent10.innerHTML = data.japanese.moment_content10;
    momentTitle11.textContent = data.japanese.moment_title11;
    momentContent11.innerHTML = data.japanese.moment_content11;
    momentTitle12.textContent = data.japanese.moment_title12;
    momentContent12.innerHTML = data.japanese.moment_content12;
    momentTitle13.textContent = data.japanese.moment_title13;
    momentContent13.innerHTML = data.japanese.moment_content13;
    momentTitle14.textContent = data.japanese.moment_title14;
    momentContent14.innerHTML = data.japanese.moment_content14;
    momentTitle15.textContent = data.japanese.moment_title15;
    momentContent15.innerHTML = data.japanese.moment_content15;
    momentTitle16.textContent = data.japanese.moment_title16;
    momentContent16.innerHTML = data.japanese.moment_content16;
    momentTitle17.textContent = data.japanese.moment_title17;
    momentContent17.innerHTML = data.japanese.moment_content17;
    momentTitle18.textContent = data.japanese.moment_title18;
    momentContent18.innerHTML = data.japanese.moment_content18;
    momentTitle19.textContent = data.japanese.moment_title19;
    momentContent19.innerHTML = data.japanese.moment_content19;
    momentTitle20.textContent = data.japanese.moment_title20;
    momentContent20.innerHTML = data.japanese.moment_content20;
    momentTitle21.textContent = data.japanese.moment_title21;
    momentContent21.innerHTML = data.japanese.moment_content21;
    momentTitle22.textContent = data.japanese.moment_title22;
    momentContent22.innerHTML = data.japanese.moment_content22;
    momentTitle23.textContent = data.japanese.moment_title23;
    momentContent23.innerHTML = data.japanese.moment_content23;
    momentTitle24.textContent = data.japanese.moment_title24;
    momentContent24.innerHTML = data.japanese.moment_content24;
    momentTitle25.textContent = data.japanese.moment_title25;
    momentContent25.innerHTML = data.japanese.moment_content25;
    momentTitle26.textContent = data.japanese.moment_title26;
    momentContent26.innerHTML = data.japanese.moment_content26;
    momentTitle27.textContent = data.japanese.moment_title27;
    momentContent27.innerHTML = data.japanese.moment_content27;
    momentTitle28.textContent = data.japanese.moment_title28;
    momentContent28.innerHTML = data.japanese.moment_content28;
    momentTitle29.textContent = data.japanese.moment_title29;
    momentContent29.innerHTML = data.japanese.moment_content29;
    loadmoreBtn.innerHTML = data.japanese.loadmore_moment;
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
    momentTitle.textContent = data.english.moment_title;
    momentTitle1.textContent = data.english.moment_title1;
    momentContent1.innerHTML = data.english.moment_content1;
    momentTitle2.textContent = data.english.moment_title2;
    momentContent2.innerHTML = data.english.moment_content2;
    momentTitle3.textContent = data.english.moment_title3;
    momentContent3.innerHTML = data.english.moment_content3;
    momentTitle4.textContent = data.english.moment_title4;
    momentContent4.innerHTML = data.english.moment_content4;
    momentTitle5.textContent = data.english.moment_title5;
    momentContent5.innerHTML = data.english.moment_content5;
    momentTitle6.textContent = data.english.moment_title6;
    momentContent6.innerHTML = data.english.moment_content6;
    momentTitle7.textContent = data.english.moment_title7;
    momentContent7.innerHTML = data.english.moment_content7;
    momentTitle8.textContent = data.english.moment_title8;
    momentContent8.innerHTML = data.english.moment_content8;
    momentTitle9.textContent = data.english.moment_title9;
    momentContent9.innerHTML = data.english.moment_content9;
    momentTitle10.textContent = data.english.moment_title10;
    momentContent10.innerHTML = data.english.moment_content10;
    momentTitle11.textContent = data.english.moment_title11;
    momentContent11.innerHTML = data.english.moment_content11;
    momentTitle12.textContent = data.english.moment_title12;
    momentContent12.innerHTML = data.english.moment_content12;
    momentTitle13.textContent = data.english.moment_title13;
    momentContent13.innerHTML = data.english.moment_content13;
    momentTitle14.textContent = data.english.moment_title14;
    momentContent14.innerHTML = data.english.moment_content14;
    momentTitle15.textContent = data.english.moment_title15;
    momentContent15.innerHTML = data.english.moment_content15;
    momentTitle16.textContent = data.english.moment_title16;
    momentContent16.innerHTML = data.english.moment_content16;
    momentTitle17.textContent = data.english.moment_title17;
    momentContent17.innerHTML = data.english.moment_content17;
    momentTitle18.textContent = data.english.moment_title18;
    momentContent18.innerHTML = data.english.moment_content18;
    momentTitle19.textContent = data.english.moment_title19;
    momentContent19.innerHTML = data.english.moment_content19;
    momentTitle20.textContent = data.english.moment_title20;
    momentContent20.innerHTML = data.english.moment_content20;
    momentTitle21.textContent = data.english.moment_title21;
    momentContent21.innerHTML = data.english.moment_content21;
    momentTitle22.textContent = data.english.moment_title22;
    momentContent22.innerHTML = data.english.moment_content22;
    momentTitle23.textContent = data.english.moment_title23;
    momentContent23.innerHTML = data.english.moment_content23;
    momentTitle24.textContent = data.english.moment_title24;
    momentContent24.innerHTML = data.english.moment_content24;
    momentTitle25.textContent = data.english.moment_title25;
    momentContent25.innerHTML = data.english.moment_content25;
    momentTitle26.textContent = data.english.moment_title26;
    momentContent26.innerHTML = data.english.moment_content26;
    momentTitle27.textContent = data.english.moment_title27;
    momentContent27.innerHTML = data.english.moment_content27;
    momentTitle28.textContent = data.english.moment_title28;
    momentContent28.innerHTML = data.english.moment_content28;
    momentTitle29.textContent = data.english.moment_title29;
    momentContent29.innerHTML = data.english.moment_content29;
    loadmoreBtn.innerHTML = data.english.loadmore_moment;
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

let currentItems = 5;
loadmore.addEventListener('click', (e) => {
  const elementList = [...document.querySelectorAll('.moment-container .moment-item')];

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
    bird2.style.top = value * -0.15 + 'px';
    bird2.style.left = value * -0.5 + '%';
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