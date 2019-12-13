async function initGlue42Connection() {
  const glueConfig = {
//    appManager: { mode: "full" },
    layouts: { mode: "full" }
  };
  const glueInstance = await window.Glue(glueConfig);

  window.glue = glueInstance;
}

function getLayouts() {
  return window.glue.layouts.list();
}

export {
  initGlue42Connection,
  getLayouts,
};