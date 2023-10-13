'use client'

import { useState } from "react"
import Pantalla from "./pantalla"
import Teclado from "./teclado"

export default function Calculadora (){
    const [texto, setTexto] = useState('')

    const pressCancelar = () =>{
        setTexto('')
    }
    const pressSuma =()=>{
        texto + texto
    }
    const pressEnter =(texto: number)=>{
       pressSuma()
    }

    const sendKey = (key: string) => {

        if (key === 'C') {
            pressCancelar()
            return
          }
        if (key === '+') {
            pressSuma()
            return
          }
        
        if (key === '=') {
            pressEnter(parseInt(texto))
            return
          }
        
        setTexto(texto + key)
        }
    return(
        <div className="border p-1 bg-gray-300">
            <div className=" p-5 bg-slate-800">
                <Pantalla texto={texto}/>
                <Teclado keyPress={sendKey}/>
            </div>
        </div>
    )
}