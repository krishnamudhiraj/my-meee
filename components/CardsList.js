import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import TextSection from './TextSection';
import ButtonTransparent from './ButtonTransparent';

export default class CardsList extends Component {
  render() {
    const { key, titleText, bodyView, data } = this.props;

    return <div className="cards-list">
      <div className="text-view">
        <TextSection textColor="black" textAlign="center" title={titleText.title} body={titleText.body} />
      </div>
      <div className="cards">
        <Masonry className="hidden-sm hidden-xs my-masonry-grid" columnClassName="my-masonry-grid_column">
          {data.map(item => bodyView(item))}
        </Masonry>
        <div className="visible-sm visible-xs cards-items">
          {data.map(item => bodyView(item))}
        </div>
      </div>
      {/* <ButtonTransparent text="Back to top" textColor="#1B1919" /> */}
    </div>;
  }
}
