'use client'
import NumerosBotones from "./numerosBotones"

export default function Teclado({ keyPress, error, color, zise, border}: { keyPress?: any, error?: boolean, color?: string, zise?: string, border?: string}) {
    const sendKey = (key: string) => {
        keyPress(key)
    }
    return (
        <div className="">
            <div className="flex flex-row justify-between">
                <NumerosBotones color="bg-stone-500" zise="basis-5/6" texto="C" keyPress={sendKey} />
                <NumerosBotones color="bg-orange-400" zise="basis-1/4" texto="÷" keyPress={sendKey} />
            </div>

            <div className="flex flex-row justify-between">
                <NumerosBotones texto="7" keyPress={sendKey} />
                <NumerosBotones texto="8" keyPress={sendKey} />
                <NumerosBotones texto="9" keyPress={sendKey} />
                <NumerosBotones color="bg-orange-400"  texto="X" keyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <NumerosBotones texto="4" keyPress={sendKey} />
                <NumerosBotones texto="5" keyPress={sendKey} />
                <NumerosBotones texto="6" keyPress={sendKey} />
                <NumerosBotones color="bg-orange-400"  texto="-" keyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <NumerosBotones texto="1" keyPress={sendKey} />
                <NumerosBotones texto="2" keyPress={sendKey} />
                <NumerosBotones texto="3" keyPress={sendKey} />
                <NumerosBotones color="bg-orange-400"  texto="+" keyPress={sendKey} />
            </div>
            <div className="flex flex-row justify-between">
                <NumerosBotones zise="basis-1/2" border="rounded-bl-lg" texto="0" keyPress={sendKey} />
                <NumerosBotones  zise="basis-1/4" texto="." keyPress={sendKey} />
                <NumerosBotones border="rounded-br-lg" color="bg-orange-400"  zise="basis-1/4" texto= "=" keyPress={sendKey} />
            </div>
        </div>
    )
}