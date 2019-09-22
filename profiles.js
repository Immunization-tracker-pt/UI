import {ProfileCard} from './profileCard.js';

const wrapper = document.querySelector('.profile-wrapper');

console.log(wrapper)

const joshua = new ProfileCard({name: 'Joshua Burleson',
                                imgSrc: "https://media.licdn.com/dms/image/C4E03AQG9S9pTUdI-6w/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=OJPK-gkr-PwL6Lg4_xVAS39ynlWTSuZoTCV5-CIlAs0",
                                role: "UI Engineer",
                                description: "UI Engineer / Principal LESS developer",
                                github: "https://github.com/Joshua-Burleson"});

const jerome = new ProfileCard({
    name: "Jerome Haynes",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEh_Sy1cM86IA/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=RFUnO1J3pIc4PU4IkaH97f3TthkoydHdge6sJj65-wk",
    role: "Front End Engineer",
    description: "Front End Engineer / Front End Developer",
    github: "https://github.com/JHaynes1990"
   })

wrapper.appendChild(joshua.render()); // Enoka
wrapper.appendChild(joshua.render());
wrapper.appendChild(jerome.render());
wrapper.appendChild(joshua.render());
wrapper.appendChild(joshua.render());
wrapper.appendChild(joshua.render());
wrapper.appendChild(joshua.render());