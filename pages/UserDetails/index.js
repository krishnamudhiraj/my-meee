import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { get } from 'lodash';
import { Image } from 'react-bootstrap';
import Select from 'react-select';
import Loader from '../../components/Loader';
import { onUpdatingDeatils } from '../../redux/reducers/getStarted/actions';
import '../../styles/userDetails.scss';
import withAuth from '../../utils/functions/withAuth';

const optionYear = [
  { value: 'year_1', label: 'Year 1' },
  { value: 'year_2', label: 'Year 2' },
  { value: 'year_3', label: 'Year 3' },
  { value: 'year_4', label: 'Year 4' },
  { value: 'year_5', label: 'Year 5' },
  { value: 'year_6', label: 'Year 6' },
  { value: 'year_7', label: 'Year 7' },
  { value: 'year_8', label: 'Year 8' },
  { value: 'year_9', label: 'Year 9' },
  { value: 'year_10', label: 'Year 10' },
  { value: 'year_11', label: 'Year 11' },
  { value: 'year_12', label: 'Year 12' },
];
const optionGender = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'not_to_say', label: 'Prefer not to say' },
];
const optionType = [
  { value: 'teacher', label: 'Teacher' },
  { value: 'pupil', label: 'Pupil' },
  { value: 'member_of_staff', label: 'Member of staff' },
];

class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      selectedYear: null,
      selectedGender: null,
      selectedType: null,
    };
    this.updateUserDetails = this.updateUserDetails.bind(this);
  }

  handleChange = (type, value) => {
    if (type === 'selectedYear') this.setState({ selectedYear: value });
    if (type === 'selectedGender') this.setState({ selectedGender: value });
    if (type === 'selectedType') this.setState({ selectedType: value });
  };

  updateUserDetails = () => {
    const { onUpdatingDeatils } = this.props;
    const { selectedYear, selectedGender, selectedType } = this.state;
    onUpdatingDeatils({
      year: selectedYear ? selectedYear.label : null,
      gender: selectedGender.label,
      member_type: selectedType.label,
    }).then(() => {
      Router.push('/WhatAreValues');
    });
  };

  render() {
    const { isLoading } = this.props;
    const { selectedYear, selectedGender, selectedType } = this.state;
    return (
      <div className="user-deatils">
        {isLoading && <Loader />}
        <div className="user-deatils-content">
          <Image
            className="meee-image"
            src={require('../../utils/assets/meeLogo2.png')}
            responsive
          />
          <form>
            <div className="input-view">
              <div className="input-view-in">
                <p className="question">
                  What
                  {"'"}s your gender?
                </p>
                <div className="dropdown-theme">
                  <Select
                    value={selectedGender}
                    placeholder={'Select from list'}
                    onChange={value =>
                      this.handleChange('selectedGender', value)
                    }
                    options={optionGender}
                  />
                </div>
              </div>
              {selectedGender !== null && (
                <div className="input-view-in">
                  <p className="question">
                    Are you a pupil, teacher, or member of staff?
                  </p>
                  <div className="dropdown-theme">
                    <Select
                      value={selectedType}
                      placeholder={'Select from list'}
                      onChange={value =>
                        this.handleChange('selectedType', value)
                      }
                      options={optionType}
                    />
                  </div>
                </div>
              )}
              {selectedGender !== null &&
                selectedType !== null &&
                selectedType.value === 'pupil' && (
                  <div className="input-view-in">
                    <p className="question">Which year are you in?</p>
                    <div className="dropdown-theme">
                      <Select
                        value={selectedYear}
                        placeholder={'I am in...'}
                        indicatorSeparator
                        onChange={value =>
                          this.handleChange('selectedYear', value)
                        }
                        options={optionYear}
                      />
                    </div>
                  </div>
                )}
            </div>
          </form>

          {((selectedGender !== null &&
            (selectedType !== null &&
              (selectedType.value === 'teacher' ||
                selectedType.value === 'member_of_staff'))) ||
            (selectedGender !== null &&
              (selectedType !== null && selectedType.value === 'pupil') &&
              selectedYear !== null)) && (
            <button className="next-button" onClick={this.updateUserDetails}>
              <div className="btn-up-body">
                <p>All done!</p>
                <Image
                  className="next-arrow"
                  src={require('../../utils/assets/rightArrow.png')}
                  responsive
                />
              </div>
              <p className="btm-text">Start using the app</p>
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onUpdatingDeatils: code => dispatch(onUpdatingDeatils(code)),
});

const mapStateToProps = ({ getStarted }) => ({
  isLoading: get(getStarted, 'isLoading'),
});

export default withAuth(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserDetails)
);
