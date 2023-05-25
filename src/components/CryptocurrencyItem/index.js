// Write your JS code here
import "./index.css";

const CryptocurrencyItem = (props) => {
  const { eachCurrency } = props;
  const { currencyLogo, currencyName, euroValue, id, usdValue } = eachCurrency;
  return (
    <li className="list-item-bg">
      <div className="crptyo-currency-bg">
        <img src={currencyLogo} alt={currencyName} className="crptyo-image" />
        <p className="crptyo-name">{currencyName}</p>
      </div>
      <div className="crypto-values">
        <p className="crptyo-usd-value">{usdValue}</p>
        <p className="crptyo-euro-value">{euroValue}</p>
      </div>
    </li>
  );
};
export default CryptocurrencyItem;
