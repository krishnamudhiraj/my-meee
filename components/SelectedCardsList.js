import React, { Component } from 'react';
import TextSection from './TextSection';
import NextButton from './NextButton';

export default class SelectedCardsList extends Component {
  render() {
    const { titleText, data, bodyView, nextButton, nextButtonText, onNextButton, nextButtonAlign } = this.props;

    return <div className="selected-cards-list hidden-xs">
      <TextSection textColor="black" textAlign="center" title={titleText.title} body={titleText.body} />
      {data && data.map(item => bodyView(item))}

      {nextButton && <div style={{ width: '100%', display: 'flex', justifyContent: nextButtonAlign, padding: 25 }}><NextButton text={nextButtonText.text} bottomText={nextButtonText.bottomText} onPress={onNextButton}/></div>}
    </div>;
  }
}
