import UrlParser from '../../routes/url-parser';
import RestoranSource from '../../data/restoran-source';
import { createRestoranDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restoran" class="restoran"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoran = await RestoranSource.detailRestoran(url.id);
    const restoranContainer = document.querySelector('#restoran');
    restoranContainer.innerHTML = createRestoranDetailTemplate(restoran);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: restoran.id,
        title: restoran.name,
        overview: restoran.description,
        backdrop_path: restoran.city,
        vote_average: restoran.address,
      },
    });
  },
};

export default Detail;
