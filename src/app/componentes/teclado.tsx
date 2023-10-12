'use client'

import NumerosBotones from "./numerosBotones"

export default function Teclado({ keyPress, error }: { keyPress?: any, error?: boolean, }) {
    const sendKey = (key: string) => {
        keyPress(key)
    }
    return (
        <div className="mt-4 p-1">
            <div className="flex flex-row justify-between">
                <NumerosBotones className="basis-1/2 bg-red-700" texto="C" keyPress={sendKey} />
                <NumerosBotones className="basis-1/4 bg-red-700" texto="÷" keyPress={sendKey} />
            </div>

            <div className="flex flex-row justify-between">
                <NumerosBotones texto="7" keyPress={sendKey} />
                <NumerosBotones texto="8" keyPress={sendKey} />
                <NumerosBotones texto="9" keyPress={sendKey} />
                <NumerosBotones texto="X" keyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <NumerosBotones texto="4" keyPress={sendKey} />
                <NumerosBotones texto="5" keyPress={sendKey} />
                <NumerosBotones texto="6" keyPress={sendKey} />
                <NumerosBotones texto="-" keyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <NumerosBotones texto="1" keyPress={sendKey} />
                <NumerosBotones texto="2" keyPress={sendKey} />
                <NumerosBotones texto="3" keyPress={sendKey} />
                <NumerosBotones texto="+" keyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <NumerosBotones texto="0" keyPress={sendKey} />
                <NumerosBotones texto="." keyPress={sendKey} />
                <NumerosBotones texto="=" keyPress={sendKey} />
            </div>
        </div>
    )
}