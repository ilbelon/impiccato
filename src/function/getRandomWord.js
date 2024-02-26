const url = 'https://random-word-api.herokuapp.com/'

async function getRandomWord(lang, length) {
  if (!lang) {
    lang = 'it'
  }
  if (!length) {
    length = ''
  } else {
    length = '&length=' + length
  }
  try {
    const url = 'https://random-word-api.herokuapp.com/'
    const response = await fetch(url + 'word?lang=' + lang + length)
    const data = await response.json()
    return getWord(data)
  } catch (error) {
    console.error('Error retrieving random word:', error)
    return null
  }
}

function getWord(data) {
  return data[0]
}

async function getLanguages() {
  try {
    const response = await fetch(url + 'languages')
    const data = await response.json()
    console.log('data', data)
    return data
  } catch (error) {
    console.error('Error retrieving languages:', error)
    return null
  }
}

export { getRandomWord, getLanguages }
