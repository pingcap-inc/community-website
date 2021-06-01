export { default as UpdateEmailModal } from './updateEmailModal.component';
export { default as UpdatePhoneModal } from './updatePhoneModal.component';
export { default as setPasswordModal } from './setPasswordModal.component';
export { default as updatePasswordModal } from './updatePasswordModal.component';

export const MODALS = {
  SET_PASSWORD: Symbol('SET_PASSWORD'),
  UPDATE_EMAIL: Symbol('UPDATE_EMAIL'),
  UPDATE_PASSWORD: Symbol('UPDATE_PASSWORD'),
  UPDATE_PHONE: Symbol('UPDATE_PHONE'),
};
