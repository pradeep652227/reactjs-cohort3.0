/* eslint-disable react/prop-types */
export default function Container({children,className}){
    return <div className={`max-w-7xl w-full mx-auto px-4 ${className}`}>
        {children}
    </div>
}