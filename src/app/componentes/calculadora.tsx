'use client'

import { useState } from "react"
import Pantalla from "./pantalla"
import Teclado from "./teclado"

export default function Calculadora (){
    const [texto, setTexto] = useState('')

    const sendKey = (key: string) => {
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