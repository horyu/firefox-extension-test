'use strict';

import { MESSAGE_TYPE_KEY, MESSAGE_TYPE_BING_TO_BACKGROUND } from '/src/js/common.js';

export function main() {
  console.log("bing:", document.title);
  const title = document.title;
  if (title.includes('検索')) {
    console.log(title, title.includes('検索'));
    browser.runtime.sendMessage({
      "bing.js": title,
      [MESSAGE_TYPE_KEY]: MESSAGE_TYPE_BING_TO_BACKGROUND,
    })
      .catch(err => console.log("bing: browser.runtime.sendMessage catch:", err));
  }
}