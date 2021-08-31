import React, {Component} from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import resumeData from "./data/resume.json";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resumeData: resumeData
        };
    }

    render() {
        return (
            <div>
                <Header sharedData={this.state.resumeData.basic_info}/>
                <About resumeBasicInfo={this.state.resumeData.basic_info}/>
                <Projects
                    resumeProjects={this.state.resumeData.projects}
                    resumeBasicInfo={this.state.resumeData.basic_info}
                />
                <Skills
                    sharedSkills={this.state.resumeData.skills}
                    resumeBasicInfo={this.state.resumeData.basic_info}
                />
                <Experience
                    resumeExperience={this.state.resumeData.experience}
                    resumeBasicInfo={this.state.resumeData.basic_info}
                />
                <Footer sharedBasicInfo={this.state.resumeData.basic_info}/>
            </div>
        );
    }
}

export default App;
