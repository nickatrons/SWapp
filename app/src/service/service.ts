import axios from 'axios';

//Dummy, havnt used it yet.. 
interface ServerResponse {
  data: ServerData;
}
//Dummy, havnt used it yet.. 
interface ServerData {
  foo: string;
  bar: number;
}

/**
 * Fetches relevant data from our endpoint
 */
export class ServiceGetter {
  private readonly SW_FILMS_API_ENDPOINT: string = "https://swapi.dev/api/films";

  /**
   * Gets all movies
   */
  async getMovies() {
    return await this.fetchData(this.SW_FILMS_API_ENDPOINT);
  }

  /**
   * Gets a starship, needs a url. 
   * @param url 
   */
  async getStarship(url: string) {
    return await this.fetchData(url);
  }

  /**
   * our AJAX handler
   * @param api 
   */
  async fetchData(api: string) {
    let data;
    try {
      const response = await axios
        .get(api);
      data = response.data;
      return data
    }
    catch (error) {
      return error;
    }
  }
}

