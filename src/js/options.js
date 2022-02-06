'use strict';
import { getTimeStamp } from '/src/js/common.js';

const id3 = document.getElementById('id3');

document.getElementById('update').addEventListener('click', () => {
  id3.textContent = getTimeStamp();
});
