import createRestaurantHomePage from './home.js';
import createTabs from './tabs.js';

function initialLoad(){
    createTabs();
    createRestaurantHomePage();
}

export default initialLoad;