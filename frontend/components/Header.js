import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';
import HeaderStyles from './styles/Header';


const Logo = styled.h1`
font-weight: 700;
font-size: 25px;
line-height: 25px;
`;

export default function Header() {
    return (
        <HeaderStyles>
            <header>
                <div className="first-line__header">
                    <Logo><Link href="/" >
                        <a href="#!" className="logo">
                            Logo
                        </a>
                    </Link></Logo>
                    <div className="search-line">
                        <input type="search" placeholder="Enter value" />
                    </div>
                    <div className="phone-contact">
                        45-353459-3
                    </div>
                </div>
                <div className="line-separetor"></div>
                <div className="second-line__header">
                    <Nav />
                </div>
            </header>

        </HeaderStyles >

    )
}