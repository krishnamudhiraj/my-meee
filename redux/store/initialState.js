export default {
  admin: {
    isLoading: false,
    isAuthorised: false,
    message: null,
    email: null
  },
  schoolData: {
    isLoading: false,
    schoolList: [],
    schoolData: []
  },
  generateCodes: {
    isLoading: false,
    message: null
  },
  valueCards: {
    isLoading: true,
    cardsCreated: false,
    availableCardList: [],
    myCardList: [],
    myTopFiveCards: [],
    myTopFiveCardsRanking: []
  },
  payment: {
    isLoading: false,
    email: null,
    isEmailSubscribed: false
  },
  code: {
    isLoading: false,
    isLoggedIn: false,
    isLoggedInSchool: false,
    schoolUserKey: null,
    message: ''
  },
  getStarted: {
    isLoading: false,
    status: null,
    schoolName: null,
    schoolKey: null,
    name: null,
    email: null
  }
};
