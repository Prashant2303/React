import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    render(){
        
        if(this.props.dish!=null){

            //let comments = null;

            function renderComments(array){

                if(array.length!==0)
                {
                    console.log("Not null");
                    const commentList = array.map((comment_one) => {
                        return (
                            <div key = {comment_one.id} className = 'col-12 col-md-12 m-3'>
                                <list className='list-unstyled'>
                                    <p>{comment_one.comment}</p>
                                    <p>-- {comment_one.author} , {comment_one.date}</p>
                                </list>
                            </div>
                        );
                    });

                    return(
                        <div>
                            <h4>Comments</h4>
                            {commentList}
                        </div>
                    )
                }
                else
                {
                    console.log("no comment")
                    return(
                        <div className="nocomment">No comments</div>
                    )
                }
            }

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
                    <div className='col-12 col-md-5 m-1'>
                        {renderComments(this.props.dish.comments)}
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