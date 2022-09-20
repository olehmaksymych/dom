let content = document.querySelector('.content');

let aside = document.createElement('nav');
aside.classList.add('asideBlock');
content.append(aside);

let main = document.createElement('main');
main.classList.add('mainBlock');
content.append(main);

let arrOfClubs = [
    {
        title: 'The most titled footbal clubs',
        dataName: '1',
        description: [
            `This is a brief description of the main football clubs in Western
            European Countries. Please, click on the country you want to find out
            what football club is the most titled club in the whole history of
            football in the selected country.`,`The names of the football leagues are:`,     
            `England - "Premier League"`, `Germany - "The Bundesliga"`,
            `Italy - "Serie A"`,`Spain - "La Liga"`,`France - "Ligue 1"`
        ],
        img: 'images/futballClubs.jfif',
        alt: 'Titled clubs',
        source: `https://goalballlive.com/football-club-with-most-trophies-in-the-world/`,
        class: 'clubs'
    },
    {
        title: 'Liverpool',
        dataName: '2',
        description: [
            `Liverpool is one of the most successful English clubs in terms
          of trophies of all time. It is the the most
          successful club in England.
          The 'Merseyside's' have won 19 Premier League Cups and six Uefa Champions League
          Cups. In total, Liverpool has 43 titles.`
        ],
        img: 'images/footbal_clubs/liverpool.png',
        alt: 'Liverpool',
        source: `https://www.liverpoolfc.com/`,
        class: 'liverpool'
    },
    {
        title: 'Bayern Munich',
        dataName: '3',
        description: [
            `FC Bayern München is a German football club from Munich.`, `One of the
            most famous and strongest clubs in Germany and the world.`,
            `Bayern Munich has 84 trophies, 32 of which are Bundesliga cups and 6
            UEFA Champions League cups.`
        ],
        img: 'images/footbal_clubs/bayern_munich.png',
        alt: 'Bavaria',
        source: `https://fcbayern.com/en`,
        class: 'bavaria'
    },
    {
        title: 'Juventus',
        dataName: '4',
        description: [
            `Juventus Football Club is a football club from the city of Turin, one
          of the oldest clubs in Italy, and one of the most titled clubs in
          Europe and the world.`,`This club has a record 36 Serie A cups, as
          well as 2 UEFA Champions League cups.`,
          `In total, Juve has total of 75 prestigious trophies.`
        ],
        img: 'images/footbal_clubs/juventus.png',
        alt: 'juve',
        source: `https://www.juventus.com/en/`,
        class: 'juve'
    },
    {
        title: 'Real',
        dataName: '5',
        description: [
            `This club is the best club in Spain in the history of Spanish
          football.`,`The assets of this club include 99 trophies.`, `The club
          became the champion of "La Liga" 35 times and won the Champions League
          the maximum number of times - 14.`,
          `Real Madrid is recognized as the best football club of the 20th
          century according to FIFA.`
        ],
        img: 'images/footbal_clubs/real.png',
        alt: 'Yeezus',
        source: `https://www.realmadrid.com/en`,
        class: 'real'
    },
    {
        title: 'Olympique Lyonnais',
        dataName: '6',
        description: [
            `Founded in 1950, the club won its first Ligue 1 championship in 2002, starting a national record-setting streak of seven successive titles.`, 
            `Lyon has also won eight Trophées des Champions, five Coupes de France, and three Ligue 2 titles.`,
            `Ol has a total of 35 trophies.`
        ],
        img: 'images/footbal_clubs/ol.png',
        alt: 'ol',
        source: `https://www.ol.fr/fr`,
        class: 'ol'
    }
];

arrOfClubs.forEach(item => {
    renderAsideItems(item);
});

function renderAsideItems(item) {
    let button = document.createElement('button');
    button.classList.add('asideBtn');
    button.dataset.attribute = `${item.dataName}`;
    button.textContent = `${item.title}`;
    aside.append(button);
}

let asideBtn = document.querySelectorAll('.asideBtn');
asideBtn[0].classList.add('clicked');
addToMain(arrOfClubs[0]);

document.querySelector('.asideBlock').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('asideBtn')) {
        renderMain(e);
    }
});


function renderMain(event) {
    document.querySelector('.asideBtn.clicked').classList.remove('clicked');
    event.target.classList.add('clicked');
    let thatTarget = event.target.dataset.attribute;
    main.innerHTML = '';

    let mainItem = arrOfClubs.find(function({dataName}) {
        return dataName === thatTarget;
    });

    addToMain(mainItem);
}

function addToMain(item) {
    content.classList = "";
    content.classList.add('content', item.class);

    main.innerHTML = `
        <div class='mainHeader'>${item.title}</div>
        <div class='mainContent'>
            <img class='mainImg' src='${item.img}' alt='${item.alt}' />
            <div class='mainDescr'></div>
            </div>
        <div class='mainSource'>
            <iframe class="iFrame" style="border-radius:12px" src=${item.source} width="100%" height="320" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    `;

    document.querySelector('.mainDescr').append(createUl(item));
}

function createUl(item) {
    let ul = document.createElement('ul');
    ul.classList.add('mainDescrUl');

    item.description.forEach(elem => {
        let li = document.createElement('li');
        li.classList.add('mainDescrLi');
        li.textContent = elem;
        ul.append(li);
    });

    return ul;
}
