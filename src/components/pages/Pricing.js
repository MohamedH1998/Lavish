import { FaFire} from "react-icons/fa"
import {BsXDiamondFill} from 'react-icons/bs'
import {GiCrystalize} from 'react-icons/gi'
import { Link } from "react-router-dom"
import Button from "./Button"
import {IconContext} from 'react-icons/lib'
import './Pricing.css'

const Pricing = () => {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Pricing</h1>
                    <div className="pricing__container">
                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire/>
                                </div>
                                <h3>Starter</h3>
                                <h4>£10.00</h4>
                                <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>100 Transactions</li>
                                <li>2% Cash Back</li>
                                <li>£10,000 Limit</li>
                            </ul>
                            <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
                            </div>
                        </Link>

                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill/>
                                </div>
                                <h3>Gold</h3>
                                <h4>£30.00</h4>
                                <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>10,000 Transactions</li>
                                <li>5% Cash Back</li>
                                <li>£100,000 Limit</li>
                            </ul>
                            <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
                            </div>
                        </Link>


                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize/>
                                </div>
                                <h3>Diamond</h3>
                                <h4>£30.00</h4>
                                <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>10,000 Transactions</li>
                                <li>5% Cash Back</li>
                                <li>£100,000 Limit</li>
                            </ul>
                            <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
                            </div>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>

    )
}

export default Pricing