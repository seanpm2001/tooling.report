import 'regenerator-runtime/runtime';

(async function() {
  setTimeout(async () => {
    const { shout } = await import('./utils.js');
    shout('this is index');
  }, 6000);
})();