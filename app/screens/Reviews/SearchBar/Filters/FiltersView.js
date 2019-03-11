import React from 'react';
import { View, TouchableOpacity, Text, LayoutAnimation, Platform, UIManager } from 'react-native';
import CancelableTag from '../CancelableTag';
import AddTag from '../AddTag';
import CheckBox from '../CheckBox';
import styles from './styles';
class FiltersView extends React.Component {
    constructor() {
        super();
     
        this.state = { 
            expanded: false,
            tags: [
                {value: 'Fantasy', color: '#E94358'},
                {value: 'Horror', color: '#E94358'},
                {value: 'Comedy', color: '#E94358'},
                {value: 'Fantasy1', color: '#E94358'},
                {value: 'Horror1', color: '#E94358'},
                {value: 'Comedy1', color: '#E94358'},
            ],
            isChecked: false,
        };
        
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    changeLayout = () => {
        const { expanded } = this.state;
        LayoutAnimation.configureNext(LayoutAnimation.create(300, 'easeInEaseOut', 'scaleY'));
        this.setState({ expanded: !expanded });
    }

    deselectTag = (value) => {
        const { tags } = this.state;
        tags.splice(tags.findIndex((tag) => tag.value === value) - 1, 1);
        this.setState({ tags }); 
    }

    onCheckBoxClick = () => {
        const { isChecked } = this.state; 
        this.setState({ isChecked: !isChecked });
    }

    renderSelectedTags = (tags) => tags.map((tag) => (
        <CancelableTag key={tag.value} value={tag.value} color={tag.color} onClick={this.deselectTag} />
    ))

    render() {
        const { tags, isChecked } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={1} onPress={this.changeLayout} style={styles.Btn}>
                    <Text style={styles.btnText}>Filters</Text>
                </TouchableOpacity>
                <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
                    <View style={styles.tagsContainer}>
                        {this.renderSelectedTags(tags)}
                        <AddTag />
                    </View>
                    <TouchableOpacity onPress={this.onCheckBoxClick} style={styles.checkBoxContainer}>
                        <CheckBox isCheck={isChecked}/>
                        <Text style={styles.checkBoxText}>Only my reviews</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default FiltersView;
