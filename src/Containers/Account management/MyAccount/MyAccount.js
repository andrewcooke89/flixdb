import React, { Component} from 'react';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';
import classes from './MyAccount.module.css';

class MyAccount extends Component {
    render() {

        
        return (
            <div>
                <NavBar />
                    <main style={{marginTop: "10rem"}}>
                        <div className={classes.myAccount__btn_container}>
                            <button className={classes.myAccount_list_links}>My Favourites</button>
                            <button className={classes.myAccount_list_links}>My Watch List</button>
                            <button className={classes.myAccount_list_links}>My Created Lists</button>
                        </div>
                    </main>
                <Footer />
            </div>
        );
    };
};

export default MyAccount;