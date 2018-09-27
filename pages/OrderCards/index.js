import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { get, indexOf } from 'lodash';
import { onCardSubmission } from '../../redux/reducers/valueCards/actions';
import CardsScreenLayout from '../../components/CardsScreenLayout';
import CardsScreenHeader from '../../components/CardsScreenHeader';
import FiveCardList from '../../components/FiveCardList';
import CardRank from '../../components/CardRank';
import Loader from '../../components/Loader';
import withAuth from '../../utils/functions/withAuth';

class OrderCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warningMessage: '',
      maxCount: props.myTopFiveCards.length,
      ranks: [],
    };
    this.onRankChange = this.onRankChange.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

  onRankChange = rankObject => {
    const { ranks } = this.state;
    let flag = true;
    ranks.forEach(element => {
      if (element.cardNumber === rankObject.cardNumber) {
        element.rank = rankObject.rank;
        flag = false;
      }
    });
    if (flag) this.setState({ ranks: ranks.concat(rankObject) });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.isLoading === false &&
      nextProps.myTopFiveCardsRanking !== []
    ) {
      Router.push('/DownloadPDF');
    }
  }

  onNextClick = () => {
    const { ranks, maxCount } = this.state;
    const { onCardSubmission } = this.props;

    let nextVisible = true;
    if (ranks.length === maxCount) {
      ranks.forEach(element => {
        if (element.rank === '') {
          nextVisible = false;
        }
      });
    } else {
      nextVisible = false;
    }
    if (nextVisible) {
      onCardSubmission(ranks);
    } else {
      this.setState({ warningMessage: 'Please order all the cards.' });
      setTimeout(() => {
        this.setState({ warningMessage: '' });
      }, 2000);
    }
  };

  render() {
    const { isLoading, myTopFiveCards } = this.props;
    const { maxCount, ranks, warningMessage } = this.state;
    // console.log(maxCount, '!!!!!!!!!!!!!!!!!!!!!');

    return (
      <div className="values-card">
        {isLoading && <Loader bg loadingText={'Saving your Cards...'} />}
        <CardsScreenLayout
          header={
            <CardsScreenHeader
              onBackPress={'/OrderCardsIntro'}
              // forwardText="Finish"
              // onForwardPress={'/'}
            />
          }
          body={
            <FiveCardList
              titleText={{
                title: 'My Top 5',
                body:
                  'These are your Top 5 cards. To order them, just add the number in the box next to them, with 1 being the most important to you, and 5 being the least',
              }}
              data={myTopFiveCards}
              bodyView={item => (
                <CardRank
                  key={item.card_no}
                  maxCount={maxCount}
                  ranks={ranks}
                  data={item}
                  onRankChange={this.onRankChange}
                />
              )}
              nextButton={true}
              nextButtonText={{
                text: 'Next step',
                bottomText: 'Submit your ranking',
              }}
              nextButtonAlign={'flex-end'}
              onNextButton={this.onNextClick}
              warning={warningMessage}
            />
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onCardSubmission: item => dispatch(onCardSubmission(item)),
});

const mapStateToProps = ({ valueCards }) => ({
  isLoading: get(valueCards, 'isLoading'),
  myTopFiveCards: get(valueCards, 'myTopFiveCards'),
  myTopFiveCardsRanking: get(valueCards, 'myTopFiveCardsRanking'),
});

export default withAuth(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(OrderCards)
);
