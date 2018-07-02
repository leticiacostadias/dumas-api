const armors = require('./armors/routes')
const items = require('./items/routes')
const magicSchools = require('./magicSchools/routes')
const skills = require('./skills/routes')
const subclasses = require('./subclasses/routes')
const weaponProperties = require('./weaponProperties/routes')
const weapons = require('./weapons/routes')

module.exports = [].concat(
  armors,
  items,
  magicSchools,
  skills,
  subclasses,
  weaponProperties,
  weapons
)
