import video from "./video/movie.mp4"
import { Logo } from "./Logo";
import { Fragment } from "react";

function Header(){

    return (
    <Fragment>
        <header className="topBar">
            <Logo></Logo>
        </header>
        <div id="HEADER" className="header">
            <video autoPlay muted loop disablePictureInPicture >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    </Fragment>)

}

export {Header};