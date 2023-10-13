'use client'
let showRecarga: boolean = true
export default function Pantalla({texto}: {texto?: string}){
    return(
        <div className="">
            <div className=" p-20 h-6 text-5xl text-white text-right">
            <span>{texto}</span>
            </div>
        </div>
    )
}