import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, indexOf } from 'lodash';
import { createCardsArray, onCardSelection, onCardDeletion, onTop5CardDeletionFromValues } from '../../redux/reducers/valueCards/actions';
import CardsScreenLayout from '../../components/CardsScreenLayout';
import CardsScreenHeader from '../../components/CardsScreenHeader';
import CardsList from '../../components/CardsList';
import SelectedCardsList from '../../components/SelectedCardsList';
import Card from '../../components/Card';
import CardRemove from '../../components/CardRemove';
import Loader from '../../components/Loader';
import cardsList from '../../utils/functions/cardsList';
import withAuth from '../../utils/functions/withAuth';

class ValuesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsArray: [...props.myCardList, ...props.myTopFiveCards]
    };
    this.onCardPress = this.onCardPress.bind(this);
    this.onMyListCardPress = this.onMyListCardPress.bind(this);
  }

  componentDidMount() {
    const { cardsCreated, createCardsArray } = this.props;
    !cardsCreated && createCardsArray(cardsList);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ cardsArray: [...nextProps.myCardList, ...nextProps.myTopFiveCards] });
  }

  onCardPress = (item) => {
    const { onCardSelection } = this.props;
    onCardSelection(item);
  }

  onMyListCardPress = (item) => {
    const { onCardDeletion, onTop5CardDeletionFromValues, myCardList } = this.props;
    if (indexOf(myCardList, item) !== -1) {
      onCardDeletion(item);
    } else {
      onTop5CardDeletionFromValues(item);
    }
  }

  render() {
    const { isLoading, cardsCreated, availableCardList } = this.props;
    const { cardsArray } = this.state;

    return <div className="values-card">
      {isLoading && !cardsCreated && <Loader bg={true} loadingText={'Loading your Value Cards'} />}
      {isLoading && cardsCreated && <Loader />}
      {cardsCreated && <CardsScreenLayout
        header={
          <CardsScreenHeader
            onForwardPress={'/PickFiveIntro'}
            forwardText="My List"
            selection={cardsArray.length}
          />
        }
        bodyLeft={
          <CardsList
            titleText={{ title: 'Let’s go', body: 'First, choose any cards that work for you. Select as many as you like – just make sure they’re true to you.' }}
            data={availableCardList}
            bodyView={
              item =>
                <Card
                  key={item.card_no}
                  color="blue"
                  data={item}
                  onCardPress={this.onCardPress}
                />
            } />
        }
        bodyRight={
          <SelectedCardsList
            titleText={{ title: 'My List', body: 'First, choose as many cards as you like to form your list. These cards should represent what you’re about.' }}
            data={cardsArray}
            bodyView={item =>
              <CardRemove
                key={item.card_no}
                data={item}
                onCardPress={this.onMyListCardPress}
              />}
            // nextButton={true}
            // nextButtonText={{ text: 'Next step', bottomText: 'Review your cards' }}
            // nextButtonAlign={'flex-end'}
            // onNextButton={() => console.log('LOL')}
          />}
      />}
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  createCardsArray: list => dispatch(createCardsArray(list)),
  onCardSelection: item => dispatch(onCardSelection(item)),
  onCardDeletion: item => dispatch(onCardDeletion(item)),
  onTop5CardDeletionFromValues: item => dispatch(onTop5CardDeletionFromValues(item))
});

const mapStateToProps = ({ valueCards }) => ({
  cardsCreated: get(valueCards, 'cardsCreated'),
  isLoading: get(valueCards, 'isLoading'),
  myTopFiveCards: get(valueCards, 'myTopFiveCards'),
  myCardList: get(valueCards, 'myCardList'),
  availableCardList: get(valueCards, 'availableCardList')
});

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(ValuesCard));


