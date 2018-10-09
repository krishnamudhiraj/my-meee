const React = require('react');
const { Font, Document, Image, Page, Text, View, StyleSheet } = require('@react-pdf/renderer');
import '../../styles/downloadPdf.scss';
// Font.register("./pdfAssets/HandveticaTrial.ttf", {
//   family: "HandVetica"
// });

const styles = StyleSheet.create({
	imageView: {
		height: 100,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	image: {
		height: 60,
	},
	page: {
		backgroundColor: 'white',
		paddingTop: 30,
		paddingBottom: 0,
		paddingLeft: 50,
		paddingRight: 50,
	},
	nameTitle: {
		fontSize: 14,
	},
	noteText: {
		fontSize: 11,
		marginTop: 12,
	},
	table: {
		marginTop: 25,
		flexDirection: 'column',
	},
	row: {
		flexDirection: 'row',
	},
	sectionTitleLeft: {
		width: '50%',
		borderWidth: 1,
		borderRightWidth: 0.5,
		height: 50,
		justifyContent: 'center',
		padding: 5,
	},
	sectionTitleRight: {
		width: '50%',
		borderWidth: 1,
		borderLeftWidth: 0.5,
		height: 50,
		justifyContent: 'center',
		padding: 5,
	},
	sectionLeft: {
		width: '50%',
		borderWidth: 1,
		borderTopWidth: 0,
		borderRightWidth: 0.5,
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		hyphens: 'none',
	},
	sectionRight: {
		width: '50%',
		borderWidth: 1,
		borderTopWidth: 0,
		borderLeftWidth: 0.5,
		height: 80,
		justifyContent: 'center',
		padding: 5,
	},
	typeTextHead: {
		fontSize: 24,
	},
	typeTextBody: {
		fontSize: 14,
		hyphens: 'none',
		// textAlign: 'justify',
	},
	tableHeading: {
		fontSize: 11,
	},
	footer: {
		position: 'absolute',
		bottom: 25,
		left: 50,
	},
	footerText: {
		fontSize: 8,
		color: 'grey',
	},
});

class PdfFile extends React.Component {
	render() {
		const { data } = this.props;

		return (
			<Document>
				<Page size="A3" style={styles.page} page>
					<View style={styles.imageView}>
						<View>
							<Image src={require('./pdfAssets/meeLogo2.png')} style={styles.image} />
						</View>
						<View>
							<Image src={require('./pdfAssets/meMeeMeee.png')} style={styles.image} />
						</View>
					</View>
					<Text style={styles.nameTitle}>Name Values</Text>
					<Text style={styles.nameTitle}>Date</Text>
					<Text style={styles.noteText}>
						Thank you for completing the Meee Values Cards Test. Here are your 5 Values.
					</Text>
					<Text style={styles.noteText}>
						This sheet will help you gain a greater understanding of your individual values and talents
						based on the exercise you have done. It helps show you how unique you are and what it is that
						you value. Write down what each value means and how it has helped you and will help you in the
						future.
					</Text>
					<View style={styles.table}>
						<View style={styles.row}>
							<View style={styles.sectionTitleLeft}>
								<Text style={styles.tableHeading}>Values 1-5</Text>
							</View>
							<View style={styles.sectionTitleRight}>
								<Text style={styles.tableHeading}>
									What does this value mean to me and how can it help me in the future?
								</Text>
							</View>
						</View>

						{data.map(item => (
							<View key={item.cardNumber} style={styles.row}>
								<View style={styles.sectionLeft}>
									<Text style={styles.typeTextHead}>{item.data.type}</Text>
									<Text className="pdf-text">{item.data.moto}</Text>
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
			</Document>
		);
	}
}

module.exports = PdfFile;
