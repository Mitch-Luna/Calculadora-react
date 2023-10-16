'use client'

import { useState } from "react"
import Pantalla from "./pantalla";
import Teclado from "./teclado";

export default function Calculadora() {
  const [texto, setTexto] = useState<string>("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [operador, setOperador] = useState<string | null>(null);

  const pressCancelar = () => {
    setTexto("");
    setResultado(null);
    setOperador(null);
  };

  const pressOperador = (nuevoOperador: string) => {
    if (operador && texto !== "") {
      calcularResultado();
    } else {
      setResultado(parseFloat(texto));
    }
    setTexto(""); // Limpiar el texto al seleccionar un operador
    setOperador(nuevoOperador);
  };

  const calcularResultado = () => {
    if (operador && texto !== "") {
      const valorTexto = parseFloat(texto);
      if (!isNaN(valorTexto)) {
        if (operador === "+") {
          setResultado(resultado! + valorTexto);
        } else if (operador === "-") {
          setResultado(resultado! - valorTexto);
        } else if (operador === "X") {
          setResultado(resultado! * valorTexto);
        } else if (operador === "÷") {
          if (valorTexto !== 0) {
            setResultado(resultado! / valorTexto);
          } else {
            setResultado(null);
          }
        }
        
        setTexto(resultado!.toString());
        setOperador(null);
      }
    }
  };

  const sendKey = (key: string) => {
    if (key === 'C') {
      pressCancelar();
    } else if (key === '+') {
      pressOperador("+");
    } else if (key === '-') {
      pressOperador("-");
    } else if (key === 'X') {
      pressOperador("X");
    } else if (key === '÷') {
      pressOperador("÷");
    } else if (key === '=') {
      calcularResultado();
    } else {
      setTexto(texto + key); 
    }
  };

  return (
    <div className="border p-1 bg-gray-300">
      <div className="p-5 bg-slate-800">
        <Pantalla texto={texto || "0"  } resultado={resultado} />
        <Teclado keyPress={sendKey} />
      </div>
    </div>
  );
}
