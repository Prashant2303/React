import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import React, { Component } from 'react';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponenet';
import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }
    //   const dishesState = useState(DISHES);
    //   const dishes = dishesState[0];

    //   const [selectedDish, setSelectDish] = useState(null);
    render() {
        return (
            <div>
                < Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                < Footer />
            </div>
        );
    }
}

export default Main;
