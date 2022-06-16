import Vue from 'vue'

Vue.filter('formatPrice', (price) => {
  const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  })

  return formatter.format(price)
})
