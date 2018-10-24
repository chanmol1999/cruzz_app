import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardTwo extends Component {
  render() {
    return (
        <Card style={{flex: 0}}>
        <CardItem>
            <Left>
            <Thumbnail source={require('../../../res/load.gif')} />
            <Body>
                <Text>Blu Blu Blu</Text>
                <Text note>April 15, 2016</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem>
            <Body>
            <Image source={require('../../../res/load.gif')} style={{height: 50, width: 50, flex: 1}}/>
            <Text>
                //Your text here
            </Text>
            </Body>
        </CardItem>
        <CardItem>
            <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
            </Button>
            </Left>
        </CardItem>
        </Card>
    );
  }
}