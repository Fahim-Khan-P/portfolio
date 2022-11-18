/* eslint-disable no-loop-func */
/* eslint-disable prefer-destructuring */
const nav = document.getElementsByClassName('nav');
const mobileNav = document.getElementsByClassName('mobile-nav');
const humberger = document.getElementById('humberger');
const close = document.getElementById('closemenu');
const porfolioLink = document.getElementById('portfolioLink');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');

function closeFunction() {
  mobileNav[0].classList.remove('open');
  nav[0].classList.remove('close');
  mobileNav[0].classList.add('close');
  nav[0].classList.add('openFlex');
}

porfolioLink.addEventListener('click', () => {
  closeFunction();
});
aboutLink.addEventListener('click', () => {
  closeFunction();
});
contactLink.addEventListener('click', () => {
  closeFunction();
});

humberger.addEventListener('click', () => {
  mobileNav[0].classList.remove('close');
  nav[0].classList.remove('openFlex');
  mobileNav[0].classList.add('open');
  nav[0].classList.add('close');
});
close.addEventListener('click', () => {
  closeFunction();
});

const projects = [
  {
    name: 'Canopy',
    details: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads: no accounts or sign-ups required.',
    fullDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './icons/image2.png',
    techs: ['html', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Multi-Post Stories',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description:
      'A daily selection of privately personalized reads: no accounts or sign-ups required.',
    fullDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './icons/image3.png',
    techs: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Facebook 360',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description:
      'A daily selection of privately personalized reads: no accounts or sign-ups required.',
    fullDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './icons/image4.png',
    techs: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Uber Navigation',
    details: ['Uber', 'Lead Developer', '2018'],
    description:
      'A daily selection of privately personalized reads: no accountsor sign-ups required.',
    fullDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './icons/img.png',
    techs: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const func = (position) => {
  const popupSection = document.getElementsByClassName('popupSection');
  popupSection[0].classList.add('popupSection');
  popupSection[0].style.display = 'block';

  const topDiv = document.createElement('div');
  topDiv.classList.add('topDiv');
  const h1 = document.createElement('h1');
  h1.classList.add('topDiv-h1');
  h1.innerText = projects[position].name;
  const cross = document.createElement('i');
  cross.classList.add('fa-solid', 'fa-xmark');

  cross.addEventListener('click', () => {
    popupSection[0].style.display = 'none';
    popupSection[0].innerHTML = '';
  });

  const topDivList = document.createElement('div');
  topDivList.classList.add('topDiv-list');
  const h3 = document.createElement('h3');
  h3.classList.add('canopy');
  h3.innerText = projects[position].details[0];
  const listIcon = document.createElement('img');
  listIcon.classList.add('listIcon');
  listIcon.setAttribute('src', './icons/Counter.png');
  listIcon.setAttribute('alt', 'Icon image');
  const workList = document.createElement('p');
  workList.classList.add('workList');
  workList.innerText = projects[position].details[1];
  const listIcon2 = document.createElement('img');
  listIcon2.classList.add('listIcon');
  listIcon2.setAttribute('src', './icons/Counter.png');
  listIcon2.setAttribute('alt', 'Icon image');
  const workList2 = document.createElement('p');
  workList2.classList.add('workList');
  workList2.innerText = projects[position].details[2];
  topDivList.append(h3, listIcon, workList, listIcon2, workList2);

  const popImage = document.createElement('div');
  popImage.classList.add('popImage');

  popImage.style.backgroundImage = `url('${projects[position].image}')`;

  const bottomDiv = document.createElement('div');
  bottomDiv.classList.add('bottomDiv');

  const bottomDivLeft = document.createElement('div');
  bottomDivLeft.classList.add('bottomDiv-left');

  const bottomDivLeftP = document.createElement('p');
  bottomDivLeftP.classList.add('bottomDiv-leftl-p');
  bottomDivLeftP.innerText = projects[position].fullDescription;

  const bottomDivRight = document.createElement('div');
  bottomDivRight.classList.add('bottomDiv-right');

  const popLanguageList = document.createElement('ul');
  popLanguageList.classList.add('popLanguageList');
  projects[position].techs.forEach((item) => {
    const popLanguage = document.createElement('li');
    popLanguage.classList.add('language');
    popLanguage.innerText = item;
    popLanguageList.append(popLanguage);
  });

  const bottomDivRightBtn = document.createElement('div');
  bottomDivRightBtn.classList.add('bottomDiv-right-btn');

  const seeLive = document.createElement('button');
  seeLive.setAttribute('id', 'seeLive');
  seeLive.innerText = 'see live';

  const seeLiveIcon = document.createElement('img');
  seeLiveIcon.classList.add('btn-icon');
  seeLiveIcon.setAttribute('src', './seePro.svg');

  const seeSource = document.createElement('button');
  seeSource.setAttribute('id', 'seeSource');
  seeSource.innerText = 'see source';

  const seeSourceIcon = document.createElement('img');
  seeSourceIcon.classList.add('btn-icon');
  seeSourceIcon.setAttribute('src', './github.png');

  seeSource.append(seeSourceIcon);
  seeLive.append(seeLiveIcon);

  bottomDivRightBtn.append(seeLive, seeSource);
  bottomDivRight.append(popLanguageList, bottomDivRightBtn);

  bottomDivLeft.append(bottomDivLeftP);
  bottomDiv.append(bottomDivLeft, bottomDivRight);

  topDiv.append(h1, cross);

  popupSection[0].append(topDiv, topDivList, popImage, bottomDiv);
};

const email = document.getElementById('email');
const namefield = document.getElementById('username');
const textarea = document.getElementById('textarea');
const message = document.getElementById('erorrMsg');
const form = document.getElementById('form');

const dataFromStorage = JSON.parse(localStorage.getItem('data'));

if (dataFromStorage) {
  email.setAttribute('value', dataFromStorage.email);
  namefield.setAttribute('value', dataFromStorage.name);
  textarea.innerText = dataFromStorage.text;
}

const checkEmail = () => {
  const emailValue = email.value.trim();
  if (emailValue.match(/[A-Z]/)) {
    message.style.display = 'block';
    return false;
  }
  message.style.display = 'none';
  return true;
};

form.addEventListener('submit', (e) => {
  if (checkEmail() === false) {
    e.preventDefault();
  } else {
    const data = {
      name: namefield.value,
      email: email.value,
      text: textarea.value,
    };

    localStorage.setItem('data', JSON.stringify(data));
  }
});

const workSection = document.getElementById('workSection');

const loadCards = (newProjects) => {
  newProjects.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('div');
    img.classList.add('img');
    img.style.backgroundImage = `url('${item.image}')`;
    const firstSectionSecondPart = document.createElement('div');
    firstSectionSecondPart.classList.add('first-section-second-part');
    const h2 = document.createElement('h2');
    h2.classList.add('tonic');
    const { name } = item;
    h2.innerText = name;

    const divList = document.createElement('div');
    divList.classList.add('divList');

    const h3 = document.createElement('h3');
    h3.classList.add('canopy');
    h3.innerText = item.details[0];
    const listIcon = document.createElement('img');
    listIcon.classList.add('listIcon');
    listIcon.setAttribute('src', './icons/Counter.png');
    listIcon.setAttribute('alt', 'Icon image');
    const workList = document.createElement('p');
    workList.classList.add('workList');
    workList.innerText = item.details[1];
    const listIcon2 = document.createElement('img');
    listIcon2.classList.add('listIcon');
    listIcon2.setAttribute('src', './icons/Counter.png');
    listIcon2.setAttribute('alt', 'Icon image');
    const workList2 = document.createElement('p');
    workList2.classList.add('workList');
    workList2.innerText = item.details[2];
    divList.append(h3, listIcon, workList, listIcon2, workList2);

    const workText = document.createElement('p');
    workText.classList.add('workText');
    workText.innerText = item.description;
    const language = document.createElement('ul');
    language.classList.add('language');
    language.setAttribute('id', 'lan');
    item.techs.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = item;
      language.append(li);
    });
    const seeProject = document.createElement('a');
    seeProject.classList.add('seeProject');
    seeProject.setAttribute('id', `${index}`);
    seeProject.innerText = 'See Project';

    seeProject.addEventListener('click', (e) => {
      const position = e.target.id * 1;
      func(position);
    });

    firstSectionSecondPart.append(h2, divList, workText, language, seeProject);
    card.append(img, firstSectionSecondPart);
    workSection.append(card);
  });
};

if (projects[0].image) {
  const newPorjects = [...projects];
  loadCards(newPorjects);
}
