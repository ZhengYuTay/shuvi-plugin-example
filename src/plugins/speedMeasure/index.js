module.exports = (api) => {
  api.addRuntimePlugin(
    "speedmeasure",
    api.resolveUserFile("plugins", "speedMeasure", "speedMeasure")
  );
};
