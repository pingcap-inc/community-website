import * as R from 'ramda';

export const isUserSelected = ({ user, selectedUsers }) => {
  return R.find(R.propEq('id', user.id))(selectedUsers) !== undefined;
};
