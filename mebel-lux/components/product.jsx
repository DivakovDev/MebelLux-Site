import React from "react"

export default function Product(props){
    return(
        <>
            <div className="prod">
                <img className="prod-img" src={props.img} alt="product image" />
                  <h4 className="prod-title">{props.title}</h4>            
            </div>
        </>
    )
}