import FavoriteRestoranIdb from '../../data/favorite-restoran-idb';
import { createRestoranItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restoran-idb';
const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restoran</h2>
        <div id="restorans" class="restorans">
        
        </div>
      </div>
    `;
  },
  /*async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestorans();
    const restaurantContainer = document.querySelector('#restaurans');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestoranItemTemplate(restaurants);
    });
  },*/

  async afterRender() {
    const restorans = await FavoriteRestoranIdb.getAllRestorans();
    const restoransContainer = document.querySelector('#restorans');
    restorans.forEach((restoran) => {
      restoransContainer.innerHTML += createRestoranItemTemplate(restoran);
    });
  },
};

export default Favorite;
