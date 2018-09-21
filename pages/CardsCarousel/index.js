import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import ButtonTheme from '../../components/ButtonTheme';
import TextSection from '../../components/TextSection';
import withAuth from '../../utils/functions/withAuth';

class CardsCarousel extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      activeBtnText: ['Sounds good', 'Got it!', 'Get started']
    };
  }

  onBtnPress = () => {
    const { activeIndex } = this.state;
    activeIndex < 3
    && this.setState({ activeIndex: activeIndex + 1 });
  }

  render() {
    const { activeBtnText, activeIndex } = this.state;

    return <div className="cards-carousel">
      <div className="cards-carousel-in">
        <img className="img-responsive hidden-xs" src={require('../../utils/assets/meeLogo2.png')} />
        {/* <p className="visible-xs title-text-xs">How does this work?</p> */}
        <Carousel interval={null} controls={false} indicators={false} activeIndex={activeIndex}>
          <Carousel.Item>
            <div className="carousel-item">
              <div className="text-section">
                <TextSection textColor="black" textAlign="center" body="First, choose any cards that resonate with you. You can select as many as you like – just make sure they’re true to you." />
              </div>
              <div className="carousel-img-item">
                <div className="img-item-in">
                  <img className="body-img img-responsive hidden-xs" src={require('../../utils/assets/selectTheCard.png')} />
                  <img className="body-img img-responsive visible-xs" src={require('../../utils/assets/selectTheCardSm.png')} />
                  <img className="img-responsive absolute-img" src={require('../../utils/assets/selectTheCardArrow.png')} />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item">
              <div className="text-section">
                <TextSection textColor="black" textAlign="center" body="Next, head over to ‘My list’ and select your top five. These are the ones that mean the most to you." />
              </div>
              <div className="carousel-img-item">
                <div className="img-item-in">
                  <img className="img-responsive" src={require('../../utils/assets/shortlistTheCard.png')} />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item">
              <div className="text-section">
                <TextSection textColor="black" textAlign="center" body="You’re nearly done. All that’s left to do is to put your top five in order." />
              </div>
              <div className="carousel-img-item">
                <div className="img-item-in">
                  <img className="body-img img-responsive img-xs" src={require('../../utils/assets/makesMeList.png')} />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="input-btn">
          {activeIndex < 2 && <button className="button-theme carousel-btn" onClick={activeIndex < 2 && this.onBtnPress}>
            {activeBtnText[activeIndex]}
          </button>}
          {activeIndex === 2 && <ButtonTheme lg={true} text={activeBtnText[activeIndex]} onPress={activeIndex === 2 && '/ValuesCards'} />}
        </div>
      </div>
    </div>;
  }
}

export default withAuth(CardsCarousel);
