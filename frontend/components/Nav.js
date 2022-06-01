import Link from "next/link";

export default function Nav() {
    return (
        <nav className="navbar">
            <Link href="/cold-snacks">Cold Snacks</Link>
            <Link href="/soups">Soups</Link>
            <Link href="/grill-menu">Grill Menu</Link>
            <Link href="/fish-dishes">Fish Dishes</Link>
            <Link href="/meat-dishes">Meat Dishes</Link>
            <Link href="/drinks">Drinks</Link>
        </nav>
    )
}