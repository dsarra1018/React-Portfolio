import React, {Component} from "react";
import "./style.css";

class Header extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();

    e.stopPropagation();
  }

  render() {
    return(
      <div className="header-div">
        <header className="site-header">
          <div className="header-left">
            <button className="menu" onMouseDown={this.props.handleMouseDown}>MENU</button>
          </div>
          <div className="header-center">
            <a href="/"><h1>DARREN <br></br>&ensp;SARRA</h1></a>
          </div>
          <div className="header-right"></div>
        </header>
      </div>
    );
  }
}

export default Header;