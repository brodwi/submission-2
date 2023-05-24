import CONFIG from '../../globals/config';

const createRestoranDetailTemplate = (restoran) => `
    <h2 class="restoran__title">${restoran.name}</h2>
    <img class="restoran__poster" src="${CONFIG.BASE_IMAGE_URL + restoran.id}" alt="${restoran.name}" />
    <div class="restoran__info">
        <h3>Informasi</h3>
        <h4>Tagline</h4>
        <p>${restoran.name}</p>
        <h4>Release Date</h4>
        <p>${restoran.release_date}</p>
        <h4>Duration</h4>
        <p>${restoran.runtime} minutes</p>
        <h4>Rating</h4>
        <p>${restoran.address}</p>
    </div>
    <div class="restoran__overview">
        <h3>Overview</h3>
        <p>${restoran.description}</p>
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
