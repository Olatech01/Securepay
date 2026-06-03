const { withAppBuildGradle } = require('@expo/config-plugins');

module.exports = function withAndroidPackaging(config) {
  return withAppBuildGradle(config, (config) => {
    if (!config.modResults.contents.includes('META-INF/versions/9/OSGI-INF/MANIFEST.MF')) {
      config.modResults.contents = config.modResults.contents.replace(
        /android\s*\{/,
        `android {
    packagingOptions {
        exclude 'META-INF/versions/9/OSGI-INF/MANIFEST.MF'
    }`
      );
    }
    return config;
  });
};