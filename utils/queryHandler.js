const diacriticHelper = require('diacritic-regex-helper')

function queryHandler (request, reply) {
  const { query } = request

  request.mongo = {
    limit: query.__limit ? parseInt(query.__limit, 10) : 0,
    skip: query.__skip ? parseInt(query.__skip, 10) : 0,
    query: queryParser(query) || {},
    sort: sortParse(query.__asc, query.__desc)
  }

  return request
}

function queryParser (requestQuery) {
  const query = Object.assign({}, requestQuery)

  delete query.__limit
  delete query.__skip
  delete query.__asc
  delete query.__desc

  if (Object.keys(query).length === 0) return {}

  const finalQuery = {}

  for (let queryKey in query) {
    const [ field, command ] = queryKey.split('__')
    const value = valueParser(query[queryKey])

    if (command) {
      finalQuery[field] = finalQuery[field] || {}
      finalQuery[field][`$${command}`] = value
    } else {
      finalQuery[field] = value
    }
  }

  return finalQuery
}

function valueParser (search) {
  if (search[1] !== ':') {
    return search
  }

  const [ type, value ] = search.split(':')
  let finalValue

  switch (type.toLowerCase()) {
    case 'n':
      finalValue = Number(value)
      break
    case 'd':
      finalValue = new Date(value).toISOString()
      break
    case 'r':
      finalValue = new RegExp(diacriticHelper(value), 'i')
      break
    case 'b':
      finalValue = Boolean(value)
      break
    default:
      finalValue = value
      break
  }

  return finalValue
}

function sortParse (asc, desc) {
  if (!asc && !desc) return {}
  const parsedSort = {}

  if (asc) {
    if (Array.isArray(asc)) {
      asc.forEach((field) => { parsedSort[field] = 1 })
    } else {
      parsedSort[asc] = 1
    }
  }

  if (desc) {
    if (Array.isArray(desc)) {
      desc.forEach((field) => { parsedSort[field] = -1 })
    } else {
      parsedSort[desc] = -1
    }
  }

  return parsedSort
}

module.exports = queryHandler
