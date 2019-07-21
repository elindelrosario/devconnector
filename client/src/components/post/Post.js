import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPostById } from "../../actions/post";
import PostCommentItem from "./PostCommentItem";
import PostCommentForm from "./PostCommentForm";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";

const Post = ({ match, post: { post, loading }, getPostById }) => {
  useEffect(() => {
    getPostById(match.params.post_id);
  }, [getPostById, match.params.post_id]);
  return !loading && post !== null ? (
    <Fragment>
      <Link to="/posts" className="btn">
        Back to Posts
      </Link>
      <PostItem post={post} showActions={false} />

      <PostCommentForm post={post} />

      <div className="comments">
        {post.comments.length > 0 ? (
          post.comments.map((comment, index) => (
            <PostCommentItem key={index} postId={post._id} comment={comment} />
          ))
        ) : (
          <p>No comments.</p>
        )}
      </div>
    </Fragment>
  ) : (
    <Spinner />
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPostById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPostById }
)(Post);
