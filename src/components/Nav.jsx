import "../styles/Nav.css";
export default function Nav(props) {
    return(
        <nav onClick={props.handle}>
            <h1 className="nav__logo">STO-PUC</h1>
        </nav>
    )
}