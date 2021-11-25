

let tookWatch = false;
function watchOrNot() {
    tookWatch = true;
    goToChapter("kyle_goesto_address");
};

function watchStatus() {
    if (tookWatch == true) {
        goToChapter("kyle_has_watch")
    }
    else if (tookWatch == false) {
        goToChapter("kyle_no_watch")
    }
}

let chaptersObj = {
    kyle_text_mia: {
        subtitle: 'Kyle is worried',
        text: 'Its evening, and Mia does not seem to be at home. She didnt tell me she had to stay late at work. Maybe I should text her to see if everything is fine. Hey! Are you alright? Will you be home soon?',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kdnp_sentence1")'
        }]
    },

    kdnp_sentence1: {
        subtitle: 'Mia is not coming home',
        text: 'Unfortunately no, she wont be back really soon.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kyle_and_kdnp")'
        }]
    },

    kyle_and_kdnp: {
        subtitle: 'Kyle is shocked',
        text: 'Hold on!',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'Where is Mia?',
            action: 'goToChapter("kyle_question1")'
        }, {
            text: 'Who are you?',
            action: 'goToChapter("kyle_question2")'
        }]
    },

    kyle_question1: {
        subtitle: 'Where is Mia?',
        text: 'Where is Mia?!',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kdnp_answer1")'
        }]
    },

    kdnp_answer1: {
        subtitle: 'The answer to Kyles question about Mia',
        text: 'Dont worry, shes ok...',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("what_kyle_wants")'
        }]
    },

    kyle_question2: {
        subtitle: 'Who are you?',
        text: 'Who the hell are you?!',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kdnp_answer2")'
        }]
    },

    kdnp_answer2: {
        subtitle: 'The kidnapper presents himself',
        text: 'Im just a guy who wants to play a little game with you. Its called: Give me what I want or she dies.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("what_kyle_wants")'
        }]
    },

    what_kyle_wants: {
        subtitle: 'what Kyle wants',
        text: 'Alright look, I will give you what you want, but first I want to talk to her.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kdnp_refuse")'
        }]
    },

    kdnp_refuse: {
        subtitle: 'Kyle cannot talk to Mia',
        text: 'Sorry, that wont be possible for now.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kyle_threat")'
        }]
    },

    kyle_threat: {
        subtitle: 'Kyle threatens to call the cops',
        text: 'You know what, im calling the cops.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kdnp_threat")'
        }]
    },

    kdnp_threat: {
        subtitle: 'The kidnapper threatens kyle',
        text: 'If you call the cops, she dies.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'call the cops',
            action: 'goToChapter("kyle_calls_cops")'
        }, {
            text: 'do not call the cops',
            action: 'goToChapter("kyle_collaborates")'
        }]
    },

    kyle_calls_cops: {
        subtitle: 'Kyle decides to call the cops anyway',
        text: 'Kyle decided to call the cops anyway, but the kidnapper wasnt playing games with him. As a result, Mia died.(not in the discussion)',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'try again',
            action: 'goToChapter("kyle_text_mia")'
        }]
    },

    kyle_collaborates: {
        subtitle: 'Kyle collaborates',
        text: 'Alright then, I wont call the cops.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kyle_ask_kdnp")'
        }]
    },

    kyle_ask_kdnp: {
        subtitle: 'Kyle asks to the kidnapper what he wants',
        text: 'So what do you want from me.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("what_kdnp_wants")'
        }]
    },

    what_kdnp_wants: {
        subtitle: 'What the kidnapper wants',
        text: 'I want money.',
        img: 'assets/image_texte.jpg',
        video: 'assets/video2.mp4',
        option: [{

            text: 'How much',
            action: 'goToChapter("kyle_howmuch_money")'
        }, {
            text: 'Refuse',
            action: 'goToChapter("kyle_refuse1")'
        }, {
            text: 'Accept',
            action: 'goToChapter("kyle_accepts")'
        }]
    },

    kyle_refuse1: {
        subtitle: 'Kyle refuses to give money to the kidnapper',
        text: 'Forget it, Im not giving you any money.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kdnp_kills_mia2")'
        }]
    },

    kdnp_kills_mia2: {
        subtitle: 'The kidnapper kills Mia',
        text: 'Thats a shame, I guess then that if you dont want to give me what I want, then I dont need your girlfriend anymore. Mia dies.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'try again',
            action: 'goToChapter("kyle_text_mia")'
        }]
    },

    kyle_howmuch_money: {
        subtitle: 'Kyle asks how much money does the kidnapper want',
        text: 'How much do you want?',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kdnp_answer_money")'
        }]
    },

    kdnp_answer_money: {
        subtitle: 'How much money does he want',
        text: 'I want 80,000$.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'Accept',
            action: 'goToChapter("kyle_accepts")'
        }, {
            text: 'Refuse',
            action: 'goToChapter("kyle_refuse1")'
        }]
    },

    kyle_accepts: {
        subtitle: 'Kyle accepts to give 80,000$ to the kidnapper',
        text: 'ok...',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kyle_infos")'
        }]
    },

    kyle_choices: {
        subtitle: 'What should Kyle take before leaving?.',
        text: 'What should I take before leaving?',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'Take the watch',
            action: 'watchOrNot()'
        }, {
            text: 'Take the wallet',
            action: 'goToChapter("kyle_goesto_address")'
        }]
    },

    kyle_infos: {
        subtitle: 'Kyle asks where should he give the money',
        text: 'where do I give it to you?',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kdnp_gives_address")'
        }]
    },

    kdnp_gives_address: {
        subtitle: 'Where does Kyle should give the money',
        text: 'Heres the address: 813 Howard Street. At 22:00, dont be late because you know what will happen to your girlfriend.',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kyle_choices")'
        }]
    },

    kyle_goesto_address: {
        subtitle: 'Kyle goes to the address',
        text: 'Kyle goes to the address (not in the discussion)',
        video: 'assets/video1.mp4',
        option: [{
            text: 'continue',
            action: 'goToChapter("kyles_watch")'
        }]
    },

    kyles_watch: {
        subtitle: 'Kyle needs to check the time to find out if hes late, but does he have his watch?',
        text: 'I should check the time, but do I have my watch?',
        img: 'assets/image_texte.jpg',
        localisation: 1,
        option: [{
            text: 'continue',
            action: 'watchStatus()'
        }]
    },

    kyle_no_watch: {
        subtitle: 'Kyle doesnt have his watch with him',
        text: 'Kyle didnt bring his watch with him. He will therefore not be able to get to the appointment on time, which will make Mia die.(not in the discussion)',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'try again',
            action: 'goToChapter("kyle_text_mia")'
        }]
    },

    kyle_has_watch: {
        subtitle: 'Kyle has his watch',
        text: 'Alright, I have my watch and I still have some time. Should I try to find Mia first or should I give him the money first?',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'find Mia first',
            action: 'goToChapter("kyle_finds_mia_first")'
        }, {
            text: 'bring money first',
            action: 'goToChapter("kyle_brings_money_first")'
        }]
    },

    kyle_finds_mia_first: {
        subtitle: 'Kyle wants to find Mia first',
        text: 'Kyle got lost trying to find Mia by himself. He will therefore not be able to get to the appointment on time, which will make Mia die.(not in the discussion)',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'try again',
            action: 'goToChapter("kyle_text_mia")'
        }]
    },

    kyle_brings_money_first: {
        subtitle: 'Kyle wants to bring the money to the kidnapper first',
        text: 'The money is there. Now I want to see her!',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kdnp_brings_mia")'
        }]
    },

    kdnp_brings_mia: {
        subtitle: 'The kidnapper arrives with Mia, takes the money, releases Mia and leaves',
        text: 'The kidnapper arrives with Mia, takes the money, releases Mia and leaves(not in the discussion)',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'continue',
            action: 'goToChapter("kyle_mia_leave")'
        }]
    },

    kyle_mia_leave: {
        subtitle: 'Kyle leaves with Mia',
        text: 'Mia leaves safely with Kyle.(not in the discussion)',
        img: 'assets/image_texte.jpg',
        option: [{
            text: 'try again',
            action: 'goToChapter("kyle_text_mia")'
        }]

    }
}

