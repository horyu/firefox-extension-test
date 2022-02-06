(async () => {
  // console.log("Hello from content_script");
  const src = browser.runtime.getURL('src/js/content_script.js');
  const contentScript = await import(src);
  contentScript.main();
})();
