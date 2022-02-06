'use strict';

import { TAB_ID_KEY, TIMESTAMP_KEY, MESSAGE_TYPE_KEY, MESSAGE_TYPE_POPUP_TO_BACKGROUND, getTimeStamp } from '/src/js/common.js';

const id1 = document.getElementById('id1');
const btn = document.getElementById('btn');

btn.onclick = () => {
  var url = 'https://www.bing.com/';
  if (location.href.includes('www.bing.com')) {
    id1.innerHTML += `Don't open bing when bing is focused.<br>`;
    return;
  }
  browser.tabs.query({active: true, lastFocusedWindow: true})
    .then(tabs => {
      var tab = tabs[0];
      browser.runtime.sendMessage({
        [TAB_ID_KEY]: tab.id,
        [TIMESTAMP_KEY]: getTimeStamp(),
        [MESSAGE_TYPE_KEY]: MESSAGE_TYPE_POPUP_TO_BACKGROUND,
      })
      .catch(err => console.log("popup: browser.runtime.sendMessage catch:", err));;

      var index = tab.index;
      return browser.tabs.create({
        url,
        index: index + 1,
        active: true,
      });
    })
    .then(created => {
      id1.innerHTML += `tab created: ${created.title}<br>`;
    });

}