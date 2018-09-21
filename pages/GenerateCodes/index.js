import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { generateCodes } from '../../redux/reducers/generateCodes/actions';
import { Image } from 'react-bootstrap';
import Loader from '../../components/Loader';
import '../../styles/userDetails.scss';
import widthAuthSchool from '../../utils/functions/widthAuthSchool';

class GenerateCodes extends Component {
  handleSubmit = ev => {
    const { generateCodes } = this.props;
    ev.preventDefault();
    const school = ev.target.school_name_input.value;
    const numberOfCodes = ev.target.number_of_codes_input.value;
    generateCodes({ school, numberOfCodes });
  };

  render() {
    const { isLoading, message } = this.props;
    return (
      <div className="generate-codes">
        {isLoading && <Loader />}
        <div className="generate-codes-content">
          <Image
            className="meee-image"
            src={require('../../utils/assets/meeLogo2.png')}
            responsive
          />
          <form onSubmit={this.handleSubmit}>
            <div className="input-view">
              <div className="input-view-in">
                <p className="question">Name of The School</p>
                <input
                  type="text"
                  name="school_name_input"
                  className="form-control"
                  placeholder="Name of School"
                  required
                />
              </div>

              <div className="input-view-in">
                <p className="question">Number of Codes to Generate</p>
                <input
                  type="number"
                  name="number_of_codes_input"
                  className="form-control"
                  placeholder="e.g., 40"
                  required
                />
              </div>
            </div>

            <div className="btn-view">
              <button className="next-button">
              Generate!
              </button>
            </div>
          </form>

          <p className="code-generation-info">{message}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  generateCodes: (data) => dispatch(generateCodes(data))
});

const mapStateToProps = ({ generateCodes }) => ({
  isLoading: get(generateCodes, 'isLoading'),
  message: get(generateCodes, 'message'),
});

export default widthAuthSchool(connect(mapStateToProps, mapDispatchToProps)(
  GenerateCodes
));
