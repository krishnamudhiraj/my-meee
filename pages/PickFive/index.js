import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { onTop5CardSelection, onTop5CardDeletion } from '../../redux/reducers/valueCards/actions';
import CardsScreenLayout from '../../components/CardsScreenLayout';
import CardsScreenHeader from '../../components/CardsScreenHeader';
import CardsList from '../../components/CardsList';
import SelectedCardsList from '../../components/SelectedCardsList';
import Card from '../../components/Card';
import CardRemove from '../../components/CardRemove';
import Loader from '../../components/Loader';
import withAuth from '../../utils/functions/withAuth';

class PickFive extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    };
    this.onCardPress = this.onCardPress.bind(this);
    this.onMyListCardPress = this.onMyListCardPress.bind(this);
  }

  onCardPress = (item) => {
    const { onTop5CardSelection, myTopFiveCards } = this.props;

    if (myTopFiveCards.length < 5) onTop5CardSelection(item);
    else {
      this.setState({ error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 2000);
    }
  }

  onMyListCardPress = (item) => {
    const { onTop5CardDeletion } = this.props;
    onTop5CardDeletion(item);
  }

  render() {
    const { isLoading, myCardList, myTopFiveCards } = this.props;
    const { error } = this.state;

    return <div className="values-card">
      {isLoading && <Loader />}
      <CardsScreenLayout
        header={
          <CardsScreenHeader
            onBackPress={'/PickFiveIntro'}
            forwardText="Top 5"
            onForwardPress={'/TopFive'}
            topFive={true}
            selection={myTopFiveCards.length}
            errorMessage={error}
          />
        }
        bodyLeft={
          <CardsList
            titleText={{ title: 'My list', body: 'These are the cards you’ve picked so far' }}
            data={myCardList}
            bodyView={
              item =>
                <Card
                  key={item.card_no}
                  color="blue"
                  data={item}
                  onCardPress={this.onCardPress}
                />
            }
          />
        }
        bodyRight={
          <SelectedCardsList
            data={myTopFiveCards}
            titleText={{ title: 'My top 5', body: 'Shortlist your Top 5 cards from those you’ve picked below' }}
            bodyView={
              item =>
                <CardRemove
                  key={item.card_no}
                  data={item}
                  onCardPress={this.onMyListCardPress}
                />
            }
            // nextButton={true}
            // nextButtonText={{ text: 'Next step', bottomText: 'Submit your cards' }}
            // nextButtonAlign={'flex-end'}
            // onNextButton={() => console.log('LOL')}
          />
        }
      />
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  onTop5CardSelection: item => dispatch(onTop5CardSelection(item)),
  onTop5CardDeletion: item => dispatch(onTop5CardDeletion(item)),
});

const mapStateToProps = ({ valueCards }) => ({
  isLoading: get(valueCards, 'isLoading'),
  myCardList: get(valueCards, 'myCardList'),
  myTopFiveCards: get(valueCards, 'myTopFiveCards')
});

export default withAuth(connect(
  mapStateToProps,
  mapDispatchToProps
)(PickFive));
