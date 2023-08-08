import React, { useEffect } from "react";
import Product from "../components/product";

function Products() {
  useEffect(() => {
    const handleResize = () => {
      const widthElement = document.getElementById("width");
      if (widthElement) {
        widthElement.innerText = document.body.clientWidth.toString();
        widthElement.classList.add("display-width");
        setTimeout(() => {
          widthElement.classList.remove("display-width");
        }, 2000);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="p-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <Product img="/images/background1.png" title="Спални" id={""} description={""} options={""} href={""} />
        <Product img="/images/kitchen.jpg" title="Кухни" id={""} description={""} options={""} href={""} />
        <Product img="/images/weardrop.jpg" title="Гардероби" id={""} description={""} options={""} href={""} />
        <Product img="/images/bedtables.jpg" title="Нощни шкафчета" id={""} description={""} options={""} href={""} />
        <Product img="/images/desks.jpg" title="Бюра" id={""} description={""} options={""} href={""} />
        <Product img="/images/antre.jpg" title="Антрета" id={""} description={""} options={""} href={""} />
        <Product img="/images/children-beds.jpg" title="Детски легла" id={""} description={""} options={""} href={""} />
        
      </div>
    </section>
  );
}

export default Products;
