import React, { Component } from 'react';
import './DropdownMenu.css'; // Archivo de estilos CSS

export class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuVisible: !prevState.isMenuVisible,
    }));
  };

  render() {
    const { isMenuVisible } = this.state;

    return (
      <div className="dropdown-menu-container">
        <button className="toggle-button" onClick={this.toggleMenu}>
          Mostrar Menú
        </button>
        {isMenuVisible && (
          <div className="dropdown-menu">
            <ul>
              <li>Elemento 1</li>
              <li>Elemento 2</li>
              <li>Elemento 3</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

