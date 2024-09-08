import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider  />
      <ProductList />
      <CategoryList />
    </div>
  )
}

export default HomePage