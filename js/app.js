'use strict';

import {API} from './api.js';
import * as UI from './interfaz.js';

UI.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const artist = document.querySelector('#artista').value;
  const song = document.querySelector('#cancion').value;

  if( artist === '' || song === '') {
    UI.divMessage.innerText = 'Error. Todos los campos son obligatorios';
    UI.divMessage.classList.add('error');
    setTimeout(() => {
      UI.divMessage.innerText = '';
      UI.divMessage.classList.remove('error');
    }, 3000)
  } else {
    const api = new API(artist, song);
    api.callAPI()
      .then(data => {
        if(data.response.lyrics){
          const lyrics = data.response.lyrics;
          UI.result.textContent = lyrics;
        } else {
          UI.divMessage.innerText = 'La canción no existe. Prueba con otra búsqueda.';
          UI.divMessage.classList.add('error');
          setTimeout(() => {
            UI.divMessage.innerText = '';
            UI.divMessage.classList.remove('error');
            UI.form.reset();
          }, 3000)
        }
      })
  }
})