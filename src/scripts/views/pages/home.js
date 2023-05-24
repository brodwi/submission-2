import RestoranSource from '../../data/restoran-source';
import { createRestoranItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Informasi Restoran</h2>
        <div id="restorans" class="restorans">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restorans = await RestoranSource.homeRestorans();
    const restoransContainer = document.querySelector('#restorans');
    restorans.forEach((restoran) => {
      restoransContainer.innerHTML += createRestoranItemTemplate(restoran);
    });
  },
};

export default Home;
