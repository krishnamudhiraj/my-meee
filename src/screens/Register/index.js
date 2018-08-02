import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Button } from 'react-bootstrap';
import { onAppLoad } from '../../redux/reducers/home/actions';
import '../../styles/index.scss';

class Register extends Component {
  render() {
    const { isLoading, onAppLoad } = this.props;

    return (
      <div className="app">
        <h1 className="app-text">REGISTER</h1>
        <Button>Bro</Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onAppLoad: () => dispatch(onAppLoad()),
});

const mapStateToProps = ({ home }) => ({
  isLoading: get(home, 'isLoading', false),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
