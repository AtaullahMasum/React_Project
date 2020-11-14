import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component{

    constructor(props){
        super(props);
    }

    renderDish(dish){
       
       
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
        
    }

    renderComments(comments){
        
        if( comments != null){
            const commentsMenu = comments.map((comment) => {
               
                return(
                    <ul className = "list-unstyled">
                        <li>
                            <p>{comment.comment}</p>
                            <p>{comment.author} </p>
                        </li>

                    </ul>
                    
                );
            
            });

            return commentsMenu;
        }else{
            return(
                <div></div>
            );
        }

    }

    render(){

        if( this.props.dish != null){
            return(
                
                <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                    {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
                
            );
        }else{
            return(
                <div></div>
            );
        }
        
    }
}

export default DishDetail;