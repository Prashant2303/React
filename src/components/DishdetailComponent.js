import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, Media } from 'reactstrap';

class DishDetail extends Component{

    render(){
        
        if(this.props.dish!=null){

            const comments = this.props.dish.comments.map((comment_one) => {
                return (
                    <div key = {comment_one.id} className = 'col-12 col-md-2 m-3'>
                        <h4>{comment_one.author}</h4>
                    </div>
                );
            });

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
                    <Media list>{comments}</Media>
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