'use strict';

import { TAB_ID_KEY, MESSAGE_TYPE_KEY, MESSAGE_TYPE_CONTENT_SCRIPT_TO_BACKGROUND,  } from '/src/js/common.js';

export function main() {
  console.log("I'm content_script", location.href);
  browser.runtime.onMessage.addListener((request, sender) => {
    console.log("content_script: get message:", request, sender);
    browser.runtime.sendMessage({
      [TAB_ID_KEY]: request[TAB_ID_KEY],
      [MESSAGE_TYPE_KEY]: MESSAGE_TYPE_CONTENT_SCRIPT_TO_BACKGROUND,
    })
    .catch(err => console.log("content_script: browser.runtime.sendMessage catch:", err));
  });
}
