import {useState} from "react"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import { arrowRight } from "../assets/icons"
import ShoeCard from "../components/ShoeCard"
import {delay, motion} from "framer-motion"


export const FadeUp =  (delay) => {
    return{
      initial: {opacity: 0, y: 50},
      animate: {opacity: 1, y:0,
      transition: {
        type: "spring", 
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut"
      }
    }
  }
}

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (

    <section id="home" className="w-full flex xl:flex-row flex-col min-h-screen max-container">

      <motion.div variants={FadeUp(0.5)} initial="initial" animate="animate" className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:leading-[82px] font-bold">
          <span className="relative z-10 pr-10">
            The New Arrival
          </span><br />

          <span className="text-coral-red inline-block mt-3">
            Nike 
          </span> Shoes
          
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for your life
        </p>

        <button className="coral-btn">
          <span>Shop Now</span>
          <img src={arrowRight} alt="arrow icon " className="pt-1"/>
        </button>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">
                      {stat.value}
                </p>

                <p className="leading-7 font-montserrat text-slate-gray">
                    {stat.label}
                </p>
              </div>
            ))
          }
        </div>
      </motion.div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <motion.img 
            variants={FadeUp(0.5)} initial={{x: 100, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{duration: 0.7, delay: 0.5, ease:"easeInOut"}}
            src={bigShoeImg} alt="shoe collection" width= {610} height = {502} className="object-contain relative z-10" />
      

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:p-6">
          {
            shoes.map((image, index) => (
              <div className="" key={image.thumbnail}>
                <ShoeCard index = {index} imgURL = {image} changeBigShoeImg = {(shoe) => setBigShoeImg (shoe)}
                  bigShoeImg = {bigShoeImg}/>
              </div>
            ))
          }
        </div>
      </div>
    </section>

  
  )
}

export default Hero
