const armors = require('./armors/routes')
const items = require('./items/routes')
const magicSchools = require('./magicSchools/routes')
const weaponProperties = require('./weaponProperties/routes')
const weapons = require('./weapons/routes')

module.exports = [].concat(
  armors,
  items,
  magicSchools,
  weaponProperties,
  weapons
)
