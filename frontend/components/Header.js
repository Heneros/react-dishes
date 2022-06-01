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
                <div className="first__line">
                    <Logo><Link href="/">Logo</Link></Logo>
                    <div className="search__line">
                        <input type="search" placeholder="Enter value" />
                    </div>
                    <div className="phone__contact">
                        45-353459-3
                    </div>
                </div>
                <div className='line__separetor'></div>
                <div className="second__line">
                    <Nav />
                </div>
            </header>
        </HeaderStyles>
    )
}