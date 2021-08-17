import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const spacing: number = 12;
const SIZE: number = width * 0.62;
const HEIGHT: number = SIZE - 90;
const TOP: number = 24;
const color: string = 'black';
const black: string = 'black';
const iconColor: string = '#999793';
const white: string = 'black';
const arrayColor: string[] = ['#dde2eb', '#cacfca', '#dee3de', '#dde2eb'];
const backgroundColor: string = 'black';
const ITEM_WIDTH: number = (width / 1.4) * 0.76;
const ITEM_HEIGHT: number = (ITEM_WIDTH / 1.4) * 1.47;
const BACKCOLOR: string = 'black';
const FONTS = 'MonteCarlo-Regular';
const globalStyle = StyleSheet.create({
  container: {
    backgroundColor: BACKCOLOR,
    flex: 1,
  },
  optionalContainer: {
    backgroundColor: BACKCOLOR,
    flex: 1,
  },
  add: {
    backgroundColor: 'black',
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#E0E5EC',
  },
  cardContainer: {
    backgroundColor: 'black',
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: HEIGHT,
    // borderRadius: 8,
    borderWidth: 0.3,
    borderColor: '#cfcfcf',
  },
  cardContainerPerCard: {
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: HEIGHT * 2,
    borderRadius: 8,
  },
  cardPart: {
    backgroundColor: '#ffffff',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT / 2,
    borderRadius: 8,
    // width:width/1.2,
    padding: spacing * 2,
  },
  text: {
    fontSize: 15,
    color: '#FFFFFF',
    paddingLeft: spacing + 10,
    top: spacing * 2.5,
    // justifyContent:'c'
  },
  textUsual: {
    fontSize: 15,

    textAlign: 'center',
    // justifyContent:'c'
  },
  smallText: {
    fontSize: 15,
    color: 'white',
  },
  titleWrite: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  titleTextName: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    // top: spacing,
    padding: spacing,
  },
  texts: {
    fontSize: 15,
    color: 'white',
    paddingHorizontal: spacing * 3,
    left: 10,
    top: spacing * 2.5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  loadingScreen: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backIconContainer: {
    position: 'absolute',

    left: 15,
    zIndex: 999,
    width: 35,
    height: 35,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeIconContainer: {
    position: 'absolute',
    top: 8,

    marginLeft: 8,
    zIndex: 999,
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  commonIcon: {
    position: 'absolute',

    zIndex: 999,
    width: 35,
    height: 35,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  commonText: {
    textAlign: 'justify',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingRight: 10,
    fontWeight: 'bold',
    fontSize: 17,
    top: 5,
  },
  header: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BACKCOLOR,

    height: HEIGHT / 3.4,
  },
  image: {
    height: height / 3.6,
    width: width / 3.6,
    alignItems: 'center',
    justifyContent: 'center',
    top: 15,
    marginTop: 30,
  },
  logoButton: {
    height: height / 4.4,
    backgroundColor: 'red',
    width: width / 2.3,
    alignItems: 'center',
    borderRadius: 100,
    shadowColor: 'black',

    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',

    // position:'absolute',
  },

  profilImage: {
    width: width / 4,
    height: width / 4,
    borderRadius: width / 8,
    padding: 10,
    left: 2.4,
    top: 2,
  },
  profilImageBack: {
    width: width / 3.8,
    height: width / 3.8,
    borderRadius: width / 7.6,
    opacity: 10,
    // padding: 10,
    backgroundColor: '#FFFFFF',
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing * 1.2,

    // left: -10,
    // top: -7,
  },
});

export {
  globalStyle,
  color,
  iconColor,
  black,
  HEIGHT,
  SIZE,
  spacing,
  width,
  height,
  white,
  arrayColor,
  TOP,
  backgroundColor,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  BACKCOLOR,
  FONTS,
};
