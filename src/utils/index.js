import { multiply, bignumber, number, divide } from 'mathjs'
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

export function dataFilter(self, val, dataList, name = 'name') {
  if (val) {
    // val存在
    self[dataList] = self[dataList + 'Copy'].filter(item => {
      if (!!~item[name].indexOf(val) || !!~item[name].toUpperCase().indexOf(val.toUpperCase())) {
        return true
      }
    })
  } else {
    // val为空时，还原下拉的原有集合
    self[dataList] = self[dataList + 'Copy']
  }
}

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}

/**
 * @msg: 乘法计算解决精度问题
 * @param {Number: args} 传入需要计算的数据
 * @return: Number  计算后的值
 */
export const myMultiply = (...args) => {
  let result = []
  args.forEach(item => {
    result.push(bignumber(Number(item)))
  })
  return number(multiply(...result))
}

/**
 * @msg: 除法计算，解决精度问题
 * @param {Number: args} 传入需要计算的数据
 * @return: Number  计算后的值
 */
export const myDivide = (...args) => {
  let result = []
  args.forEach(item => {
    result.push(bignumber(Number(item)))
  })
  return number(divide(...result))
}
