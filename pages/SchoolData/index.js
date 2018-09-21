import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Image, Table } from 'react-bootstrap';
import Select from 'react-select';
import Loader from '../../components/Loader';
import { fetchSchoolNames, fetchSchoolData } from '../../redux/reducers/schoolData/actions';
import '../../styles/userDetails.scss';
import widthAuthSchool from '../../utils/functions/widthAuthSchool';

class SchoolData extends Component {
  constructor() {
    super();
    this.state = {
      selectedSchool: null,
    };
  }

  componentDidMount() {
    const { fetchSchoolNames } = this.props;
    fetchSchoolNames();
  }

  handleChange = value => {
    const { fetchSchoolData } = this.props;
    this.setState({ selectedSchool: value });
    fetchSchoolData(value.label);
  };

  render() {
    const { isLoading, schoolList, schoolData } = this.props;
    const { selectedSchool } = this.state;

    return <div className="user-deatils">
      {isLoading && <Loader />}
      <div className="user-deatils-content">
        <Image className="meee-image" src={require('../../utils/assets/meeLogo2.png')} responsive />
        <form>
          <div className="input-view">
            <div className="input-view-in">
              <p className="question">Select School from the List.</p>
              <div className="dropdown-theme">
                <Select value={selectedSchool} placeholder={'Select from list'} onChange={value => this.handleChange(value)} options={schoolList} />
              </div>
            </div>
          </div>
        </form>

        {selectedSchool !== null && schoolData.length !== 0 && <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Member Type</th>
              <th>Gender</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {schoolData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.member_type}</td>
                <td>{item.gender}</td>
                <td>{item.year}</td>
              </tr>
            ))}

          </tbody>
        </Table>}
        {schoolData.length === 0 && <p>No records found.</p>}
      </div>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchSchoolNames: () => dispatch(fetchSchoolNames()),
  fetchSchoolData: (item) => dispatch(fetchSchoolData(item)),
});

const mapStateToProps = ({ schoolData }) => ({
  isLoading: get(schoolData, 'isLoading'),
  schoolList: get(schoolData, 'schoolList'),
  schoolData: get(schoolData, 'schoolData'),
});

export default widthAuthSchool(connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolData));
