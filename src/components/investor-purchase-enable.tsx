import React from 'react'
import '../css/main.css'

export function InvestorPurchaseEnable({language}) {
    return (
        <div className={'container-investor'}>
            <div className="container-investor-inside">
                <h2 className={'enab-inves-title'}>{language === 'ru' ? 'купить фета токены' : 'buy pheta tokens'}</h2>
                <p className="enab-inves-available">{language === 'ru' ? 'Имеется в наличии' : 'Available'}:<span className={'enab-inves-available-span'}> 100 </span>BUSD</p>
                <div className={'amount-container'}>
                    <input type="number" className={'amount-input-second'} placeholder={language === 'ru' ? 'Кол-во' : 'Amount'} required/>
                    <div className={'amount-value'}>
                        <p className={'amount-value-first-item'}><span className={'amount-value-first-item-span'}>0 </span>{language === 'ru' ? 'фета' : 'pheta'}</p>
                        <p className={'amount-value-second-item'}>1 usd = 0.11 pheta</p>
                    </div>
                </div>
                <a href="#" className={'enab-inves-btn'}>{language === 'ru' ? 'включить' : 'enable'}</a>
            </div>
        </div>
    )
}

// <WalletAddress language={language} />
// <InvestorPurchaseEnable language={language} />
// <Language language={language} setLanguage={setLanguage} />
