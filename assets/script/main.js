let isToggle = false;
let isDark = false;
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let ceo = document.getElementById('ceo');
let base = document.getElementById('base');
let header = document.getElementById('header');

let menuItems = document.querySelectorAll('#navigation li a[href*="#"]');
let imageItems = document.querySelectorAll('#moment .moment-item');
let themeSwitch = document.querySelector('.theme-switch');
let languageSwitch = document.querySelector('.language-switch');
let body = document.querySelector('body');
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
const modal = document.querySelector('.modal');
const loading = document.querySelector('.loading');
const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

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

// Info.
let infoTitle = document.getElementById('infoTitle');
let infoContent = document.getElementById('infoContent');

// Timeline.
let timelineTitle = document.getElementById('timelineTitle');
let timelineTitle1 = document.getElementById('timelineTitle1');
let timelineContent1 = document.getElementById('timelineContent1');
let timelineTime1 = document.getElementById('timelineTime1');
let timelineTitle2 = document.getElementById('timelineTitle2');
let timelineContent2 = document.getElementById('timelineContent2');
let timelineTime2 = document.getElementById('timelineTime2');
let timelineTitle3 = document.getElementById('timelineTitle3');
let timelineContent3 = document.getElementById('timelineContent3');
let timelineTime3 = document.getElementById('timelineTime3');
let timelineTitle4 = document.getElementById('timelineTitle4');
let timelineContent4 = document.getElementById('timelineContent4');
let timelineTime4 = document.getElementById('timelineTime4');
let timelineTitle5 = document.getElementById('timelineTitle5');
let timelineContent5 = document.getElementById('timelineContent5');
let timelineTime5 = document.getElementById('timelineTime5');
let timelineTitle6 = document.getElementById('timelineTitle6');
let timelineContent6 = document.getElementById('timelineContent6');
let timelineTime6 = document.getElementById('timelineTime6');
let timelineTitle7 = document.getElementById('timelineTitle7');
let timelineContent7 = document.getElementById('timelineContent7');
let timelineTime7 = document.getElementById('timelineTime7');

// Noti.
let notiTitle = document.getElementById('notiTitle');
let notiTitle1 = document.getElementById('notiTitle1');
let notiContent1 = document.getElementById('notiContent1');
let notiDate1 = document.getElementById('notiDate1');
let notiMore1 = document.getElementById('notiMore1');
let notiTitle2 = document.getElementById('notiTitle2');
let notiContent2 = document.getElementById('notiContent2');
let notiDate2 = document.getElementById('notiDate2');
let notiMore2 = document.getElementById('notiMore2');
let notiTitle3 = document.getElementById('notiTitle3');
let notiContent3 = document.getElementById('notiContent3');
let notiDate3 = document.getElementById('notiDate3');
let notiMore3 = document.getElementById('notiMore3');
let viewmoreNotiBtn = document.getElementById('more-notification');

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
let momentMoreBtn = document.getElementById('momentMoreBtn');

// Contact.
let contactTitleMain = document.getElementById('contactTitleMain');
let contactTitleSub = document.getElementById('contactTitleSub');
let firstNameLabel = document.getElementById('firstNameLabel');
let lastNameLabel = document.getElementById('lastNameLabel');
let emailLabel = document.getElementById('emailLabel');
let mobileLabel = document.getElementById('mobileLabel');
let contentLabel = document.getElementById('contentLabel');
let sendBtn = document.getElementById('send-btn');

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

