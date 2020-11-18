import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, Media } from 'reactstrap';

class DishDetail extends Component{

    render(){
        
        if(this.props.dish!=null){

            // const comments;

            // function renderComments(array){
            //     let array = this.props.dish.comments;
            //     if(array!=null)
            //     {

            //     }
            //     else
            //     {
            //         comments = null; 
            //     }
            // }
            const comments = this.props.dish.comments.map((comment_one) => {
                return (
                    <div key = {comment_one.id} className = 'col-12 col-md-12 m-3'>
                        <h6>{comment_one.author}</h6>
                        <p>{comment_one.comment}</p>
                        <p>{comment_one.date}</p>
                        <p>{comment_one.rating}</p>
                    </div>
                );
            });

            return(
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width='100%' src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='column'>
                        {comments}
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