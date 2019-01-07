const getCache = () =>
  JSON.parse(decodeURI(window.location.hash).substring(1) || '{}')

const setCache = (object) => {
  const cache = getCache()

  window.location.hash = encodeURI(JSON.stringify({
    ...cache,
    ...object,
  }))
}

const getHashFromCache = () =>
  getCache().code || ''

export function setCodeToCache(code) {
  return setCache({ code: btoa(code || '') })
}

export function getCodeFromCache() {
  return (process.browser ? atob(getHashFromCache()) : '')
}
