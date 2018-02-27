import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import styles from "./styles";
import EntitySettings from '../../CoreBusiness/settings';


class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
    this.modelSettings = new EntitySettings();
  }

  saveData() {
    const model = this.modelSettings;
    console.log("O", model);
    const entitySettings = model.newEntity();

    for (let key in this.state) {
      entitySettings[key] = this.state[key];
    }

    entitySettings.createBy = new Date();

    console.log("##saveData##");
    console.log(entitySettings);

    // salve
    model.saveEntity(entitySettings);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Settings Server</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Host</Label>
              <Input
                value={this.state.host}
                onChangeText={(host) => this.setState({host})}
                placeholder="https://hostiot.com" />
            </Item>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input
                value={this.state.username}
                onChangeText={(username) => this.setState({username})}
              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
                secureTextEntry 
              />
            </Item>
          </Form>
          <Button
            block 
            style={{ margin: 15, marginTop: 50 }}
            onPress={() => this.saveData()}
          >
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
