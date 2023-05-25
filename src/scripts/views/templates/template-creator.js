import CONFIG from '../../globals/config';

const createRestoranDetailTemplate = (restoran) => `
    <h2 class="restoran__title">${restoran.name}</h2>
    <img class="restoran__poster" src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" alt="${restoran.name}" />
    <div class="restoran__info">
        <h3>Informasi</h3>
        <h4>Deskripsi</h4>
        <p>${restoran.description}</p>
        <h4>Alamat</h4>
        <p>${restoran.address}</p>
        <h4>Kota</h4>
        <p>${restoran.city}</p>
        <h4>Menu Makanan</h4>
        <ul>
        ${restoran.menus.foods.map((foods) => `<li>${foods.name}</li>`).join('')}
        </ul>
        <h4>Menu Minuman</h4>
        <ul>
          ${restoran.menus.drinks.map((drinks) => `<li>${drinks.name}</li>`).join('')}
        </ul>
    </div>
    <h4>Customer Reviews</h4>
    ${restoran.customerReviews.map((review) => `
      <div class="Restoran__overview">
        <p class="review__name">${review.name}</p>
        <p class="review__date">${review.date}</p>
        <p class="review__text">${review.review}</p>
      </div>
    `).join('')}
  </div>
`;

const createRestoranItemTemplate = (restoran) => `
    <div class="restoran-item">
        <div class="restoran-item__header">
            <img class="restoran-item__header__poster" alt="${restoran.title}"
            src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}">
            <div class="restoran-item__header__rating">
                <p>&#11088<span class="restoran-item__header__rating__score">${restoran.rating}</span></p>
            </div>
        </div>
        <div class="restoran-item__content">
            <h3><a href="/#/detail/${restoran.id}">${restoran.name}</a></h3>
            <p>${restoran.description}</p>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restoran" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restoran" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoranItemTemplate,
  createRestoranDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
