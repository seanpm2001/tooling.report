setTimeout(async () => {
  const { shout } = await import('./utils.js');
  shout('this is index');
}, 1000);
