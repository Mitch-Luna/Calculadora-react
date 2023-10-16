'use client'
export default function NumerosBotones({
    texto,
    keyPress,
    error,
    className,

}: {
    texto: string
    keyPress?: any
    error?: boolean
    className?: any
}) 
{
    const sendKey = (key: string) => {
        keyPress(key)
    }
    return (
        <div
         className="numeros"
            onClick={(e) => {
                sendKey(texto)
            }}
        >
            <div className="h-36 font-bold text-3xl  flex flex-col justify-center text-white text-center bg-red-700">
                <span>{texto}</span>
            </div>

        </div>
        
    )
}