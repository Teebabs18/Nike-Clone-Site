import { div } from "framer-motion/client"
import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"
import {motion} from "framer-motion"

export const SlideLeft = (delay) =>{
  return{
    initial: {
      opacity: 0, x: 100, 
    }, 
    animate:{
      opacity: 1, x: 0,

      transition:{
        duration: 0.3,
        delay: delay,
        ease: "easeInOut"
      },
    }
  }
}
const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <motion.div variants={SlideLeft} 
        initial={{y:0, opacity:0}} 
        animate={{y:50, opacity:1}} 
        transition={{duration:0.5, delay:0.2, ease:"easeInOut"}} className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span>  Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">
          Experience top-notch quality and sttle with our sought-after selection. Discover a world of comfort, design and value
        </p>
      </motion.div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
      {
        products && products.map((product, index) => (
          <motion.div 
          variants={SlideLeft(product.delay)}
          initial="initial"
          whileInView = {"animate"}
          viewport = {{once: false}}>
            <PopularProductCard key={product.name} {...product}/>
          </motion.div>
          
        ))
      }
      </div>
    </section>
  )
}

export default PopularProduct