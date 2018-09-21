import React, { Component } from 'react';

class InputTheme extends Component {
  render() {
    const { labelText, type, placeholder, message, textAlign, rank, inputRankChange, redFlag } = this.props;

    return <div className="input-theme">
      <div className="form-group">
        <label className="input-label" htmlFor="usr">
          {labelText}
        </label>
        {!rank && <input type={type ? type : 'text'} name="input_name" className="form-control" id="usr" placeholder={placeholder} style={{ textAlign }} required />}
        {rank && <input type="number" name="rank" min={1} max={5} className="form-control-rank" id="usr" placeholder={placeholder} style={redFlag && { border: '1px solid red !important' }} onChange={inputRankChange} />}

        {message && <p className="message-text">{message}</p>}
      </div>
    </div>;
  }
}

export default InputTheme;
