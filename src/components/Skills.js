import React, {Component} from "react";
import {Icon} from "@iconify/react";
import {skillIcons} from "../util";


class Skills extends Component {
    render() {
        let sectionName = this.props.resumeBasicInfo.section_name.skills;
        let skills = [];
        // flatten
        this.props.sharedSkills.icons.forEach(skillsGroup => {
            skillsGroup.forEach(skill => {
                skills.push(skill);
            });
        });
        // sort
        skills.sort((x, y) => x.name > y.name ? 1 : -1)

        return (
            <section id="skills">
                <div className="row center">
                    <div className="col-md-12">
                        <h1 className="section-title">
                            <span className="text-white">{sectionName}</span>
                        </h1>
                    </div>
                    <div className="col-md-8">
                        <ul className="list-inline mx-auto skill-icon">
                            {
                                skills.map((skill, i) => {
                                    return (
                                        <li className="list-inline-item mx-3" key={i}>
                                            <span>
                                                <div className="text-center skills-tile">
                                                    <i className={skill.class} style={{fontSize: "220%"}}>
                                                        {
                                                            skill.customIcon ?
                                                                skillIcons[skill.icon] :
                                                                <Icon
                                                                    icon={skillIcons[skill.icon]}
                                                                    style={{fontSize: "100%", margin: "9% 5% 0 5%"}}
                                                                />
                                                        }
                                                        <p
                                                            className="text-center"
                                                            style={{fontSize: "30%", marginTop: "4px"}}
                                                        >
                                                            {skill.name}
                                                        </p>
                                                    </i>
                                                </div>
                                            </span>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
