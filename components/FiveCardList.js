import React, { Component } from 'react';
import TextSection from './TextSection';
import NextButton from './NextButton';

export default class FiveCardList extends Component {
  render() {
    const {
      titleText,
      bodyView,
      data,
      nextButton,
      nextButtonText,
      onNextButton,
      nextButtonAlign,
      warning,
      errorMessage,
    } = this.props;

    return (
      <div className="five-card-list">
        <div className="text-view">
          <TextSection
            textColor="black"
            textAlign="center"
            title={titleText.title}
            body={titleText.body}
          />
        </div>
        <div className="">
          {/* {data.map(item => bodyView(item))} */}
          {data[0] && data[1] ? (
            <div className="row">
              <div className="col-sm-6">{bodyView(data[0])}</div>
              <div className="col-sm-6">{bodyView(data[1])}</div>
            </div>
          ) : (
            data[0] && <div className="align-center">{bodyView(data[0])}</div>
          )}
          {data[2] && data[3] ? (
            <div className="row">
              <div className="col-sm-6">{bodyView(data[2])}</div>
              <div className="col-sm-6">{bodyView(data[3])}</div>
            </div>
          ) : (
            data[2] && <div className="align-center">{bodyView(data[2])}</div>
          )}
          {data[4] && <div className="align-center">{bodyView(data[4])}</div>}
        </div>
        {nextButton && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: nextButtonAlign,
              padding: 25,
            }}
          >
            <NextButton
              warning={warning}
              text={nextButtonText.text}
              bottomText={nextButtonText.bottomText}
              onPress={onNextButton}
            />
          </div>
        )}
      </div>
    );
  }
}
