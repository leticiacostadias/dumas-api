const armors = require('./armors/routes')
const magicSchools = require('./magicSchools/routes')
const weaponProperties = require('./weaponProperties/routes')
const weapons = require('./weapons/routes')

module.exports = [].concat(
  armors,
  magicSchools,
  weaponProperties,
  weapons
)
