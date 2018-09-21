import React, { Component } from 'react';
import InputTheme from './InputTheme';

const backgroundGradient = [
  'linear-gradient(rgb(0, 158, 225), rgb(0, 139, 199))',
  'linear-gradient(rgb(255, 248, 166), rgb(255, 236, 2))',
  'linear-gradient(rgb(246, 68, 165), rgb(229, 1, 129))'
];

export default class CardRank extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
      redflag: false
    };
    this.inputRankChange = this.inputRankChange.bind(this);
  }

  inputRankChange = (ev) => {
    ev.preventDefault();
    const { maxCount, onRankChange, data, ranks } = this.props;
    const rank = ev.target.value;

    let message = '';
    if (rank > maxCount) {
      ev.target.value = '';
      message = 'Rank can\'t be more then ' + maxCount;
      onRankChange({ cardNumber: data.card_no, rank: '', data });
      this.setState({ errorMessage: message, redflag: true });

      setTimeout(() => {
        this.setState({ errorMessage: '' });
      }, 2000);
    } else if (rank < 1 && rank !== '') {
      ev.target.value = '';
      message = 'Rank can\'t be less then or equal to 0';
      this.setState({ errorMessage: message, redflag: true });

      setTimeout(() => {
        this.setState({ errorMessage: '' });
      }, 2000);
    } else {
      message = '';

      let repeatFlag = false;

      if (ranks !== []) ranks.forEach(element => {
        if (element.rank === rank) repeatFlag = true;
      });

      if (rank !== '') {
        if (!repeatFlag) {
          onRankChange({ cardNumber: data.card_no, rank, data });
        } else {
          ev.target.value = '';
          this.setState({
            errorMessage: 'You can\'t set same rank for two cards.',
            redflag: true
          });

          setTimeout(() => {
            this.setState({
              errorMessage: '',
            });
          }, 2000);
        }
      } else {
        ev.target.value = '';
        onRankChange({ cardNumber: data.card_no, rank, data });
        this.setState({
          errorMessage: '',
          redflag: false
        });
      }
    }
  }

  render() {
    const { data } = this.props;
    const { errorMessage, redFlag } = this.state;

    const backgroundGradientColors = data.color === 'blue' ? backgroundGradient[0] : data.color === 'yellow' ? backgroundGradient[1] : backgroundGradient[2];
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
        <InputTheme rank={true} redFlag={redFlag} placeholder={'#'} inputRankChange={this.inputRankChange} />
        {
          errorMessage && <p className="error-card">{errorMessage}</p>
        }
      </div>
    );
  }
}
