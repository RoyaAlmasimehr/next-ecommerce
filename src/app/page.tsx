import BehindTheArt from "@/components/BehidTheArt"
import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Quality from "@/components/Quality"

import ShopByDesign from "@/components/ShopByDesign"
import Slider from "@/components/slider"
import Subscription from "@/components/Subscription"

const HomePage = () => {
  return (
    <div className=''>
      <Slider  />
      <ProductList />
      <CategoryList />
     <ShopByDesign />
     <Quality />
     <BehindTheArt />
     <Subscription />
    </div>
  )
}

export default HomePage