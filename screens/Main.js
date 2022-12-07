import React from 'react';
import { Heading } from 'native-base';
import { dataMenu } from '../config/data';
// component
import { MainContainer } from '../components/containers/MainContainer';
import { MenuSection } from '../components/menu/MenuSection';

export default class MainScreen extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <MainContainer>
                <Heading style={{marginHorizontal: 16, marginTop: 16, marginBottom: 4}}>Menu</Heading>
                <MenuSection 
                    navigation={this.props.navigation}
                    data={dataMenu}
                />
            </MainContainer>
        );
    };
};