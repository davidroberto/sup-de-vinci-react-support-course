const Header = () => {
    const displayTitle = false;
    const title = "Sup de Vinci";


    const menuItems = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ];


    return (
        <header>

            {displayTitle && <h1>{title}</h1>}

            <nav>
                <ul>
                    {menuItems.map((item) => {
                        return (
                            <li>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        )
                    })}

                </ul>
            </nav>

        </header>
    )
}

export default Header;