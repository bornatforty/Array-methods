//question 1
const avgPrice = (items.reduce(function(a,b) {
	return a + b.price 
},0) / items.length).toFixed(2)
document.querySelector('#answer1').innerHTML = `The average price is $${avgPrice}.`


//question 2
const priceRange = items.filter(function(item) {
  return item.price > 14 && item.price < 18
}).map(function(item) {
	return item.title
}).join(`\n`)
document.querySelector(`#answer2`).innerHTML = priceRange


//question 3
const currencyCode = items.filter(function(item) {
  return item.currency_code === 'GBP'
  })[0]
const gbpHtml = currencyCode.title + ` costs &pound;` + currencyCode.price
document.querySelector(`#answer3`).innerHTML = gbpHtml


//question 4

const madeOfWood = items.filter(function(item){
	return item.materials.indexOf('wood') !== -1
}).map(function(item){
	return item.title
}).join(`\n`)
document.querySelector(`#answer4`).innerHTML = madeOfWood


//question 5

const eight = items.filter(function(item) {
     return item.materials.length >= 8
  })
let eightHtml = ''
eight.forEach(function(item){
	eightHtml += `${item.title} has ${item.materials.length} materials\n`
	eightHtml += item.materials.join(`\n`)
	eightHtml +=(`\n\n`)
})
document.querySelector(`#answer5`).innerHTML = eightHtml

//question 6

const sellerMade = items.filter(function(item) {
    return item.who_made == 'i_did'
}).length
document.querySelector(`#answer6`).innerHTML = `${sellerMade} were made by their sellers`