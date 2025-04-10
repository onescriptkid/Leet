/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {

  let fives = 0
  let tens = 0;
  let twenties = 0

  for(let i = 0; i < bills.length; i++) {
    let bill = bills[i]
    console.log(bill, fives, tens)

    if(bill === 5) {
      fives++
    } else if(bill === 10) {
      if(fives === 0) {
        return false
      } else {
        fives--
        tens++
      }
    } else if(bill === 20) {
      if(tens > 0 && fives > 0) {
        fives--
        tens--
      } else if(fives >= 3) {
        fives = fives - 3
      } else {
        return false
      }
    }
  }
  return true
};