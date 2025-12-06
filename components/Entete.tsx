interface EnteteProps {
    span?: string
    title: string
    subtitle?: string
    bgSpan: string
    textSpan?: string
    justify: string
    border? :string
}
export default function Entete({span,title,subtitle,bgSpan,textSpan, border, justify}:EnteteProps) {
    return(
        <div className={`w-full flex flex-col items-${justify} gap-5`}>
            {span && <span className={`w-max border-2 px-6 py-.5 ${border} rounded-2xl t${textSpan} text-${justify} ${bgSpan} `}>{span}</span>}
            <h3 className={`font-semibold text-5xl text-${justify} text-shadow-md ${justify == "center" ? "lg:w-1/2 px-4":"w-full"} `}>{title}</h3>
            {subtitle && <p className={`text-${justify} text-lg ${justify == "center" ? "lg:w-1/2 px-4 ":"w-full"} `} >{subtitle}</p>}
        </div>
    )
}