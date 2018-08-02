import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { onAppLoad } from '../../redux/reducers/home/actions';
import Header from '../../components/Header';
import ValuesSetion from './ValuesSetion';
import '../../styles/index.scss';

class Home extends Component {
  render() {
    const { isLoading, onAppLoad } = this.props;

    return (
      <div className="app">
        <Header />
        <ValuesSetion />
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
)(Home);
