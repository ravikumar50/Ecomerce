import HomeLayout from "../Layouts/HomeLayout"
import HomePageImage from "../Assets/Images/homePageMainImage.png"
import { Link } from "react-router-dom"
function HomePage(){
    return(
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-4xl font-semibold">
                        Find out best &nbsp;
                        <span className="text-yellow-500 font-bold"> 
                            Online Products
                        </span>
                    </h1>

                    <p className="text-xl text-gray-200">
                        We hava a large number of products from all over the world which meets your quality at an affordable price. Get the products delivered at your place in a easy way.
                    </p>

                    <div className="space-x-6">
                        <Link to={"/products"}>
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore Products
                            </button>
                        </Link>
                        <Link to={"/contact"}>
                            <button className="border border-yellow-50 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                    <img src={HomePageImage} alt="Home Page Image" />
                </div>


            </div>
        </HomeLayout>
    )
}

export default HomePage