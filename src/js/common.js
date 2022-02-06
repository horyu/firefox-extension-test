'use strict';

export const TAB_ID_KEY = 'tabId';
export const TIMESTAMP_KEY = 'timestamp';
export const MESSAGE_TYPE_KEY = 'messageType';

export const MESSAGE_TYPE_POPUP_TO_BACKGROUND = 'popup2background';
export const MESSAGE_TYPE_BING_TO_BACKGROUND = 'bing2background';
export const MESSAGE_TYPE_CONTENT_SCRIPT_TO_BACKGROUND = 'contentScript2background';
export const MESSAGE_TYPE_BACKGROUND_TO_CONTENT_SCRIPT = 'background2contentScript';

export function getTimeStamp() {
  return Math.floor(Date.now() / 1000);
}

