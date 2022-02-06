(async () => {
  const src = browser.runtime.getURL('src/js/bing.js');
  const contentScript = await import(src);
  contentScript.main();
})();
