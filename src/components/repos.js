import React from "react";
import RepoCard from "./repoCard";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Repos = (props) => {
    const data = props.list;
    let r = [];
    for (let i = 0; i < data.length / 5; i++) {
        r.push(data.slice(i * 5, (i + 1) * 5));
    }
    return (
        <div style={{}}>
            {r.map((d) => {
                return (
                    <div style={{ display: "flex" }}>
                        {d.map((elmnt, index) => {
                            return (
                                <RepoCard
                                    key={index}
                                    name={elmnt.name}
                                    description={elmnt.description}
                                    repo_url={elmnt.html_url}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Repos;
