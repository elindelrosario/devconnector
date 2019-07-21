import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { likePost, unlikePost, deletePost } from "../../actions/post";

const PostItem = ({
  post: { _id, name, avatar, text, date, user, likes, comments },
  auth,
  likePost,
  unlikePost,
  deletePost,
  showActions
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="Avatar" />
          <h4>{name}</h4>
          <p className="post-date">
            Posted on <Moment format="DD MMM YYYY">{date}</Moment>
          </p>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        {showActions && (
          <Fragment>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => likePost(_id)}
            >
              <i className="fas fa-thumbs-up" /> <span>{likes.length}</span>
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => unlikePost(_id)}
            >
              <i className="fas fa-thumbs-down" />
            </button>
            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion{" "}
              <span className="comment-count">{comments.length}</span>
            </Link>
            {!auth.loading && auth.user._id === user && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deletePost(_id)}
              >
                <i className="fas fa-times" />
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { likePost, unlikePost, deletePost }
)(PostItem);
