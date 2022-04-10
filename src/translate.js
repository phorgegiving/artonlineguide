const translations = [
  russian: {
    'Exchange': 'Обменник'
  }
]

export default (value, language) => {
  return translations[language][value]
}
