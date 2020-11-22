import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import React, { Component } from 'react';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponenet';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import About from '../components/AboutComponent';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            // selectedDish: null
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        }
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }
    
    render() {

        const HomePage = () => {
            return(
                <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
                promotion={this.state.promotions.filter((promo)=> promo.featured)[0]}
                    leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
                />
            )
        }

        //match is one if the 3 props returned by Route
        const DishWithId = ({match}) => {
            return(
                <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} comments = {this.state.comments.filter((comments) => comments.dishId === parseInt(match.params.dishId,10))}/>
            )
        }
        return (
            <div>
                < Header />
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>} />
                    <Route path='/aboutus' component={() => <About leaders={this.state.leaders}/>} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Redirect to='/home' />
                </Switch>
                < Footer />
            </div>
        );
    }
}

export default Main;
