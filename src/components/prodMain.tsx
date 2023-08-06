import Product from "./product"

export default function Main(){
    return(
        <>
            <main className="product-section">
                <Product
                    img="./images/background1.png"
                    title="Спални"
                />   
                <Product
                    img="./images/kitchen.jpg"
                    title="Кухни"
                />              
                <Product
                    img="./images/weardrop.jpg"
                    title="Гардероби"
                />  
                <Product
                    img="./images/bedtables.jpg"
                    title="Нощни шкафчета"
                />              
                <Product
                    img="./images/desks.jpg"
                    title="Бюра"
                /> 
                <Product
                    img="./images/antre.jpg"
                    title="Антрета"
                />              
            </main>
        </>  
    )
}