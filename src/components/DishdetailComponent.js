import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
function DishDetail(props) {

    if (props.dish != null) {

        //let comments = null;

        function renderComments(array) {

            if (array.length !== 0) {
                console.log("Not null");
                const commentList = array.map((comment_one) => {
                    return (
                        <div key={comment_one.id} className='col-12 col-md-12 m-3'>
                            <list className='list-unstyled'>
                                <p>{comment_one.comment}</p>
                                <p>-- {comment_one.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment_one.date)))}</p>
                            </list>
                        </div>
                    );
                });

                return (
                    <div>
                        <h4>Comments</h4>
                        {commentList}
                    </div>
                )
            }
            else {
                console.log("no comment")
                return (
                    <div className="nocomment">No comments</div>
                )
            }
        }

        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'> Home </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to='/menu'> Menu </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width='100%' src={props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {renderComments(props.comments)}
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;