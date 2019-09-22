export class ProfileCard {
    constructor(dev){
        //Name, imgSrc, role, description, github
       Object.keys(dev).forEach(key => this[key] = dev[key]);
    }

    produceElement(type, details1, details2){
        const newElement = document.createElement(type);
        switch(type){
            case 'img' : newElement.src = details1;
                         if(details2) newElement.alt = details2;
                         break;

            case 'a'   : newElement.href = details1; 
                         newElement.innerText = details2 ? details2 : details1;
                         break;
            
            default    : newElement.innerText = details1;
        }
    
        return newElement;
    }

    render(){
        const div = document.createElement('div');
        div.className = "profile-card";
        const nameH3 = this.produceElement('h3', this.name);
        const img = this.produceElement('img', this.imgSrc, `Image of ${this.name}`);
        const roleH4 = this.produceElement('h4', this.role);
        const descP = this.produceElement('p', this.description);
        const link = this.produceElement('a', this.github);

        [nameH3, img, roleH4, descP, link].forEach(el => div.appendChild(el));

        return div;

    }

}
