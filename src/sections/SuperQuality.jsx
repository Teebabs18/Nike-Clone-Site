import {shoe8} from "../assets/images"

const SuperQuality = () => {
  // const textProp = {color:"red", fontSize: "20px"} This is how to write internal css inside react
  return (
    <div>
      <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full ">

        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
            We Provide You 
            <span className="text-coral-red"> Super</span> 
            <span className="text-coral-red"> Quality</span> Shoes
          </h2>

          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulous crafted footwares are designed to elevate your experience, providing you with unmatched quality innovation and a touch of elegance.
          </p>

          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to details ensures your satisfaction. 
          </p>

          <div className="mt-11">
            <button type="button" className="coral-btn">View Details </button>

          </div>
        </div>


        <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="Product Details" width= {570} height={522} className="object-contain" />
        </div>


      </section>
    </div>
  )
}

export default SuperQuality
