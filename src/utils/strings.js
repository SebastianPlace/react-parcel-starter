export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const capitalize = (str: string) => {
  return str.split(' ').map(capitalizeFirstLetter).join(' ')
}