// Modal.
let underConstruction = document.getElementById('underConstruction');
let closeBtn = document.getElementById('btn-close');

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
    "banner_text": "<span>These are the</span><br>memorable moments<br><span>of the</span><br>CCV family",
    "banner_btn": "Our Moments",
    "info_title": "About CCV",
    "info_content": `<strong>CARE CONNECT VIETNAM COMPANY LIMITED (CCV CO., LTD.)</strong> established in September 2019 with 100%
    foreign-invested capital from the parent company <strong>CARE CONNECT JAPAN INC.</strong><br><br>
    Our main service is to develop <strong>CARE CONNECT JAPAN INC.</strong>’s the leading product named
    <strong>CAREKARTE</strong> - A software for managing and recording data in the nursing and welfare sectors.
    Additionally, we also support and employ <strong>CAREKARTE</strong> for customers who are nursing care service
    corporation in Vietnam.<br><br>
    Our biggest goal is to recruit Vietnamese talented candidates working in the software development sector for the
    purpose of coming along with us and meeting customers’ need and expect in Japan and Vietnam market. To achieve
    this objective and contribute to the society, all staffs are working with the best effort everyday to enhance
    the quality of our products and services.<br><br>
    It’s our pleasure to support and cooperate with you - our valued customers.`,
    "timeline_title": "CCV Timeline",
    "timeline_time_1": "September 2019",
    "timeline_title_1": "Begin of CCV",
    "timeline_content_1": "September 20, 2019, Care Connect Japan (CCJ) is licensed, officially started up in Vietnam with the name Care Connect Vietnam (CCV).",
    "timeline_time_2": "October 2019",
    "timeline_title_2": "Company establishment ceremony",
    "timeline_content_2": "October 4, 2019, the company establishment ceremony was held.",
    "timeline_time_3": "January 2020",
    "timeline_title_3": "The first year of covid",
    "timeline_content_3": "January 23, 2020, Vietnam detected the first case of COVID-19.<br>Pandemic causes many difficulties for people.",
    "timeline_time_4": "April 2020",
    "timeline_title_4": "CCV Family's first WFH",
    "timeline_content_4": "For the first time at CCV Family's WFH, everyone will work from home (Ho Chi Minh City) from April 1, 2020 to the end of April 15, 2020.<br>April 24, 2020, everyone returned to the company to work.",
    "timeline_time_5": "May 2021",
    "timeline_title_5": "Delta mutation appeared in Vietnam",
    "timeline_content_5": "The Delta variant was first detected in Ho Chi Minh City on May 18, 2021 with 2 cases at Deloitte Vietnam Co., Ltd (District 3).",
    "timeline_time_6": "June 2021",
    "timeline_title_6": "Donate to COVID-19 vaccine fund",
    "timeline_content_6": "June 30, 2021, Director Saito Shigeo, representing Care Connect Vietnam Company, joined hands and contributed a part to the Vietnam vaccine fund.<br>Hopefully each of us will be vaccinated as soon as possible.",
    "timeline_time_7": "July 2021",
    "timeline_title_7": "CCV Family's second WFH",
    "timeline_content_7": "July 2, 2021, the whole company continued to perform WFH at home.",
    "noti_title": "Bulletin Board",
    "noti_title1": `<i class="fas fa-info-circle"></i> Event share working angle when WFH`,
    "noti_content1": "The event to share photos of the working corner when WFH to receive a valuable prize (1 cup of Phuc Long milk tea from HoangNTM)!",
    "noti_date1": "26/08/2021",
    "noti_title2": `<i class="fas fa-info-circle"></i> National Day Holiday (02/09/2021)`,
    "noti_content2": "On the occasion of National Day 2/9, all employees in the Company are entitled to the following holidays:<br>- From: September 2, 2021<br>- Until date: September 5, 2021",
    "noti_date2": "18/08/2021",
    "noti_title3": `<i class="fas fa-rss-square"></i> Donate to COVID-19 vaccine fund`,
    "noti_content3": "Yesterday, June 30, 2021, Director Saito Shigeo, representing Care Connect Vietnam Company, joined hands and contributed a part to the Vietnam vaccine fund. Hopefully each of us will be vaccinated as soon as possible.",
    "noti_date3": "01/07/2021",
    "noti_more": "More infomation...",
    "more_info": `More Information<i class="fas fa-arrow-right"></i>`,
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
    "more_moment": `More CCV Family's Moments<i class="fas fa-arrow-right"></i>`,
    "contact_title_main": "Want to be a part of CCV Family?",
    "contact_title_sub": "Contact Us!",
    "first_name_label": "First Name",
    "last_name_label": "Last Name",
    "email_label": "Email",
    "mobile_label": "Mobile",
    "content_label": "Type your message here...",
    "send_btn": `Send<i class="far fa-paper-plane"></i>`,
    "about_me": "About me",
    "about_me_content": "My name is Nguyen Tran Minh Hoang (Noir Nguyen), a front-end developer of CCV Family.",
    "quick_link": "Quick Links",
    "address": "Address",
    "footer_text": "Made by ® Noir Nguyen. All Rights Reserved.",
    "under_construction": "Under Construction",
    "btn_close": `Close<i class="fas fa-times"></i>`,
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
    "banner_text": "<span>これが</span><br>CCVファミリー<br><span>の</span><br>思い出に残る思い出です",
    "banner_btn": "私たちのモーメント",
    "info_title": "CCVについて",
    "info_content": `2019年9月に設立された<strong>CARECONNECT VIETNAM COMPANY LIMITED（CCV CO。、LTD。）</strong>は、親会社である<strong>CARE CONNECT JAPAN INC。</strong><br><br>
    私たちの主なサービスは、<strong>CARE CONNECT JAPAN INC。</strong>の主要製品である<strong>CAREKARTE</strong>を開発することです。これは看護および福祉部門のデータを管理および記録するためのソフトウェアです。 さらに、ベトナムの介護サービス会社であるお客様のために、<strong>CAREKARTE</strong>をサポートおよび採用しています。<br><br>
    私たちの最大の目標は、私たちと一緒に来て、日本とベトナム市場での顧客のニーズと期待に応えることを目的として、ソフトウェア開発部門で働くベトナム人の才能ある候補者を募集することです。 この目標を達成し、社会に貢献するために、すべてのスタッフが日々最善を尽くして製品とサービスの品質を向上させています。<br><br>
    私たちの大切なお客様であるあなたをサポートし、協力することは私たちの喜びです。 `,
    "timeline_title": "CCVタイムライン",
    "timeline_time_1": "2019年09月",
    "timeline_title_1": "CCVの始まり",
    "timeline_content_1": "2019年09月20日、Care Connect Japan（CCJ）は認可を受けており、Care Connect Vietnam（CCV）という名前でベトナムで正式に設立されました。 ",
    "timeline_time_2": "2019年10月",
    "timeline_title_2": "会社設立式",
    "timeline_content_2": "2019年10月4日、会社設立式が行われました。",
    "timeline_time_3": "2020年01月",
    "timeline_title_3": "Covidの最初の年",
    "timeline_content_3": "2020年1月23日、ベトナムはCOVID-19の最初の症例を検出しました。<br>パンデミックは人々に多くの困難を引き起こします。",
    "timeline_time_4": "2020年04月",
    "timeline_title_4": "CCVファミリーの最初のWFH",
    "timeline_content_4": "CCVファミリーのWFHで初めて、2020年4月1日から2020年4月15日まで、全員が自宅（ホーチミン市）で仕事をします。<br>2020年4月24日、全員が会社に戻って仕事をします。 ",
    "timeline_time_5": "2021年05月 ",
    "timeline_title_5": "デルタ突然変異がベトナムに現れた",
    "timeline_content_5": "デルタ変異体は、2021年5月18日にホーチミン市で最初に検出され、デロイトベトナム株式会社（3区）で2例が検出されました。",
    "timeline_time_6": "2021年06月 ",
    "timeline_title_6": "COVID-19ワクチン基金に寄付する",
    "timeline_content_6": "2021年6月30日、ケアコネクトベトナムカンパニーを代表する斉藤茂雄取締役が参加し、ベトナムワクチン基金に寄付しました。 <br>うまくいけば、私たち一人一人ができるだけ早くワクチン接種を受けるでしょう。",
    "timeline_time_7": "2021年07月 ",
    "timeline_title_7": "CCVファミリーの2番目のWFH",
    "timeline_content_7": "2021年7月2日、全社が自宅でWFHを継続して実施しました。",
    "noti_title": "掲示板",
    "noti_title1": `<i class="fas fa-info-circle"></i> WFH時のイベントシェア作業角度`,
    "noti_content1": "WFHが貴重な賞品（HoangNTMからのPhuc Longミルクティー1カップ）を受け取るときに、作業コーナーの写真を共有するイベント！",
    "noti_date1": "2021年8月26日",
    "noti_title2": `<i class="fas fa-info-circle"></i> 建国記念日（2021年2月9日）`,
    "noti_content2": "建国記念日2/9の際、会社のすべての従業員は次の休日を受け取る権利があります。<br>・差出人：2021年9月2日<br>・日付まで：2021年9月5日",
    "noti_date2": "2021年8月18日",
    "noti_title3": `<i class="fas fa-rss-square"></i> COVID-19ワクチン基金に寄付する`,
    "noti_content3": "昨日、2021年6月30日、ケアコネクトベトナムカンパニーを代表する斉藤茂雄取締役が参加し、ベトナムワクチン基金に寄付しました。 うまくいけば、私たち一人一人ができるだけ早くワクチン接種を受けるでしょう。",
    "noti_date3": "2021年1月7日",
    "noti_more": "詳細表示...",
    "more_info": `詳細表示<i class="fas fa-arrow-right"></i>`,
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
    "more_moment": `CCVモーメントの詳細表示<i class="fas fa-arrow-right"></i>`,
    "contact_title_main": "CCVファミリーの一員になりたいですか？",
    "contact_title_sub": "私たちと連絡を取ってください！",
    "first_name_label": "名",
    "last_name_label": "苗字",
    "email_label": "メール",
    "mobile_label": "電話番号",
    "content_label": "ここにメッセージを入力してください...",
    "send_btn": `送信<i class="far fa-paper-plane"></i>`,
    "about_me": "私について",
    "about_me_content": "私の名前は、CCVファミリーのフロントエンド開発者であるNguyen Tran Minh Hoang（Noir Nguyen）です。",
    "quick_link": "クイックリンク",
    "address": "住所",
    "footer_text": "®Noir Nguyen製。 全著作権所有。 ",
    "under_construction": "開発中",
    "btn_close": `閉じる<i class="fas fa-times"></i>`,
  }
}

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

