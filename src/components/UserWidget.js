import React, { PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
};

const UserWidget = (props) => (
  <div>
      <List>
        <ListItem
          leftAvatar={<Avatar src={props.user.picture.thumbnail} />}
          primaryText={props.user.cell}
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>{props.user.name.first} {props.user.name.last}</span> --
              {props.user.location.city}
              <FontIcon onClick={props.deleteUser} className="material-icons" style={iconStyles} color={red500}>delete_forever</FontIcon>
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
      </List>
  </div>
);

UserWidget.PropTypes = {
  user: React.PropTypes.object,
  deleteUser: React.PropTypes.func
}

export default UserWidget;
