const createRestaurantMenuPage = () =>{
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    pageContent.appendChild(heading);

    const menuList = document.createElement('ul');

    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Rice';
    menuList.appendChild(menuItem1);

    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Dhal curry';
    menuList.appendChild(menuItem2);

    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Chicken';
    menuList.appendChild(menuItem3);

    pageContent.appendChild(menuList);
    content.appendChild(pageContent);

}

export default createRestaurantMenuPage;