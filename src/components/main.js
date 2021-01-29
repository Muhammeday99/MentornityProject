import React, { useState } from "react";
import Repos from "./repos";
import { Card, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/main.css";

const MainPage = (props) => {
    const name = props.name;
    const [data, setData] = useState();
    const [avatar, setAvatar] = useState();
    const [isClicked, setIsClicked] = useState(false);

    const getData = async () => {
        const user = await fetch("https://api.github.com/users/" + name, {
            method: "GET",
        });
        const repos_url = await fetch(
            "https://api.github.com/users/" + name + "/repos",
            {
                method: "GET",
            }
        );
        const repos = await repos_url.json();
        const _data = await user.json();
        setData(repos);
        setAvatar(_data.avatar_url);
    };

    const handleBtnClick = () => {
        setIsClicked(true);
    };

    if (data == undefined) getData();
    if (!isClicked) {
        return (
            <div className="main">
                <div className="ImgDiv">
                    <Image className="mainIMG" src={avatar} />
                </div>
                <div className="BtnDiv">
                    <Button
                        variant="primary"
                        className="btn"
                        onClick={handleBtnClick}
                    >
                        Click To View The Repos of {name}
                    </Button>
                </div>
            </div>
        );
    } else {
        return <Repos list={data} />;
    }
};

export default MainPage;
