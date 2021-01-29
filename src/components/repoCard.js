import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RepoCard = (props) => {
    return (
        <Card style={{ margin: 15, width: "20%", height: "30vh" }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Button href={props.repo_url} target="_blank">
                Go to Repo
            </Button>
        </Card>
    );
};

export default RepoCard;
