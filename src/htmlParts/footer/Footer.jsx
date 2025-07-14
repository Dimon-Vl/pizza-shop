import './_footer.scss'
import instagram from '../../assets/img/social/instagram.svg'
import twitter from '../../assets/img/social/twitter.svg'
import facebook from '../../assets/img/social/facebook.svg'

export default function Footer() {
    const social = [instagram, twitter, facebook]
    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 className="footer__logo">pizzashop</h2>
                <div className="footer__columns">
                    <div className="footer__column">
                        <h3 className="footer__title">Home</h3>
                        <ul>
                            <li>To Order</li>
                            <li>About us</li>
                            <li>Events</li>
                            <li>Menu</li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h3 className="footer__title">Events</h3>
                        <ul>
                            <li>3 Pizza 1 Free Coffee</li>
                            <li>2 Pizza for 1 Price</li>
                            <li>Kitchen Tour</li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h3 className="footer__title">Menu</h3>
                        <ul>
                            <li>Show All</li>
                            <li>Seaproducts</li>
                            <li>Vegan</li>
                            <li>Meat</li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h3 className="footer__title">About Us</h3>
                        <ul>
                            <li>Our History</li>
                            <li>Why We?</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <span className="footer__phone">+7 (937) 333–55–33</span>
                    <div className="footer__socials">
                        {social.map((el, i) => (
                            <div className={`footer__social--el footer__social--${el}`} key={i}>
                                <a href="#">
                                    <img src={el} alt={el} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}