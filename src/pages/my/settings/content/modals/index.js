export { default as SetPasswordModal } from './setPasswordModal';
export { default as UpdateEmailModal } from './updateEmailModal';
export { default as UpdatePasswordModal } from './updatePasswordModal';
export { default as UpdatePhoneModal } from './updatePhoneModal';

export const MODALS = {
  SET_PASSWORD: Symbol('SET_PASSWORD'),
  UPDATE_EMAIL: Symbol('UPDATE_EMAIL'),
  UPDATE_PASSWORD: Symbol('UPDATE_PASSWORD'),
  UPDATE_PHONE: Symbol('UPDATE_PHONE'),
};
