// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurrency} = props
  const {currencyLogo, currencyName, euroValue, id, usdValue} = eachCurrency
  return (
    <li>
      <div>
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
