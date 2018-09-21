import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Header from '../../components/Header';
import WelcomeMee from '../../components/WelcomeMee';
import TextSection from '../../components/TextSection';
import ValuesSetion from './ValuesSetion';
import MakesMeSection from './MakesMeSection';
import QuoteSection from '../../components/QuoteSection';
import GetStartedWithCards from './GetStartedWithCards';

class Home extends Component {
  constructor() {
    super();
    this.onPressLearnMore = this.onPressLearnMore.bind(this);
  }

  onPressLearnMore = () => {
    // const scrollPx = (typeof window !== 'undefined') && (window.innerWidth > 767) ? 404 : 360;
    // scroll.scrollTo(scrollPx);
    scroll.scrollToBottom();
  }

  render() {
    return <div className="app">
      <Header />
      <WelcomeMee onPressLearnMore={this.onPressLearnMore} />
      <ValuesSetion />
      <MakesMeSection />
      <QuoteSection renderView={<TextSection quote="&quot;Education is the most powerful weapon which you can use to change the world&quot;" quoteBy="Nelson Mandela" />} />
      <GetStartedWithCards />
    </div>;
  }
}

export default Home;
