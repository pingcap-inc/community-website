import React, { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Menu as AntMenu } from 'antd';

const withActionMenu = (Menu = AntMenu, MenuItem = Menu.Item) => {
  const ActionMenuContext = createContext({
    loading: false,
  });

  const ActionMenu = ({ action, children, ...props }) => {
    const [loading, setLoading] = useState(false);

    const onClick = useCallback(
      async (params) => {
        try {
          setLoading(true);
          await action(params);
        } catch (e) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(e, 'errors thrown by action() in ActionDropdown will be ignored.');
          }
        } finally {
          setLoading(false);
        }
      },
      [action]
    );

    return (
      <ActionMenuContext.Provider value={{ loading }}>
        <Menu {...props} onClick={onClick}>
          {children}
        </Menu>
      </ActionMenuContext.Provider>
    );
  };

  const ActionMenuItem = ({ children, ...props }) => {
    const { loading } = useContext(ActionMenuContext);

    return (
      <MenuItem disabled={loading} {...props}>
        {children}
      </MenuItem>
    );
  };

  Object.assign(ActionMenu, Menu);

  ActionMenu.propTypes = {
    action: PropTypes.func.isRequired,
    Menu: PropTypes.elementType,
    ...Menu.propTypes,
  };

  ActionMenuItem.propTypes = MenuItem.propTypes;

  ActionMenu.Item = ActionMenuItem;

  return ActionMenu;
};

export default withActionMenu;
