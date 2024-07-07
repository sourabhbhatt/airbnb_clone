import {StyleSheet} from 'react-native';
import COLORS from '../../constants/Colors';
import FONTS from '../../constants/Fonts';

export default StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#fff'},
  container: {
    backgroundColor: '#fff',
    // minHeight: 80,
    // maxHeight: 300,
    height: 130,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  title: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.title,
    fontSize: 16,
  },
  subTitle: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.subTitle,
    fontSize: 14,
  },
  searchBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 10,
    padding: 14,
    alignItems: 'center',
    width: 280,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c2c2c2',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#A2A0A2',
    borderRadius: 24,
  },

  /* Category Styles */
  scrollViewContent: {
    gap: 20,
    paddingHorizontal: 16,
  },
  separator: {marginLeft: 6},
  categoryText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: COLORS.grey,
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: '#000',
  },
  categoriesBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});
