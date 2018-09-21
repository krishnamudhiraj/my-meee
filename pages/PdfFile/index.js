import React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import withAuth from '../../utils/functions/withAuth';
import '../../styles/downloadPdf.scss';
import DynamicPdf from './dynamicPdf';


class PdfFile extends React.Component {
  render() {
    const { myTopFiveCardsRanking } = this.props;

    return <div className="pdf-cover">
      <DynamicPdf myTopFiveCardsRanking={myTopFiveCardsRanking} />
    </div>;
  }
}

const mapStateToProps = ({ valueCards }) => ({
  myTopFiveCardsRanking: get(valueCards, 'myTopFiveCardsRanking'),
});

export default
withAuth(connect(
  mapStateToProps,
  null
)(PdfFile));
