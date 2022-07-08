import Ticker from 'react-ticker'

import './style.scss'

export const TickerShoppingCart = () => (
    <Ticker speed={8}>
        {() => (
            <div className="ticker">
                <div className="divider">
                    123
                </div>
                <div className="divider">
                    321
                </div>
                <div className="divider">
                    456
                </div>
                <div className="divider">
                    654
                </div>
                <div className="divider">
                    789
                </div>
            </div>
        )}
    </Ticker>
)