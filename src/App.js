import React from 'react';
import Header from "./components/Header";
import TabContent from "./components/TabContent"
import "./styles/app.css"

class App extends React.Component {
  state = {
    about:true,
    skills: false,
    projects: false,
    contact: false
  }

  showAbout = () => {
    this.setState(
      {
        about: true,
        skills: false,
        projects: false,
        contact: false
      }
    )
  }

  showSkills = () => {
    this.setState(
      {
        about: false,
        skills: true,
        projects: false,
        contact: false
      }
    )
  }

  showProjects = () => {
    this.setState(
      {
        about: false,
        skills: false,
        projects: true,
        contact: false
      }
    )
  }

  showContact = () => {
    this.setState(
      {
        about: false,
        skills: false,
        projects: false,
        contact: true
      }
    )
  }

  render() {
    return (
      <div className="app">
        <Header
          name="Carlos Diaz"
          title="Web Developer"
          showAbout={this.showAbout}
          showSkills={this.showSkills}
          showProjects={this.showProjects}
          showContact={this.showContact}
        />
        <TabContent
          about={this.state.about}
          skills={this.state.skills}
          projects={this.state.projects}
          contact={this.state.contact}
        />
      </div>
    );
  }
}

export default App;
