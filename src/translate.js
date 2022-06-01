const translations = [
  russian, {
    'Exchange': 'Обменник',
    'Mining' : 'Майнинг',
    'Platform' : 'Платформа',
    'Roi' : 'РИ',
    'Lottery' : 'Лотерея',
    '' : '',
    '' : '',
    '' : '',
    '' : '',
    '' : '',
    '' : '',
    '' : '',
    '' : '',
    '' : '',
  }
]

export default (value, language) => {
  return translations[language][value]
}
