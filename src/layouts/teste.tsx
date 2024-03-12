import { useState } from 'react'

const teste = () => {
      const [isOpen, setIsOpen] = useState(false);
  
      const toggleDropdown = () => {
            setIsOpen(!isOpen);
      };
  return (
    <div className="App">
      <div className="dropdown">
        <button onClick={toggleDropdown}>Dropdown</button>
        {isOpen && (
          <div className="dropdown-content">
            <p>Informação 1</p>
            <p>Informação 2</p>
            <p>Informação 3</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default teste