import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/post";

const PostCommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  deleteComment,
  auth
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
        {!auth.loading && auth.user._id === user && !auth.loading && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteComment(postId, _id)}
          >
            <i className="fas fa-times" />
          </button>
        )}
      </div>
    </div>
  );
};

PostCommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(PostCommentItem);
