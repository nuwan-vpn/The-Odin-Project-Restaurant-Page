import createRestaurantHomePage from "./home";
import createRestaurantMenuPage from "./menu";
import createRestaurantContactPage from "./contact";

const createTabs = () =>{
    
    const content = document.querySelector("#content");

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    div1.addEventListener('click', ()=>{
        clearContent();
        createRestaurantHomePage();
    });

    div2.addEventListener('click', ()=>{
        clearContent();
        createRestaurantMenuPage();
    });

    div3.addEventListener('click', ()=>{
        clearContent();
        createRestaurantContactPage();
    });

}

function clearContent(){
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if(pageContent){
        content.removeChild(pageContent);
    }
}

export default createTabs;