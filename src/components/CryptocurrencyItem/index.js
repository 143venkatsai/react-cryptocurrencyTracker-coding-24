import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = details

  return (
    <li className="item-container">
      <div className="left-section">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="right-section">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
