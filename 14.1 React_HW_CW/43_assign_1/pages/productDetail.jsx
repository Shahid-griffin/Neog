import { useLoaderData } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";

export async function ProductLoader({params}) {
    const products = [
        {
          id: "1",
          name: "Product 1",
          description:
            "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "$99.99",
          availableColors: ["Red", "Blue", "Green"],
          isReturnApplicable: true,
          productImageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: "2",
          name: "Product 2",
          description:
            "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "$129.99",
          availableColors: ["White", "Black"],
          isReturnApplicable: true,
          productImageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: "3",
          name: "Product 3",
          description:
            "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "$79.99",
          availableColors: ["Yellow"],
          isReturnApplicable: false,
          productImageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: "4",
          name: "Product 4",
          description:
            "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "$49.99",
          availableColors: ["Purple", "Yellow"],
          isReturnApplicable: true,
          productImageUrl: "https://via.placeholder.com/300x200",
        },
      ];

      return products.find((product) => product.id === params.productId)
    
}


export default function ProductDetail(){
    
    const selectedProduct = useLoaderData()
    
    return(
        
        <>
        <Headers />
        <main className="container  pt-3">
        <h1 className="py-2">{selectedProduct.name}</h1>
        <img src={selectedProduct.productImageUrl} alt={selectedProduct.name}/>
        <p className="pt-2">Price: {selectedProduct.price}</p>
        <p>Decription: {selectedProduct.description}</p>
        <p>Available Color: {selectedProduct.availableColors.join(", ")}</p>
        <p>Return Policy: {selectedProduct.isReturnApplicable}</p>
        </main>
        <Footer/>
        </>
    )
}