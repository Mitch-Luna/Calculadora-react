'use client'
export default function NumerosBotones({
    texto,
    keyPress,
    error,
    color,
    zise,
    border,

}: {
    texto: string
    keyPress?: any
    error?: boolean
    color?: string
    zise?: string
    border?: string
}) 
{
    const sendKey = (key: string) => {
        keyPress(key)
    }
    return (
        <div
            className={`bg-gray-400 w-1/3 ml-0.5 mt-1 flex-col items-center hover:cursor-pointer hover:bg-gray-300 border-solid  ${color} ${zise} ${border}`}
            onClick={(e) => {
                sendKey(texto)
            }}
        >
            <div className={`h-36 font-bold text-3xl  flex flex-col justify-center text-white text-center hover:bg-amber-200 rounded-lg ${color} ${zise}`}>
                <span>{texto}</span>
            </div>

        </div>
        
    )
}