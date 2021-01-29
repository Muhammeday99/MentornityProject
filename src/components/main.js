import React, { useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/main.css";

function MainPage(props) {
    const name = props.name;
    const [avatar, setAvatar] = useState();
    const getAvatarUrl = async () => {
        const user = await fetch("https://api.github.com/users/" + name, {
            method: "GET",
        });
        const data = await user.json();
        setAvatar(data.avatar_url);
    };
    getAvatarUrl();
    return (
        <div className="main">
            <div className="ImgDiv">
                <Image className="mainIMG" src={avatar} />
            </div>
            <div className="BtnDiv">
                <Button variant="primary" className="btn">
                    Click To View The Repos of {name}
                </Button>
            </div>
        </div>
    );
}

export default MainPage;
