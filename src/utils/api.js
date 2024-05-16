class Api {
  constructor() {
    this._urlBase = "https://pokeapi.co/api/v2/";

    // this.offset = this.offset;
  }

  async fetcher(url, method, body) {
    const data = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(body),
    });

    if (data.ok) {
      return data.json();
    }
  }
  //
  async getPokemon(limit = 50) {
    try {
      console.log(this.offset);
      return await this.fetcher(
        `${this._urlBase}pokemon?limit=${limit}&offset=${this.offset}`,
        "GET"
      );
    } catch (err) {
      console.log(`se dio el sigueinte error: ${err}`);
    }
  }
  async getInfoPokemon(pokemon) {
    try {
      return await this.fetcher(pokemon, "GET");
    } catch (err) {
      console.log(`se dio el sigueinte error: ${err}`);
    }
  }

  async getAllPokemon() {
    try {
      console.log(this.offset);
      return await this.fetcher(
        `${this._urlBase}pokemon?limit=100000&offset=0`,
        "GET"
      );
    } catch (err) {
      console.log(`se dio el sigueinte error: ${err}`);
    }
  }
}

const api = new Api();

export default api;
