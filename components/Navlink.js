import Link from "next/link"

const Navlink = ({title, url}) => {
    return (
        <span className="navLink">
        <Link href={`${url}`}>
            <a>{title}</a>
        </Link>
        </span>
    )
}

export default Navlink