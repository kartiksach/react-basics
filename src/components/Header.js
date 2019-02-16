//Make components as stateless components if states are not needed!

import React  from 'react';

export const Header = (props) => {
        return(
            <nav className='navbar'>
                <div className='container'>
                    <div className='navbar-header'>
                        <ul>
                            <li><a href='#'>{props.homeLink}</a></li>
                            <li><a href='#'>RESOURCES</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        ); 
    };
