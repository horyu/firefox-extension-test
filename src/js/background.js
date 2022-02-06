'use strict';

import {
  TAB_ID_KEY, TIMESTAMP_KEY, MESSAGE_TYPE_KEY,
  MESSAGE_TYPE_POPUP_TO_BACKGROUND, MESSAGE_TYPE_BING_TO_BACKGROUND, MESSAGE_TYPE_CONTENT_SCRIPT_TO_BACKGROUND,
  getTimeStamp
} from '/src/js/common.js';

let tabId = null;
let timestamp = 0;
browser.runtime.onMessage.addListener((request, sender) => {
  console.log(request, sender);
  switch (request[MESSAGE_TYPE_KEY]) {
    case MESSAGE_TYPE_POPUP_TO_BACKGROUND:
      tabId = request[TAB_ID_KEY];
      timestamp = request[TIMESTAMP_KEY];
      break;
    case MESSAGE_TYPE_BING_TO_BACKGROUND:
      if (getTimeStamp() - timestamp <= 300) {
        // 受け取るコンテントスクリプトのtabIdを設定しておく
        request[TAB_ID_KEY] = tabId;
        browser.tabs.sendMessage(tabId, request)
        .catch(err => console.log("browser.tabs.sendMessage catch:", err));
      }
      break;
    case MESSAGE_TYPE_CONTENT_SCRIPT_TO_BACKGROUND:
      if (tabId === request[TAB_ID_KEY]) {
        timestamp = 0;
      }
    default:
      console.log("未定義のMESSAGE_TYPE");
  }
});

console.log("I'm background.", tabId, timestamp);