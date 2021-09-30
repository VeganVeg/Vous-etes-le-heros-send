
let chaptersObj = {
    kyle_text_mia: {
        subtitle: 'Kyle is worried',
        text: 'K:Its evening, and Mia does not seem to be at home. She didnt tell me she had to stay late at work. Maybe I should text her to see if everything is fine. Hey!. Are you alright? Will you be home soon?  ',
        img: 'image_texte.jpg'
    },

    kdnp_sentence1: {
        subtitle: 'Mia is not coming home',
        text: 'Unfortunately no, she wont be back really soon.',
        img: 'image_texte.jpg'
    },
    
    kyle_and_kdnp: {
        subtitle: 'Kyle is shocked',
        text: 'Hold on!',
        img: 'image_texte.jpg'
    },

    kyle_question1: {
        subtitle: 'Where is Mia?',
        text: 'Where is Mia?!',
        img: 'image_texte.jpg'
    },

    kdnp_answer1: {
        subtitle: 'The answer to Kyles question about Mia',
        text: 'Dont worry, shes ok...',
        img: 'image_texte.jpg'
    },

    kyle_question2: {
        subtitle: 'Who are you?',
        text: 'Who the hell are you?!',
        img: 'image_texte.jpg'
    },

    kdnp_answer2: {
        subtitle: 'The kidnapper presents himself',
        text: 'Im just a guy who wants to play a little game with you. Its called: Give me what I want or she dies.',
        img: 'image_texte.jpg'
    },

    what_kyle_wants: {
        subtitle: 'what Kyle wants',
        text: 'Alright look, I will give you what you want, but first I want to talk to her.',
        img: 'image_texte.jpg'
    },

    kdnp_refuse: {
        subtitle: 'Kyle cannot talk to Mia',
        text: 'Sorry, that wont be possible for now.',
        img: 'image_texte.jpg'
    },

    kyles_threat: {
        subtitle: 'Kyle threatens to call the cops',
        text: 'You know what, im calling the cops.',
        img: 'image_texte.jpg'
    },

    kdnp_threat: {
        subtitle: 'The kidnapper threatens kyle',
        text: 'If you call the cops, she dies.',
        img: 'image_texte.jpg'
    },

    kyle_calls_cops: {
        subtitle: 'Kyle decides to call the cops anyway',
        text: 'Kyle decided to call the cops anyway, but the kidnapper wasnt playing games with him. As a result, Mia died.(not in the discussion)',
        img: 'image_texte.jpg'
    },

    kyle_collaborates: {
        subtitle: 'Kyle collaborates',
        text: 'Alright then, I wont call the cops.',
        img: 'image_texte.jpg'
    },

    kyle_asks_kdnp: {
        subtitle: 'Kyle asks to the kidnapper what he wants',
        text: 'So what do you want from me.',
        img: 'image_texte.jpg'
    },

    what_kdnp_wants: {
        subtitle: 'What the kidnapper wants',
        text: 'I want money.',
        img: 'image_texte.jpg'
    },

    kyle_refuse1: {
        subtitle: 'Kyle refuses to give money to the kidnapper',
        text: 'Forget it, Im not giving you any money.',
        img: 'image_texte.jpg'
    },

    kdnp_kills_mia2: {
        subtitle: 'The kidnapper kills Mia',
        text: 'Thats a shame, I guess then that if you dont want to give me what I want, then I dont need your girlfriend anymore.',
        img: 'image_texte.jpg'
    },

    kyle_howmuch_money: {
        subtitle: 'Kyle asks how much money does the kidnapper want',
        text: 'How much.',
        img: 'image_texte.jpg'
    },

    kdnp_answer_money: {
        subtitle: 'How much money does he want',
        text: 'I want 80,000$.',
        img: 'image_texte.jpg'
    },

    kyle_refuse2: {
        subtitle: 'Kyle refuse to give 80,000$ to the kidnapper',
        text: 'Forget it, Im not giving you any money.',
        img: 'image_texte.jpg'
    },

    kdnp_kills_mia3: {
        subtitle: 'The kidnapper kills Mia',
        text: 'Thats a shame, I guess then that if you dont want to give me what I want, then I dont need your girlfriend anymore.',
        img: 'image_texte.jpg'
    },

    kyle_accepts: {
        subtitle: 'Kyle accepts to give 80,000$ to the kidnapper',
        text: 'ok...',
        img: 'image_texte.jpg'
    },

    kyle_infos: {
        subtitle: 'Kyle asks where should he give the money',
        text: 'where do I give it to you?',
        img: 'image_texte.jpg'
    },

    kdnp_gives_address: {
        subtitle: 'Where does Kyle should give the money',
        text: 'Heres the address: 813 Howard Street. At 22:00, dont be late because you know what will happen to your girlfriend.',
        img: 'image_texte.jpg'
    },

    kyle_goto_address: {
        subtitle: 'Kyle goes to the address',
        text: 'Kyle goes to the address',
        img: 'image_texte.jpg'
    },

    kyle_finds_Mia_first: {
        subtitle: 'Kyle wants to find Mia first',
        text: 'Kyle got lost trying to find Mia by himself. He will therefore not be able to get to the appointment on time, which will make Mia die.(not in the discussion)',
        img: 'image_texte.jpg'
    },

    kyle_brings_money_first: {
        subtitle: 'Kyle wants to bring the money to the kidnapper first',
        text: 'The money is there. Now I want to see her!',
        img: 'image_texte.jpg'
    },

    kdnp_brings_mia: {
        subtitle: 'The kidnapper arrives with Mia, takes the money, releases Mia and leaves',
        text: 'the kidnapper arrives with Mia, takes the money, releases Mia and leaves(not in the discussion)',
        img: 'image_texte.jpg'
    },

    Kyle_Mia_leave: {
        subtitle: 'Mia leaves with Mia',
        text: 'Mia leaves safely with Kyle.(not in the discussion)',
        img: 'image_texte.jpg'
    }
}

function goToChapter(chapterName) {
    console.log(chapterName.subtitle);
    console.log(chapterName.text);
    console.log(chapterName.img);
  }