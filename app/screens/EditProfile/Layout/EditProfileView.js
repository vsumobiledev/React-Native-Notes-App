import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';
import Button from '../../../shared/components/Button';
import AppStyles from '../../../config/styles';
import Fieldset from '../../../shared/components/Fieldset';

class EditProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.user ? props.user.firstName : null,
      lastName: props.user ? props.user.lastName : null,
      avatar: props.user && props.user.avatar ? props.user.avatar : null
    };
  }
  save = () => {
    if (this.state.firstName && this.state.lastName) {
      this.props.saveUser({
        ...this.props.user,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        avatar: this.state.avatar
      });
      this.props.navigation.goBack();
    }
  };
  onLastNameChange = value => this.setState({ lastName: value });
  onFirstNameChange = value => this.setState({ firstName: value });
  changeAvatar = () => {
    const options = {
      title: 'Select Avatar',
      quality: 1,
      maxWidth: 600,
      maxHeight: 600
    };
    ImagePicker.showImagePicker(options, response => {
      if (!response.didCancel && !response.error) {
        const base64 = `data:image/jpeg;base64,${response.data}`;
        this.setState({
          ...this.state,
          avatar: base64
        });
      }
    });
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.props.user ? (
            <View>
              <TouchableOpacity onPress={this.changeAvatar}>
                <View style={styles.avatarWrapper}>
                  {this.props.user && this.props.user.avatar || this.state.avatar ? (
                    <Image
                      style={styles.avatar}
                      source={{ uri: this.state.avatar }}
                    />
                  ) : (
                    <Image
                      style={styles.avatar}
                      source={require('../../../assets/images/default-avatar.png')}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <View style={styles.dataWrapper}>
                <Fieldset
                  onChangeText={this.onFirstNameChange}
                  textValue={this.state.firstName}
                  placeholder="First name..."
                  title="Firstname"
                  isMultiline={false}
                />
                <Fieldset
                  onChangeText={this.onLastNameChange}
                  textValue={this.state.lastName}
                  placeholder="Last name..."
                  title="Lastname"
                  isMultiline={false}
                />
              </View>
            </View>
          ) : null}
          <View style={styles.button}>
            <Button
              text="SAVE"
              onClick={this.save}
              isLoading={this.props.isLoading}
              colorStart={AppStyles.color.MAIN_COLOR}
              colorEnd={AppStyles.color.MAIN_COLOR}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

EditProfileView.propTypes = {
  navigation: PropTypes.object,
  isLoading: PropTypes.bool,
  save: PropTypes.func,
  saveUser: PropTypes.func,
  uploadAvatar: PropTypes.func,
  avatar: PropTypes.string,
  isAvatarLoading: PropTypes.bool,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    uid: PropTypes.string
  })
};

export default EditProfileView;
