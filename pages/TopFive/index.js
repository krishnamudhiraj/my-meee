import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { get } from 'lodash';
import { onTop5CardDeletion } from '../../redux/reducers/valueCards/actions';
import CardsScreenLayout from '../../components/CardsScreenLayout';
import CardsScreenHeader from '../../components/CardsScreenHeader';
import FiveCardList from '../../components/FiveCardList';
import CardRemove from '../../components/CardRemove';
import Loader from '../../components/Loader';
import withAuth from '../../utils/functions/withAuth';

class TopFive extends Component {
  constructor(props) {
    super(props);
    this.onMyListCardPress = this.onMyListCardPress.bind(this);
  }

  onMyListCardPress = item => {
    const { myTopFiveCards, onTop5CardDeletion } = this.props;
    if (myTopFiveCards.length > 1) {
      onTop5CardDeletion(item);
    } else {
      console.log('Bs kr bhai');
    }
  };

  render() {
    const { isLoading, myTopFiveCards } = this.props;

    return (
      <div className="values-card">
        {isLoading && <Loader />}
        <CardsScreenLayout
          header={
            <CardsScreenHeader
              onBackPress={'/PickFive'}
            />
          }
          body={
            <FiveCardList
              titleText={{
                title: 'My Top 5',
                body: 'Review your Top 5 before continuing'
              }}
              data={myTopFiveCards}
              bodyView={item => (
                <CardRemove
                  shortlist={true}
                  key={item.card_no}
                  fixedWidth={true}
                  color="blue"
                  data={item}
                  onCardPress={this.onMyListCardPress}
                  marginZero={true}
                />
              )}
              nextButton={true}
              nextButtonText={{ text: 'Next step', bottomText: 'Rank your Top 5' }}
              nextButtonAlign={'center'}
              onNextButton={() => Router.push('/OrderCardsIntro')}
            />
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onTop5CardDeletion: item => dispatch(onTop5CardDeletion(item))
});

const mapStateToProps = ({ valueCards }) => ({
  isLoading: get(valueCards, 'isLoading'),
  myTopFiveCards: get(valueCards, 'myTopFiveCards')
});

export default withAuth(connect(
  mapStateToProps,
  mapDispatchToProps
)(TopFive));
