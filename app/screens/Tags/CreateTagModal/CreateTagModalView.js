import React from 'react';
import { View, Text, Modal } from 'react-native';
import TextInputComponent from '../../../shared/components/TextInput/TextInputComponent';
import { HueSlider } from 'react-native-color';
import Ripple from 'react-native-material-ripple';
import styles from './styles';
import Tag from '../../../shared/components/Tag/index';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';

class CreateTagModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: !this.props.oldTag ? '' : this.props.oldTag.name,
      color: !this.props.oldTag ? '#D60000' : this.props.oldTag.color
    };
  }
  save = () => {
    if (this.state.name.length > 2) {
      if (this.props.mode === 'save') {
        this.props.addTag({
          name: this.state.name,
          color: this.state.color
        });
      } else if (this.props.mode === 'edit') {
        this.props.editTag({
          name: this.state.name,
          color: this.state.color
        });
      }
      this.props.closeModal();
      this.clearState();
    }
  };
  clearState = () => {
    this.setState({
      name: '',
      color: '#D60000'
    });
  };
  closeModal = () => {
    this.clearState();
    this.props.closeModal();
  };
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={this.closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.container} elevation={5}>
            <View style={styles.inputs}>
              <Text style={styles.inputTitle}>Tag name</Text>
              <TextInputComponent
                onChangeText={value => this.setState({ name: value })}
                value={this.state.name}
                placeholder="Enter name..."
              />
              <Text style={styles.inputTitle}>Color</Text>
              <HueSlider
                style={styles.sliderRow}
                gradientSteps={40}
                value={tinycolor(this.state.color).toHsl().h}
                onValueChange={value =>
                  this.setState({
                    color: tinycolor({ s: 1, l: 0.5, h: value }).toHexString()
                  })
                }
              />
              <Text style={styles.inputTitle}>Preview</Text>
              <Tag value={this.state.name} color={this.state.color} />
              <View style={styles.saveWrapper}>
                <Ripple
                  rippleContainerBorderRadius={50}
                  style={styles.save}
                  onPress={this.save}
                >
                  <Text style={styles.saveText}>SAVE</Text>
                </Ripple>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

CreateTagModalView.propTypes = {
  closeModal: PropTypes.func,
  modalVisible: PropTypes.bool,
  addTag: PropTypes.func,
  mode: PropTypes.string,
  oldTag: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string
  }),
  editTag: PropTypes.func
};

export default CreateTagModalView;
