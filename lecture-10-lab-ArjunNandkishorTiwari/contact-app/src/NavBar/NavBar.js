import React from "react";
import './navbar.scss'


class Navbar extends React.Component{

    constructor(props){
        super(props);
    }

    create(){
        const addContactHandler=this.props.addContactHandler;
        const contact="John Smith";
        addContactHandler(contact);
    }

    render()
    {
            return( <nav>
                <button onClick={this.create.bind(this)}> Add Contact</button>
            </nav>);
    }
    
}

export default Navbar;