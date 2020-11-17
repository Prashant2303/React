import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    render(){
        
        const comments = this.props.dish.comments;
        
        if(this.props.dish!=null){
            return(
                <div className='row'>
                <Card>
                    <CardImg width='100%' src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        {/* <CardTitle>{dish.name}</CardTitle> */}
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
                <div>
                    
                </div>
                </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;