import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllPosts } from '../../actions/actions';

import './Posts.css';

class Posts extends Component {
    componentDidMount() {
      this.props.getAllPosts();
    };

    render() {
      return (
        <div className="posts">
          {this.props.posts.map(post => {
            return (
              <div className="post">
              <p>{post.contents}</p>
              <p>{post.title}</p>
              <p>{post.created_at}</p>
            </div>
            )
          })}
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    gettingPosts: state.gettingPosts,
    error: state.error
  }
}

export default connect(mapStateToProps, { getAllPosts })(Posts);
