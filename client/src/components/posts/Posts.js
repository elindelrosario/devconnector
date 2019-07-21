import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import Spinner from "../layout/Spinner";

const Posts = ({ getPosts, post: { post, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <Fragment>
      <h1 class="large text-primary">Posts</h1>
      <p class="lead">
        <i class="fas fa-user" /> Welcome to the community!
      </p>

      <div class="post-form">
        <div class="bg-primary p">
          <h3>Say Something...</h3>
        </div>
        <form class="form my-1">
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a post"
            required
          />
          <input type="submit" class="btn btn-dark my-1" value="Submit" />
        </form>
      </div>

      <div class="posts">
        <div class="post bg-white p-1 my-1">
          <div>
            <a href="profile.html">
              <img
                class="round-img"
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                alt=""
              />
              <h4>John Doe</h4>
            </a>
          </div>
          <div>
            <p class="my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              possimus corporis sunt necessitatibus! Minus nesciunt soluta
              suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
              dolor? Illo perferendis eveniet cum cupiditate aliquam?
            </p>
            <p class="post-date">Posted on 04/16/2019</p>
            <button type="button" class="btn btn-light">
              <i class="fas fa-thumbs-up" />
              <span>4</span>
            </button>
            <button type="button" class="btn btn-light">
              <i class="fas fa-thumbs-down" />
            </button>
            <a href="post.html" class="btn btn-primary">
              Discussion <span class="comment-count">2</span>
            </a>
            <button type="button" class="btn btn-danger">
              <i class="fas fa-times" />
            </button>
          </div>
        </div>

        <div class="post bg-white p-1 my-1">
          <div>
            <a href="profile.html">
              <img
                class="round-img"
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                alt=""
              />
              <h4>John Doe</h4>
            </a>
          </div>
          <div>
            <p class="my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              possimus corporis sunt necessitatibus! Minus nesciunt soluta
              suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
              dolor? Illo perferendis eveniet cum cupiditate aliquam?
            </p>
            <p class="post-date">Posted on 04/16/2019</p>
            <button type="button" class="btn btn-light">
              <i class="fas fa-thumbs-up" />
              <span>4</span>
            </button>
            <button type="button" class="btn btn-light">
              <i class="fas fa-thumbs-down" />
            </button>
            <a href="post.html" class="btn btn-primary">
              Discussion <span class="comment-count">3</span>
            </a>
            <button type="button" class="btn btn-danger">
              <i class="fas fa-times" />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
