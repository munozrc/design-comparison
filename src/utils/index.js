/**
 * @param {string} key
 * @param {string} initialValue
 * @returns {string} value
 */
export function getDataFromLocalStorage (key, initialValue) {
  try {
    const obj = getAllDataFromLocalStorage()
    if (!obj) return initialValue
    return obj[key] ?? initialValue
  } catch (err) {
    console.error(err)
    return initialValue
  }
}

/**
 * @param {string} key
 * @param {string} newValue
 * @returns {string} value
 */
export function setDataToLocalStorage (key, newValue) {
  try {
    const { [key]: removeOldItem, ...restOfData } = getAllDataFromLocalStorage() ?? {}

    window.localStorage.setItem('designComparisonData', JSON.stringify({
      ...restOfData,
      [key]: newValue
    }))

    return newValue
  } catch (err) {
    console.error(err)
    return newValue
  }
}

/**
 * @returns {void}
 */
export function clearAllDataToLocalStorage () {
  window.localStorage.removeItem('designComparisonData')
}

function getAllDataFromLocalStorage () {
  try {
    const data = window.localStorage.getItem('designComparisonData')
    return JSON.parse(data)
  } catch (err) {
    console.error(err)
    return null
  }
}