// Theme switch.
themeSwitch.onclick = function () {
  body.classList.toggle('night-mode');
  isDark = !isDark;
  if (isDark) {
    stars.src = "/assets/images/stars.png";
    moon.src = "/assets/images/moon.png";
  } else {
    stars.src = "/assets/images/cloud.png"
    moon.src = "/assets/images/sun.png";
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
    infoTitle.textContent = data.japanese.info_title;
    infoContent.innerHTML = data.japanese.info_content;
    timelineTitle.textContent = data.japanese.timeline_title;
    timelineTitle1.textContent = data.japanese.timeline_title1;
    timelineContent1.innerHTML = data.japanese.timeline_content_1;
    timelineTime1.textContent = data.japanese.timeline_time_1;
    timelineTitle2.textContent = data.japanese.timeline_title2;
    timelineContent2.innerHTML = data.japanese.timeline_content_2;
    timelineTime2.textContent = data.japanese.timeline_time_2;
    timelineTitle3.textContent = data.japanese.timeline_title3;
    timelineContent3.innerHTML = data.japanese.timeline_content_3;
    timelineTime3.textContent = data.japanese.timeline_time_3;
    timelineTitle4.textContent = data.japanese.timeline_title4;
    timelineContent4.innerHTML = data.japanese.timeline_content_4;
    timelineTime4.textContent = data.japanese.timeline_time_4;
    timelineTitle5.textContent = data.japanese.timeline_title5;
    timelineContent5.innerHTML = data.japanese.timeline_content_5;
    timelineTime5.textContent = data.japanese.timeline_time_5;
    timelineTitle6.textContent = data.japanese.timeline_title6;
    timelineContent6.innerHTML = data.japanese.timeline_content_6;
    timelineTime6.textContent = data.japanese.timeline_time_6;
    timelineTitle7.textContent = data.japanese.timeline_title7;
    timelineContent7.innerHTML = data.japanese.timeline_content_7;
    timelineTime7.textContent = data.japanese.timeline_time_7;
    notiTitle.textContent = data.japanese.noti_title;
    notiTitle1.innerHTML = data.japanese.noti_title1;
    notiContent1.innerHTML = data.japanese.noti_content1;
    notiDate1.textContent = data.japanese.noti_date1;
    notiMore1.textContent = data.japanese.noti_more;
    notiTitle2.innerHTML = data.japanese.noti_title2;
    notiContent2.innerHTML = data.japanese.noti_content2;
    notiDate2.textContent = data.japanese.noti_date2;
    notiMore2.textContent = data.japanese.noti_more;
    notiTitle3.innerHTML = data.japanese.noti_title3;
    notiContent3.innerHTML = data.japanese.noti_content3;
    notiDate3.textContent = data.japanese.noti_date3;
    notiMore3.textContent = data.japanese.noti_more;
    viewmoreNotiBtn.innerHTML = data.japanese.more_info;
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
    momentMoreBtn.innerHTML = data.japanese.more_moment;
    contactTitleMain.textContent = data.japanese.contact_title_main;
    contactTitleSub.textContent = data.japanese.contact_title_sub;
    firstNameLabel.textContent = data.japanese.first_name_label;
    lastNameLabel.textContent = data.japanese.last_name_label;
    emailLabel.textContent = data.japanese.email_label;
    mobileLabel.textContent = data.japanese.mobile_label;
    contentLabel.textContent = data.japanese.content_label;
    sendBtn.innerHTML = data.japanese.send_btn;
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
    underConstruction.textContent = data.japanese.under_construction;
    closeBtn.innerHTML = data.japanese.btn_close;
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
    infoTitle.textContent = data.english.info_title;
    infoContent.innerHTML = data.english.info_content;
    timelineTitle.textContent = data.english.timeline_title;
    timelineTitle1.textContent = data.english.timeline_title1;
    timelineContent1.innerHTML = data.english.timeline_content_1;
    timelineTime1.textContent = data.english.timeline_time_1;
    timelineTitle2.textContent = data.english.timeline_title2;
    timelineContent2.innerHTML = data.english.timeline_content_2;
    timelineTime2.textContent = data.english.timeline_time_2;
    timelineTitle3.textContent = data.english.timeline_title3;
    timelineContent3.innerHTML = data.english.timeline_content_3;
    timelineTime3.textContent = data.english.timeline_time_3;
    timelineTitle4.textContent = data.english.timeline_title4;
    timelineContent4.innerHTML = data.english.timeline_content_4;
    timelineTime4.textContent = data.english.timeline_time_4;
    timelineTitle5.textContent = data.english.timeline_title5;
    timelineContent5.innerHTML = data.english.timeline_content_5;
    timelineTime5.textContent = data.english.timeline_time_5;
    timelineTitle6.textContent = data.english.timeline_title6;
    timelineContent6.innerHTML = data.english.timeline_content_6;
    timelineTime6.textContent = data.english.timeline_time_6;
    timelineTitle7.textContent = data.english.timeline_title7;
    timelineContent7.innerHTML = data.english.timeline_content_7;
    timelineTime7.textContent = data.english.timeline_time_7;
    notiTitle.textContent = data.english.noti_title;
    notiTitle1.innerHTML = data.english.noti_title1;
    notiContent1.innerHTML = data.english.noti_content1;
    notiDate1.textContent = data.english.noti_date1;
    notiMore1.textContent = data.english.noti_more;
    notiTitle2.innerHTML = data.english.noti_title2;
    notiContent2.innerHTML = data.english.noti_content2;
    notiDate2.textContent = data.english.noti_date2;
    notiMore2.textContent = data.english.noti_more;
    notiTitle3.innerHTML = data.english.noti_title3;
    notiContent3.innerHTML = data.english.noti_content3;
    notiDate3.textContent = data.english.noti_date3;
    notiMore3.textContent = data.english.noti_more;
    viewmoreNotiBtn.innerHTML = data.english.more_info;
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
    momentMoreBtn.innerHTML = data.english.more_moment;
    contactTitleMain.textContent = data.english.contact_title_main;
    contactTitleSub.textContent = data.english.contact_title_sub;
    firstNameLabel.textContent = data.english.first_name_label;
    lastNameLabel.textContent = data.english.last_name_label;
    emailLabel.textContent = data.english.email_label;
    mobileLabel.textContent = data.english.mobile_label;
    contentLabel.textContent = data.english.content_label;
    sendBtn.innerHTML = data.english.send_btn;
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
    underConstruction.textContent = data.english.under_construction;
    closeBtn.innerHTML = data.english.btn_close;
  }
}

