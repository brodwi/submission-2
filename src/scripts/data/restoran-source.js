import API_ENDPOINT from '../globals/api-endpoint';

class RestoranSource {
  static async homeRestorans() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async favoriteRestorans() {
    const response = await fetch(API_ENDPOINT.review);
    const responseJson = await response.json();
    return responseJson.results;
  }
  static async detailRestoran(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestoranSource;
