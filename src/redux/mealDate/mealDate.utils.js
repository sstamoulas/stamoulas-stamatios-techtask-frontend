export const formatDate = (mealDate) => {
  let date = mealDate.getDate()
  let month = mealDate.getMonth() + 1
  let year = mealDate.getFullYear()

  if(date < 10) {
    date = `0${date}`
  }

  if(month < 10) {
    month = `0${month}`
  }

  return `${year}-${month}-${date}`
}
