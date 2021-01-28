import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
export const Header = () =>{ 
//const x=1;
return(
 <header className="header" data-testid="header">
     <nav>
         <div className="logo">
             <img src="/images/logo.png" alt="Todo" />
         </div>
         <div className="setting">
             <ul>
                 <li>+</li>
                 <li>
                    <FaPizzaSlice/>
                </li>
             </ul>
         </div>
     </nav>
 </header>
);
};