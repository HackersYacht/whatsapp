import React from 'react';

import { Header, Left, Title, Icon, Button, Right } from 'native-base';

const AppHeader = () => {
  return (
    <Header
      androidStatusBarColor="#054E47"
      style={{ backgroundColor: '#075E54' }}>
      <Left>
        <Title>WhatsApp</Title>
      </Left>
      <Right>
        <Button transparent>
          <Icon name="search" style={{ fontSize: 20 }} />
        </Button>
        <Button transparent>
          <Icon name="ellipsis-vertical" />
        </Button>
      </Right>
    </Header>
  );
};

export default AppHeader;
