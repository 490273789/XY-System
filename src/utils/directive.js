import Vue from 'vue'
export function numbers() {
  Vue.directive('numbers', {
    bind: function(el, binding) {
    },
    inserted: function(el) {
    },
    update: function(el, binding, vnode, oldVnode) {
      let express = vnode.data.directives[1].expression

      let value = vnode.data.directives[1].value
      if (typeof value === 'string') { } // 在重置的时候清空
      if (value.split('.').length - 1 > 1) {
        value = value.replace(/\.{2,}/g, '') // 只保留第一个. 清除多余的
        value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
      }
      let repeatValue = value.replace(/[^\d.]/g, '')
      setValueWithExpressionVue(vnode.context.$data, express, repeatValue)
    },
    componentUpdated: function() { },
    unbind: function(el) { }
  })
}

function setValueWithExpressionVue(currObj, expression, value) {
  expression = expression.split('.')
  expression.forEach(function(arg, i) {
    if (i < expression.length - 1) {
      currObj = currObj[arg]
    } else {
      currObj[arg] = value
    }
  })
}
