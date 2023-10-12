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
}) {
    const sendKey = (key: string) => {
        keyPress(key)
    }
    return (
        <div
            className="borde bg-gradient-to-t from-gray-600  w-1/2 m-1 flex flex-col items-center hover:cursor-pointer hover:bg-gray-700"
            onClick={(e) => {
                sendKey(texto)
            }}
        >
            <div className="h-36 font-bold text-3xl  flex flex-col justify-center text-white">
                <span>{texto}</span>
            </div>

        </div>
    )
}