import {ProfileCard} from './profileCard.js';


const wrapper = document.querySelector('.profile-wrapper');

const joshua = new ProfileCard({name: 'Joshua Burleson',
    imgSrc: "https://media.licdn.com/dms/image/C4E03AQG9S9pTUdI-6w/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=OJPK-gkr-PwL6Lg4_xVAS39ynlWTSuZoTCV5-CIlAs0",
    role: "UI Engineer",
    description: "UI Engineer / Principal LESS Developer",
    github: "https://github.com/Joshua-Burleson"});

const jerome = new ProfileCard({
    name: "Jerome Haynes",
    imgSrc: "https://media.licdn.com/dms/image/C4D03AQEh_Sy1cM86IA/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=RFUnO1J3pIc4PU4IkaH97f3TthkoydHdge6sJj65-wk",
    role: "Front End Engineer",
    description: "Front End Engineer / Front End Developer",
    github: "https://github.com/JHaynes1990"
   });

const iree = new ProfileCard({
    name: "Iree Hale",
    imgSrc: "https://ca.slack-edge.com/T4JUEB3ME-UHA0H6T4M-21a7b44fad17-48",
    role: "UI Engineer",
    description: "UI Developer",
    github: "https://github.com/HappyPraise"
   });

const enoka = new ProfileCard({
    name: "Enoka Jaona",
    imgSrc: "https://avatars3.githubusercontent.com/u/44152261?s=400&v=4",
    role: "Project Lead",
    description: "Project Lead",
    github: "https://github.com/EJaona",
  });

const jenny = new ProfileCard({
        name: `Jenny O'Bryant`,
        imgSrc: `https://media.licdn.com/dms/image/C5603AQE9tsg_5cI58A/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=hxLvRg-rCWr8JyA_Rt86dgVqPt6TBFJqzeFkOykahWw`,        
        role: "Front End Engineer",
        description: "Front End Engineer/Front End Developer",
        github: "https://github.com/jennyobryant"
});

wrapper.appendChild(enoka.render()); // Enoka
wrapper.appendChild(joshua.render()); // Joshua
wrapper.appendChild(jerome.render()); // Jerome
wrapper.appendChild(iree.render()); // Iree
wrapper.appendChild(jenny.render());
wrapper.appendChild(joshua.render());
wrapper.appendChild(joshua.render());