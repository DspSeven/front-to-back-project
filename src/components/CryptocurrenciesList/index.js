// Write your JS code here
import { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import CryptocurrencyItem from "../CryptocurrencyItem";
import "./index.css";

class CryptocurrenciesList extends Component {
  state = {
    isLoading: true,
    currencyData: [],
  };

  componentDidMount() {
    this.getCurrencyList();
  }

  getCurrencyList = async () => {
    const response = await fetch(
      "https://apis.ccbp.in/crypto-currency-converter"
    );
    const data = await response.json();
    console.log(data);
    const newData = data.map((eachData) => ({
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      id: eachData.id,
      usdValue: eachData.usd_value,
    }));
    console.log(newData);
    this.setState({ isLoading: false, currencyData: newData });
  };

  getCurrencyItem = () => {
    console.log("each currency item");
    const { currencyData } = this.state;
    return (
      <div className="currency-bg">
        <h1 className="currency-name">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="currency-image"
        />
        <div className="currency-table">
          <div className="currency-header">
            <p className="coin">Coin Type</p>
            <div className="other-currencies">
              <p className="usd">USD</p>
              <p className="usd">EURO</p>
            </div>
          </div>
          {currencyData.map((eachData) => (
            <CryptocurrencyItem eachCurrency={eachData} key={eachData.id} />
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div testid="loader" className="bg-container">
        {isLoading ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          this.getCurrencyItem()
        )}
      </div>
    );
  }
}
export default CryptocurrenciesList;
