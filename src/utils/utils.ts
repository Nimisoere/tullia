export const formatMoney = (
  amount: number = 0,
  currency: string,
  fractions?: number
): string => {
  const options = {
    style: "currency",
    currency,
    minimumFractionDigits: fractions || fractions === 0 ? fractions : 2,
  }
  // if its a whole, dollar amount, leave off the .00
  // if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat("en-US", options)
  return formatter.format(amount)
}
