import { useEffect, useState } from 'react'
import './App.css'

function App(){
  const [theme, setTheme] = useState("light");
  const [band1, setBand1] = useState("negro");
  const [band2, setBand2] = useState("negro");
  const [band3, setBand3] = useState("negro");
  const [tolerance, setTolerance] = useState("oro");

  useEffect (() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Valores de colores para resistencias
  const colorValues = {
    negro: { value: 0, color: '#000000' },
    marron: { value: 1, color: '#8B4513' },
    rojo: { value: 2, color: '#FF0000' },
    naranja: { value: 3, color: '#FFA500' },
    amarillo: { value: 4, color: '#FFFF00' },
    verde: { value: 5, color: '#008000' },
    azul: { value: 6, color: '#0000FF' },
    violeta: { value: 7, color: '#8A2BE2' },
    gris: { value: 8, color: '#808080' },
    blanco: { value: 9, color: '#FFFFFF' }
  };

  const multiplierValues = {
    negro: { multiplier: 1, color: '#000000' },
    marron: { multiplier: 10, color: '#8B4513' },
    rojo: { multiplier: 100, color: '#FF0000' },
    naranja: { multiplier: 1000, color: '#FFA500' },
    amarillo: { multiplier: 10000, color: '#FFFF00' },
    verde: { multiplier: 100000, color: '#008000' },
    azul: { multiplier: 1000000, color: '#0000FF' },
    violeta: { multiplier: 10000000, color: '#8A2BE2' },
    oro: { multiplier: 0.1, color: '#FFD700' },
    plata: { multiplier: 0.01, color: '#C0C0C0' }
  };

  const toleranceValues = {
    marron: { tolerance: '±1%', color: '#8B4513' },
    rojo: { tolerance: '±2%', color: '#FF0000' },
    oro: { tolerance: '±5%', color: '#FFD700' },
    plata: { tolerance: '±10%', color: '#C0C0C0' }
  };

  // Calcular valor de resistencia
  const calculateResistance = () => {
    const firstDigit = colorValues[band1].value;
    const secondDigit = colorValues[band2].value;
    const multiplier = multiplierValues[band3].multiplier;
    
    const baseValue = (firstDigit * 10 + secondDigit) * multiplier;
    
    // Formatear el valor
    if (baseValue >= 1000000) {
      return `${(baseValue / 1000000).toFixed(1)}MΩ`;
    } else if (baseValue >= 1000) {
      return `${(baseValue / 1000).toFixed(1)}kΩ`;
    } else {
      return `${baseValue}Ω`;
    }
  };

  return (
    <div className="App">
      <button onClick={toggleTheme} className="theme-toggle">
        Cambiar a {theme === "light" ? "dark" : "light"} mode
      </button>
      
      <h1>Calculadora de Resistencias</h1>
      <p>Selecciona los colores de las bandas para calcular el valor</p>
      
      <div className="resistor-container">
        <div className="resistor">
          <div 
            className="band band1" 
            style={{ backgroundColor: colorValues[band1].color }}
          ></div>
          <div 
            className="band band2" 
            style={{ backgroundColor: colorValues[band2].color }}
          ></div>
          <div 
            className="band band3" 
            style={{ backgroundColor: multiplierValues[band3].color }}
          ></div>
          <div 
            className="band band4" 
            style={{ backgroundColor: toleranceValues[tolerance].color }}
          ></div>
        </div>
      </div>

      <div className="controls">
        <div className="color-selector">
          <label>Primera Banda:</label>
          <select value={band1} onChange={(e) => setBand1(e.target.value)}>
            {Object.keys(colorValues).map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>

        <div className="color-selector">
          <label>Segunda Banda:</label>
          <select value={band2} onChange={(e) => setBand2(e.target.value)}>
            {Object.keys(colorValues).map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>

        <div className="color-selector">
          <label>Multiplicador:</label>
          <select value={band3} onChange={(e) => setBand3(e.target.value)}>
            {Object.keys(multiplierValues).map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>

        <div className="color-selector">
          <label>Tolerancia:</label>
          <select value={tolerance} onChange={(e) => setTolerance(e.target.value)}>
            {Object.keys(toleranceValues).map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="result">
        <h2>Valor: {calculateResistance()}</h2>
        <p>Tolerancia: {toleranceValues[tolerance].tolerance}</p>
      </div>
    </div>
  );
}

export default App  