'use client'
export default function NumerosBotonesOperadores({
    texto,
    keyPress,
    error,
    className,

}: {
    texto: string
    keyPress?: any
    error?: boolean
    className?: any
}) {
    const sendKey = (key: string) => {
        keyPress(key)
    }
    return (
        <div
        className="operadores"
            onClick={(e) => {
                sendKey(texto)
            }}
        >
            <div className="h-36 font-bold text-3xl  flex flex-col justify-center text-white text-center">
                <span>{texto}</span>
            </div>

        </div>
        
    )
}