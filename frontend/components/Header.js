import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
    return (
        <header>
            <div class="first__line">
                <Link href="/">Logo</Link>
                <div class="search__line">
                    <input type="search" placeholder="Enter value" />
                </div>
                <div class="phone__contact">
                    45-353459-3
                </div> 
            </div>
            <div class="second__line">
                <Nav />        
            </div>
        </header>    
    )    
}