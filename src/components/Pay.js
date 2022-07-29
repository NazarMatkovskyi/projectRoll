import React, { useState } from 'react';
import './styles/pay.css';
import visa from '../assets/Visa.png';
import Cards from 'react-credit-cards';

import InputMask from 'react-input-mask';

const Pay = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');

  return (
    <div className="pay">
      <div className="pay_block">
        <div className="pay_title">Add Card</div>
        <form>
          <div className="pay_inner">
            <span className="pay_inner-title">Cardholder Name</span>
            <InputMask
              className="pay_inner-input"
              placeholder="Jack Lewis "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="pay_inner">
            <span className="pay_inner-title">Card Number</span>
            <InputMask
              className="pay_inner-input"
              placeholder="1234 5678 9123 4567"
              mask="9999 9999 9999 9999"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              maskChar=" "
            />
          </div>
          <div className="pay_inner">
            <span className="pay_inner-title">Card Expiration Date</span>
            <InputMask
              mask="99/99"
              placeholder="02/11"
              className="pay_inner-input"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              disabled={false}
              maskChar=" "
            />
          </div>
        </form>
        <div className="pay_card">
          <div className="pay_card_title">
            <span>Credit Card</span>
            <img src={visa} alt="visa" />
          </div>
          <div className="card_info">
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              placeholders={{
                name: 'Jack Lewis',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
