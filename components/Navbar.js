import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar() {
  return (
        <>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/contact"><a>Conatct</a></Link></li>
        </ul>
        </>
    )
}
