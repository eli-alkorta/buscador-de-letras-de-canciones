export class API {
  constructor(artist, song) {
    this.artist = artist;
    this.song = song;
  }
  async callAPI() {
    const url = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`);
    const response = await url.json();
    return {
      response
    }
  }
}