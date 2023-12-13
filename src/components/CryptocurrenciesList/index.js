import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({currencyData: updatedData, isLoading: false})
  }

  renderCurrencyData = () => {
    const {currencyData} = this.state
    return (
      <div className="currency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="currency-image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="currency-list-container">
          <div className="top-section">
            <div className="left">
              <p className="type">Coin Type</p>
            </div>
            <div className="right">
              <p className="usd">USD</p>
              <p className="euro">EURO</p>
            </div>
          </div>
          <ul className="list-container">
            {currencyData.map(item => (
              <CryptocurrencyItem details={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="currency-container">
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCurrencyData()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