// View more notification btn click.
viewmoreNotiBtn.onclick = function () {
  openModal();
}

function openModal() {
  modal.classList.toggle('active');
  disableScroll();
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

// Close modal btn click.
closeBtn.onclick = function () {
  modal.classList.toggle('active');
  enableScroll();
}

// Send mail btn.
sendBtn.onclick = function () {
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let email = document.getElementById('email').value;
  let mobile = document.getElementById('mobile-num').value;
  let sendContent = document.getElementById('send-content').value;

  let subjectEN = "Hello! I want to ask a question!";
  let bodyEN = `Hello, my name is ${firstName} ${lastName} \n\n${sendContent} \n Please contact me: \n Email: ${email} \n Tel: ${mobile}`;

  let subjectJP = "こんにちは！ 私は質問をしたいです！";
  let bodyJP = `こんにちは、私の名前は${firstName} ${lastName}です。\n\n${sendContent} \n 私に連絡してください： \n ・メール： ${email} \n ・電話番号： ${mobile}`;

  let mailToLink = "mailto:nguyentranminhhoang@gmail.com?subject=" + subjectEN + "&body=" + encodeURIComponent(bodyEN);
  let mailToLinkJP = "mailto:nguyentranminhhoang@gmail.com?subject=" + subjectJP + "&body=" + encodeURIComponent(bodyJP);
  if (body.classList.contains('jp')) {
    window.location.href = mailToLinkJP;
  } else {
    window.location.href = mailToLink;
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

//#region DISABLE & ENABLE SCROLL
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

// Modern Chrome requires { passive: false } when adding event.
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// Disable function.
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// Enable function.
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
//#endregion