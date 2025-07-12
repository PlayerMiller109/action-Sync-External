module.exports = {
  github: {
    release: true,
    releaseName: "${version}",
    releaseNotes: 'echo "\n"',
    assets: [
      'sync/main.js',
      'sync/manifest.json',
      'sync/styles.css',
      'sync/obsidian-excalidraw-plugin.zip',
    ],
    proxy: process.env.HTTPS_PROXY,
  },
  npm: {
    publish: false,
  },
};