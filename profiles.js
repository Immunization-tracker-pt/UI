import {ProfileCard} from './profileCard.js';

const wrapper = document.querySelector('.profile-wrapper');

console.log(wrapper)

const joshua = new ProfileCard({name: 'Joshua Burleson',
                                imgSrc: "https://media.licdn.com/dms/image/C4E03AQG9S9pTUdI-6w/profile-displayphoto-shrink_100_100/0?e=1574899200&v=beta&t=DaRGV7JVSY5LXZpGEfde0zIsZ0DzElhbBztNc6hTJQ8",
                                role: "UI Engineer",
                                description: "UI Engineer / Principal LESS developer",
                                github: "https://github.com/Joshua-Burleson"});

wrapper.appendChild(joshua.render()); // Enoka
wrapper.appendChild(joshua.render());
wrapper.appendChild(joshua.render());
wrapper.appendChild(joshua.render());
wrapper.appendChild(joshua.render());
wrapper.appendChild(joshua.render());
wrapper.appendChild(joshua.render());