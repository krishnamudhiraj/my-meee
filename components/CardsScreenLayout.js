import React, { Component } from 'react';

export default class CardsScreenLayout extends Component {
  render() {
    const { header, body, bodyLeft, bodyRight } = this.props;

    return <div className="cards-screen-layout">
      {header}
      <div className="">
        {body && <div className="body-center">{body}</div>}

        {bodyLeft && <div className="col-md-8 col-sm-7 no-scrollbar bg-grey">
          <div className="scrollbox" style={{ marginRight: -30 }}>
            {bodyLeft}
          </div>
        </div>
        }

        {bodyRight && <div className="col-md-4 col-sm-5 no-padding no-scrollbar hidden-xs bg-shadow ">
          <div className="scrollbox">
            {bodyRight}
          </div>
        </div>
        }
      </div>
    </div>;
  }
}
