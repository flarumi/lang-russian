// Russian [ru]

function plural(word, num) {
  const forms = word.split('_')
  return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]) // eslint-disable-line
}

function relativeTimeWithPlural(number, withoutSuffix, key) {
  const format = {
    mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
    hh: 'час_часа_часов',
    dd: 'день_дня_дней',
    MM: 'месяц_месяца_месяцев',
    yy: 'год_года_лет'
  }
  if (key === 'm') {
    return withoutSuffix ? 'минута' : 'минуту'
  }
  return `${number} ${plural(format[key], +number)}`
}

dayjs.locale({
  name: 'ru',
  weekdays: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
  weekdaysShort: 'Вск_Пнд_Втр_Срд_Чтв_Птн_Сбт'.split('_'),
  weekdaysMin: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
  months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
  monthsShort: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMM YYYY в H:mm',
    LLLL: 'dddd, D MMM YYYY в H:mm'
  },
  relativeTime: {
    future: 'через %s',
    past: '%s назад',
    s: 'несколько секунд',
    m: relativeTimeWithPlural,
    mm: relativeTimeWithPlural,
    h: 'час',
    hh: relativeTimeWithPlural,
    d: 'день',
    dd: relativeTimeWithPlural,
    M: 'месяц',
    MM: relativeTimeWithPlural,
    y: 'год',
    yy: relativeTimeWithPlural
  },
})
