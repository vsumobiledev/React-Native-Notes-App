import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: 'rgba(40, 40, 40, 1)',
    borderBottomWidth: 0.3,
    padding: 5
  },
  filterBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginLeft: 30,
    marginRight: 30
  },
  btnText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkBoxText: {
    marginLeft: 5
  }
});

export default styles;
