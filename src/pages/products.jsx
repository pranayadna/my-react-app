// import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"
import CardProducts from "../components/Fragments/CardProduct"

const ProductsPage = () => {
    return(
        <div className="flex justify-center py-5">
            <CardProducts>
                <CardProduct.Header image="/images/shoes-1.jpg" />
                <CardProduct.Body title="Sepatu baru">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, pariatur possimus aliquam ea quaerat cum reprehenderit sint, voluptatem quam exercitationem a? Assumenda quasi repellat recusandae sint, inventore consequuntur. Sit, corrupti?
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 1.000.000" />
            </CardProducts>
        </div>
    )
}

export default ProductsPage