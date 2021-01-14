import React from "react"

export function H1({ children, classType }){
    return (
        <h1 className={classType}>{children}</h1>
    )
}

export function H2({ children, classType }){
    return (
        <h2 className={classType}>{children}</h2>
    )
}

export function H3({ children, classType }){
    return (
        <h3 className={classType}>{children}</h3>
    )
}