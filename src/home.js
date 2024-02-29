const createRestaurantHomePage = () =>{
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append image element
    const image = document.createElement('img');
    image.src = './img/reataurant.jpg';
    image.height = '300';
    pageContent.appendChild(image);
    
}