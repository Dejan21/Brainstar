import React, { Component } from 'react';
import  { Link, NavLink} from 'react-router-dom';

// import ModalBootstrap from '../ModalBootstrap';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            fromOutside: false,
            checked:false,
        };
    }

    openModal = () => this.setState({ isOpen: true })
    closeModal = () => this.setState({ isOpen: false });
    handleSubmit = (e) => {
        e.preventDefault();
    }

    check = () => {
        this.setState({
            checked:!this.state.checked
        })
    }

    unCheck = () => {
        this.setState({
            checked:false
        })
    }

    fromOutsite = () => {
        this.setState({ fromOutside: true })
    }
    fromHome = () => {
        this.setState({ fromOutside: false })
    }

    


    render() {
        return (
            <div className="Navbar">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                        <NavLink className="text text-bold m-4 card-line navlink" to="/nastani" onClick={() => {this.fromOutsite();this.unCheck()}}>НАСТАНИ</NavLink>
                        <NavLink className='text text-bold m-4 card-line navlink' to="/co_working" onClick={() => {this.fromOutsite();this.unCheck()}}>CO_WORKING</NavLink> 
                        <NavLink className='text text-bold m-4 card-line navlink' to="/akademii" onClick={() => {this.fromOutsite();this.unCheck()}}>АКАДЕМИИ</NavLink> 
                        <NavLink className='text text-bold m-4 card-line navlink' to="/prostor za nastani" onClick={() => {this.fromOutsite();this.unCheck()}}>ПРОСТОР ЗА НАСТАНИ</NavLink> 
                        <NavLink className='text text-bold m-4 card-line navlink' to="/partnertsva" onClick={() => {this.fromOutsite();this.unCheck()}}>ПАРТНЕРСТВА</NavLink> 

                       {/* <ModalBootstrap handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit} > <InovationsForm></ModalBootstrap> :null} */}
                        <button className="black-button-navbar ml-lg-auto main-button" onClick={this.openModal}> + ПРИКЛУЧИ СЕ</button>
                    
                    
                         
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;

