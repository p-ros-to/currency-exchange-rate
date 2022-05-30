import "./CurrencyConverte.css";

import PropTypes from "prop-types";



const CurrencyConverte = ({ currencyAmount, currencyAmount2 }) => {
    return (
        <div className="currency">
            <div className="usdToUah">1USD = {currencyAmount} UAH</div>
            <div className="eurToUah">1EUR = {currencyAmount2} UAH</div>
        </div>
    )

};

CurrencyConverte.propTypes = {
    currencyAmount: PropTypes.number.isRequired
};

CurrencyConverte.propTypes = {
    currencyAmount2: PropTypes.number.isRequired
};

export default CurrencyConverte;