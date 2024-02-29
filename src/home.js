const createRestaurantHomePage = () =>{
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append image element
    const image = document.createElement('img');
    image.src = './img/reataurant.jpg';
    image.height = '300';
    pageContent.appendChild(image);

    //Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant';
    pageContent.appendChild(headline);

    
}