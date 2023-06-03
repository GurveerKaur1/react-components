function Header(props){
    return(
        <header>
            <div className="container flexbox">
                <h1>{props.name}</h1>
                <nav>
                    <ul>
                        <li class="six"><a href="#">{props.home}</a></li>
                        <li class="home-2"><a href="about.html">{props.about}</a></li>
                        <li class="home-3"><a href="#">{props.contact}</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header