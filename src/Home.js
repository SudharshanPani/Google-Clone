import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Search from './Search';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    {/* <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link> */}
                </div>
                <div className="home__headerRight">
                <a href="https://mail.google.com/mail/u/0/">Gmail</a>              
                <a href="https://www.google.co.in/imghp?hl=en&ogbl">Images</a>                  
                <AppsIcon/>
                <AccountCircleIcon/>
                </div>
            </div>
            <div className="home__body"> 
                <img src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" ></img>
                <div className="home__inputContainer" >
                    <Search/>
                </div>
            </div>
            <div className="languages">
                <div className="left-part">
                    Google Offered in: 
                </div>
                <div className="right-part">
                    <ul className="language" >
                        <li><a href="">हिन्दी</a></li>
                        <li> <a href="">বাংলা</a></li>
                        <li> <a href="">తెలుగు</a></li>
                        <li> <a href="">मराठी</a></li>
                        <li> <a href="">தமிழ்</a></li>
                        <li> <a href="">ગુજરાતી</a></li>
                        <li> <a href="">ಕನ್ನಡ</a></li>
                        <li> <a href="">മലയാളം</a> </li>
                        <li> <a href="">ਪੰਜਾਬੀ</a> </li>
                    </ul>
                </div>
            </div>
            <div className="main-footer">
            <div className="footer">
                <div className="footer__top">
                    India
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom_left">
                        <ul>
                            <li><a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a></li>
                            <li><a href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a></li>
                            <li><a href="https://www.google.com/intl/en_in/business/">Business</a></li>
                            <li><a href="https://www.google.com/search/howsearchworks/?fg=1">How Search Works</a></li>
                        </ul>
                    </div>
                    <div className="footer__bottom_right">
                        <ul>
                            <li><a href="https://policies.google.com/privacy?hl=en-IN&fg=1">Privacy</a></li>
                            <li><a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a></li>
                            <li><a href="">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
