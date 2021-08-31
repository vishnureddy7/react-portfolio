import React, {Component} from "react";
import {Icon} from "@iconify/react";
import pythonIcon from "@iconify/icons-logos/python";
import flaskIcon from "@iconify/icons-logos/flask";
import reactIcon from "@iconify/icons-logos/react";


class About extends Component {
    render() {
        let profilePic = "images/" + this.props.resumeBasicInfo.image;
        let sectionName = this.props.resumeBasicInfo.section_name.about;
        let hello = this.props.resumeBasicInfo.description_header;
        let about = this.props.resumeBasicInfo.description;

        return (
            <section id="about">
                <div className="col-md-12">
                    <h1 style={{color: "black"}}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="row center mx-auto mb-5">
                        <div className="col-md-4 mb-5 center">
                            <div className="polaroid">
                                <span style={{cursor: "auto"}}>
                                    <img
                                        height="400px"
                                        src={profilePic}
                                        alt="Avatar placeholder"
                                    />
                                    <Icon
                                        icon={pythonIcon}
                                        style={{fontSize: "300%", margin: "9% 5% 0 5%"}}
                                    />
                                    <Icon
                                        icon={flaskIcon}
                                        style={{fontSize: "300%", margin: "9% 5% 0 5%"}}
                                    />
                                    <Icon
                                        icon={reactIcon}
                                        style={{fontSize: "300%", margin: "9% 5% 0 5%"}}
                                    />
                                </span>
                            </div>
                        </div>

                        <div className="col-md-8 center">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="card-header">
                                        <span
                                            className="iconify"
                                            data-icon="emojione:red-circle"
                                            data-inline="false"
                                        />{" "}
                                        &nbsp;{" "}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:yellow-circle"
                                            data-inline="false"
                                        />{" "}
                                        &nbsp;{" "}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:green-circle"
                                            data-inline="false"
                                        />
                                    </div>
                                    <div
                                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                                        style={{
                                            height: "auto",
                                            fontSize: "132%",
                                            lineHeight: "200%",
                                        }}
                                    >
                                        <br/>
                                        <span className="wave">{hello} :) </span>
                                        <br/>
                                        <br/>
                                        {about}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
