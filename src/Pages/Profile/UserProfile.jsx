import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import 'animate.css';


const UserProfile = () => {
    const { user } = useContext(AuthContext)


    return (
        <div className="relative">
            <Helmet>
                <title>
                    DH | User Profile
                </title>
            </Helmet>

            <img className="h-[300px] w-full" src="https://i.ibb.co/SNGT9By/vecteezy-blurred-water-background-2030333.jpg" alt="" />

            <div className="animate__animated animate__zoomInDown absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2 shrink-0 shadow-2xl max-w-md  sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={user.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{user.displayName}</h2>

                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            <span className="dark:text-gray-600">{user.email}</span>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;