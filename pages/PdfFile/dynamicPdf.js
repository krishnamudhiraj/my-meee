import React from 'react';
import dynamic from 'next/dynamic';

const dynamicPdf = dynamic({
  modules: () => ({
    Font: import('@react-pdf/renderer').then(({ Font }) => Font),
    Document: import('@react-pdf/renderer').then(({ Document }) => Document),
    Image: import('@react-pdf/renderer').then(({ Image }) => Image),
    Page: import('@react-pdf/renderer').then(({ Page }) => Page),
    Text: import('@react-pdf/renderer').then(({ Text }) => Text),
    View: import('@react-pdf/renderer').then(({ View }) => View),
    StyleSheet: import('@react-pdf/renderer').then(({ StyleSheet }) => StyleSheet),
  }),
  render: (props,
    {
      Font,
      Document,
      Image,
      Page,
      Text,
      View,
      StyleSheet
    }) => {
    const { myTopFiveCardsRanking } = props;

    // Clear store
    window.localStorage.clear();

    Font.register('./pdfAssets/arial.ttf', {
      family: 'Arial'
    });

    const styles = StyleSheet.create({
      imageView: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      image: {
        height: 60
      },
      page: {
        backgroundColor: 'white',
        paddingTop: 30,
        paddingBottom: 0,
        paddingLeft: 50,
        paddingRight: 50
      },
      nameTitle: {
        fontSize: 14
      },
      noteText: {
        fontSize: 11,
        marginTop: 12
      },
      table: {
        marginTop: 25,
        flexDirection: 'column'
      },
      row: {
        flexDirection: 'row'
      },
      sectionTitleLeft: {
        width: '50%',
        borderWidth: 1,
        borderRightWidth: 0.5,
        height: 50,
        justifyContent: 'center',
        padding: 5
      },
      sectionTitleRight: {
        width: '50%',
        borderWidth: 1,
        borderLeftWidth: 0.5,
        height: 50,
        justifyContent: 'center',
        padding: 5
      },
      sectionLeft: {
        width: '50%',
        borderWidth: 1,
        borderTopWidth: 0,
        borderRightWidth: 0.5,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
      },
      sectionRight: {
        width: '50%',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0.5,
        height: 80,
        justifyContent: 'center',
        padding: 5
      },
      typeTextHead: {
        fontSize: 24
        // fontFamily: 'HandVetica'
      },
      typeTextBody: {
        fontSize: 14
        // fontFamily: 'HandVetica'
      },
      tableHeading: {
        fontSize: 11
      },
      footer: {
        position: 'absolute',
        bottom: 25,
        left: 50
      },
      footerText: {
        fontSize: 8,
        color: 'grey'
      }
    });

    return (<Document>
      <Page size="A4" style={styles.page} page>
        <View style={styles.imageView}>
          <View>
            <Image
              src={require('./pdfAssets/meeLogo2.png')}
              style={styles.image}
            />
          </View>
          <View>
            <Image
              src={require('./pdfAssets/meMeeMeee.png')}
              style={styles.image}
            />
          </View>
        </View>
        <Text style={styles.nameTitle}>Name: {myTopFiveCardsRanking.name}</Text>
        <Text style={styles.nameTitle}>Date: {myTopFiveCardsRanking.date}</Text>
        <Text style={styles.noteText}>
              Thank you for completing the Meee Values Cards text. Here are your
              5 Values.
        </Text>
        <Text style={styles.noteText}>
              This sheet will help you gain a greater understanding of your
              individual values and talents based on the exercise you have done.
              It helps show you how unique you are and what it is that you
              value. Write down what each value means and how it has helped you
              and will help you in the future.
        </Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <View style={styles.sectionTitleLeft}>
              <Text style={styles.tableHeading}>Values 1-5</Text>
            </View>
            <View style={styles.sectionTitleRight}>
              <Text style={styles.tableHeading}>
                    What does this value mean to me and how can it help me in
                    the future?
              </Text>
            </View>
          </View>

          {myTopFiveCardsRanking.cards.map(item => (
            <View key={item.cardNumber} style={styles.row}>
              <View style={styles.sectionLeft}>
                <Text style={styles.typeTextHead}>{item.data.type}</Text>
                <Text style={styles.typeTextBody}>{item.data.moto}</Text>
              </View>
              <View style={styles.sectionRight} />
            </View>
          ))}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© Meee 2018</Text>
          <Text style={styles.footerText}>www.meee.global</Text>
        </View>
      </Page>
    </Document>);
  }
});

export default dynamicPdf;
