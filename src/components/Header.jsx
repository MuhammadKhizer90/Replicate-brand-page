import Amazon from '../assets/amazon.png'
import Flipkart from '../assets/flipkart.png'
import Productimage from '../assets/Product-image.png'
function Header() {
  return (
    <div className="main flex max-w-5xl mx-auto my-0 items-center justify-between ">
        <div className="header-content max-w-lg space-y-5">
            <h1 className='font-bold text-7xl max-w-md'>YOUR FEET DESERVE THE BEST</h1>
            <p className='font-medium text-gray-600 max-w-xs text-sm '>Your feet deserve the best we are here to help you with our shoes.Your feet deserve the best we are here to help you with our shoes.</p>
            <div className="header-button flex space-x-5">
                <button className='bg-red-600 px-2 text-white'>Shop Now</button>
                <button className='bg-slate-50 border-solid border-2 border-gray-600 px-2'>Category</button>
            </div>
            <div>
                <p className='text-sm'>Also Available on</p>
                <div className="brand-icons flex space-x-5">
                    <img src={Amazon} alt="Amazon icon" />
                    <img src={Flipkart} alt="Flipcart icon" />
                </div>
            </div>
        </div>
        <div className="product-image max-w-md">
        <img src={Productimage} alt="Product image" />
        </div>

        

    </div>
  )
}

export default Header