document.addEventListener("DOMContentLoaded", function() { 
    goToChapter(localStorage.getItem('data'))
  });

function goToChapter(chapterName) {
    const chapter = chaptersObj[chapterName];

    localStorage.setItem("data", chapterName);


    let subtitle = document.querySelector('.chapter');
    let text = document.querySelector('.text');
    let img = document.querySelector('.image');
    let btn = document.querySelector('.button');
    let btnValue = '';

    for (let index = 0; index < chapter.option.length; index++) {
        btnValue += `<button onclick = '${chapter.option[index].action}'>${chapter.option[index].text}</button>`;
    };

    btn.innerHTML = btnValue;
    subtitle.innerText = chaptersObj[chapterName].subtitle;
    text.innerText = chaptersObj[chapterName].text;
    img.innerHTML = `<img src="${chaptersObj[chapterName].img}">`;

    if (chapter.video == 'assets/video1.mp4') {
        img.innerHTML = "<video src='assets/video1.mp4' autoplay='autoplay' loop='true'></video>";
    };

    if (chapter.video == 'assets/video2.mp4') {
        img.innerHTML = "<video src='assets/video2.mp4' autoplay='autoplay' loop='true'></video>";
    };

    const son = new Audio('assets/boop.mp3');
    const body = document.querySelector('body')

    btn.onclick = function () {
        body.classList.add('play');
        son.play();
        son.addEventListener('ended', function () {
            body.classList.remove('play');
        });
    };
    console.log(localStorage.getItem("data"));
};


if(localStorage.getItem("data") != undefined){
    goToChapter(localStorage.getItem('data'));

}