import Image from "next/image"
import Box from '@mui/material/Box';

const Header = () => {

    return (
        <section className="header">
            <div className="header__logo">
                ПОКЕМОНЫ API
            </div>

            <div className="header__info">
                <Image src='/Icon.png' alt='touch' width={24.25} height={30.66}></Image>
                <div className="info-text">
                    Нажмите на 
                    <p>нужного Покемона</p>
                </div>
            </div>
        </section>
    )
}

export default Header