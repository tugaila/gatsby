const { wrapModuleWithTracking } = require(`./tracking-unsafe-module-wrapper`)

module.exports = wrapModuleWithTracking(`https`)
