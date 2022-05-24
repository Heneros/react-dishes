import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <Link href="cold-snacks">Cold Snacks</Link>
            <Link href="soups">Soups</Link>
            <Link href="Grill Menu">Grill Menu</Link>
            <Link href="fish-dishes">Fish Dishes</Link>
            <Link href="meat-dishes">Meat Dishes</Link>
            <Link href="drinks">Drinks</Link>
        </nav>
    )
}