import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish = () => {
    const { selectedDish: dish } = this.props;
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  };

  renderComments = () => {
    const { comments } = this.props.selectedDish;
    if (comments !== null) {
      return (
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li>
                <div>{comment.comment}</div>
                <div>
                  <p>
                    -- {comment.author} {comment.date}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      );
    } else return <div></div>;
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish()}</div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

export default DishDetail;
