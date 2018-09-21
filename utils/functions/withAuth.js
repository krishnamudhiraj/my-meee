import React, { Component } from 'react';
import Router from 'next/router';
import { get } from 'lodash';
import { connect } from 'react-redux';


class Redirect extends Component {
  componentDidMount() {
    Router.push('/');
  }

  render() {
    return <div />;
  }
}

export default function withAuth(SubComponent) {
  class Authenticated extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
    }

    render() {
      const { isLoggedIn } = this.props;

      if (isLoggedIn) {
        return <SubComponent />;
      } else {
        return <Redirect />;
      }
    }
  }

  const mapStateToProps = ({ code }) => ({
    isLoggedIn: get(code, 'isLoggedIn', false)
  });

  return connect(
    mapStateToProps,
    null
  )(Authenticated);
}


