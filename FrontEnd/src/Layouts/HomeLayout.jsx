import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/footer";
import {useDispatch, useSelector} from 'react-redux';


function HomeLayout({children}){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // for checking use is logged in or not

    // const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
    const isLoggedIn = false;

    // for displaying the options
    // const role = useSelector((state)=> state.auth.role);
    const role = "USER";

    function changeWidth(){
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto' 
    }

    function hideDrawer(){
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false; 
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }

    async function handleLogout(e) {
        e.preventDefault();
        const res = await dispatch(logoutFromAccount());
        if (res?.payload?.success) {
          navigate("/");
        }
    }


    return(
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-fit">
                <input className="drawer-toggle" type="checkbox" id="my-drawer"/>
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FiMenu
                            onClick={changeWidth}
                            size={"32px"} 
                            className=" text-3xl font-bold text-white m-4"
                        />
                    </label>
                </div> 

                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className="drawer-overlay">
                    </label>
                    <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
                        <li className="w-fit absolute right-2 z-50">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24}/>
                            </button>
                        </li>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>

                        {isLoggedIn && role==='ADMIN' && (
                            <li>
                               <Link to={"/admin/dashboard"}> Admin Dashboard</Link>
                            </li>
                        )}

                        {isLoggedIn && role==='ADMIN' && (
                            <li>
                               <Link to={"/courses/create"}>Create New Course</Link>
                            </li>
                        )}
                        <li>
                            <Link to={"/products"}>All Products</Link>
                        </li>

                        <li>
                            <Link to={"/contact"}>Contact Us</Link> 
                        </li>
                        <li>
                            <Link to={"/about"}>About Us</Link>
                        </li>
                        {!isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <button className="btn btn-primary px-4 py-1 font-semibold rounded-md w-1/2 text-center" onClick={() => navigate("/login")}>
                                        Login
                                    </button>
                                    <button className="btn btn-secondary px-4 py-1 font-semibold rounded-md w-1/2 text-center" onClick={() => navigate("/signup")}>
                                        SignUp
                                    </button>
                                </div>
                            </li>
                        )}

                        {isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <button className="btn btn-primary px-4 py-1 font-semibold rounded-md w-1/2 text-center" onClick={() => navigate("/user/profile")}>
                                        Profile
                                    </button>
                                    <button className="btn btn-secondary px-4 py-1 font-semibold rounded-md w-1/2 text-center" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            </li>
                        )}

                        
                    </ul>
                </div>
            
            </div>

            

            {children}

            <Footer/>
        </div>
    )
}

export default HomeLayout;