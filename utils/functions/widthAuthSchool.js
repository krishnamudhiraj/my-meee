import React, { Component } from 'react';
import Router from 'next/router';
import { get } from 'lodash';
import { connect } from 'react-redux';

class Redirect extends Component {
  componentDidMount() {
    Router.push('/Admin');
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
      const { isAuthorised } = this.props;

      if (isAuthorised) {
        return <SubComponent />;
      } else {
        return <Redirect />;
      }
    }
  }

  const mapStateToProps = ({ admin }) => ({
    isAuthorised: get(admin, 'isAuthorised', false)
  });

  return connect(
    mapStateToProps,
    null
  )(Authenticated);
}
