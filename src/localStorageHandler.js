const saveToLocalStorage = (key, array) => {
  localStorage.setItem(key, JSON.stringify(array))
}

const loadfromLocalStorage = (key) => {
  const retrievedData = localStorage.getItem(key)
  const retrievedDataArray = JSON.parse(retrievedData)
  return retrievedDataArray
}

export { saveToLocalStorage, loadfromLocalStorage}