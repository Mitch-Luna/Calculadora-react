'use client'
let showRecarga: boolean = true
export default function Pantalla({texto}: {texto?: string}){
    return(
        <div className="">
            <div className=" p-20 h-6 text-2xl ">
            <span>{texto}</span>
            </div>
        </div>
    )
}