const armors = require('./armors/routes')
const magicSchools = require('./magicSchools/routes')
const weaponProperties = require('./weaponProperties/routes')

module.exports = [].concat(armors, magicSchools, weaponProperties)
