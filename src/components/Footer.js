import React from 'react';
import { List } from 'semantic-ui-react';

function Footer() {
  return (
    <List horizontal link>
      <List.Item as="a" href="https://github.com/BloodyBogan" target="_blank">
        @Michal Kaštan, 2020
      </List.Item>
    </List>
  );
}

export default Footer;
