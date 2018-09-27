import React, { Component } from 'react';
import InputTheme from './InputTheme';
import Select from 'react-select';
import _ from 'lodash';

const backgroundGradient = [
  'linear-gradient(rgb(0, 158, 225), rgb(0, 139, 199))',
  'linear-gradient(rgb(255, 248, 166), rgb(255, 236, 2))',
  'linear-gradient(rgb(246, 68, 165), rgb(229, 1, 129))',
];
const optionRanks = [];
const ranksArray = [];

export default class CardRank extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
      redflag: false,
    };
    this.inputRankChange = this.inputRankChange.bind(this);
  }
  componentWillMount() {
    const { maxCount } = this.props;
    if (optionRanks.length === 0) {
      for (let index = 1; index <= maxCount; index++) {
        optionRanks.push({ value: index, label: index });
        ranksArray.push(null);
      }
    }
  }

  inputRankChange = ev => {
    const { maxCount, onRankChange, data, ranks } = this.props;
    const rank = ev.value;

    let message = '';
    onRankChange({ cardNumber: data.card_no, rank, data });
    message = '';
    let repeatFlag = false;

    if (ranksArray.length !== 0 && _.includes(ranksArray, rank)) {
      this.setState({
        errorMessage: "You can't set same rank for two cards.",
        redflag: true,
      });

      setTimeout(() => {
        this.setState({
          errorMessage: '',
        });
      }, 2000);
    } else {
      ranksArray[data.card_no - 1] = rank;
    }

    if (!_.includes(ranksArray, null)) {
      ranksArray[data.card_no - 1] = rank;
      if (_.uniq(ranksArray).length !== ranksArray.length) {
        this.setState({
          errorMessage: "You can't set same rank for two cards.",
          redflag: true,
        });

        setTimeout(() => {
          this.setState({
            errorMessage: '',
          });
        }, 2000);
      }
    }
  };

  render() {
    const { data } = this.props;
    const { errorMessage, redFlag } = this.state;
    const { maxCount, onRankChange, ranks } = this.props;
    const backgroundGradientColors =
      data.color === 'blue'
        ? backgroundGradient[0]
        : data.color === 'yellow'
          ? backgroundGradient[1]
          : backgroundGradient[2];
    const textColor = data.color === 'yellow' ? 'black' : 'white';

    return (
      <div className="rank-in-cont">
        <div
          className="card-rank card-top-five"
          style={{ background: backgroundGradientColors }}
        >
          <p className="heading" style={{ color: textColor }}>
            {data.type}
          </p>
          <p className="sub-heading" style={{ color: textColor }}>
            {data.moto}
          </p>
        </div>
        <Select
          placeholder={'#'}
          options={optionRanks}
          onChange={value => this.inputRankChange(value)}
        />
        {errorMessage && <p className="error-card">{errorMessage}</p>}
      </div>
    );
  }
}
