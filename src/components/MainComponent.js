import Menu from './MenuComponent';
import React, { Component } from 'react';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponenet';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import About from '../components/AboutComponent';

const mapStateToProps = state => {
    return{
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions 
    }
}
class Main extends Component {

    constructor(props) {
        super(props);

    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }
    
    render() {

        const HomePage = () => {
            return(
                <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
                promotion={this.props.promotions.filter((promo)=> promo.featured)[0]}
                    leader={this.props.leaders.filter((leader)=> leader.featured)[0]}
                />
            )
        }

        //match is one if the 3 props returned by Route
        const DishWithId = ({match}) => {
            return(
                <DishDetail dish = {this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} comments = {this.props.comments.filter((comments) => comments.dishId === parseInt(match.params.dishId,10))}/>
            )
        }
        return (
            <div>
                < Header />
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>} />
                    <Route path='/aboutus' component={() => <About leaders={this.props.leaders}/>} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Redirect to='/home' />
                </Switch>
                < Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
