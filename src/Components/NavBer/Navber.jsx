import { useState } from "react";
import Links from "../Link/Links";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";


const Navber = () => {


    const routes =[
        { "id": 1, "name": "Home", "path": "/" },
        { "id": 2, "name": "About", "path": "/about" },
        { "id": 3, "name": "Services", "path": "/services" },
        { "id": 4, "name": "Contact", "path": "/contact" },
        { "id": 5, "name": "Blog", "path": "/blog" }
      ]
      
      const[isToggle, setIsToggle] = useState(false);

      const handleToggle =() =>{
        setIsToggle(!isToggle);
      }


    return (
        <nav>
            <div className="md:hidden">
            {isToggle ? <RxCross1 onClick={handleToggle} className=""></RxCross1>:
            <IoMenu onClick={handleToggle} className=" " />
            }
            </div>
            <ul className={`md:flex absolute md:static duration-1000 ${isToggle ? " top-5" : "-top-52"} bg-yellow-200 p-1.5 ml-0.5 `}
            >
                {routes.map(route => <Links key={route.id}
                 route={route}></Links>)}

                

            </ul>
            
        </nav>
            
        
    );
};

export default Navber;