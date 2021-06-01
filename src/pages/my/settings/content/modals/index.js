export { default as SetPasswordModal } from './setPasswordModal.component';
export { default as UpdateEmailModal } from './updateEmailModal.component';
export { default as UpdatePasswordModal } from './updatePasswordModal.component';
export { default as UpdatePhoneModal } from './updatePhoneModal.component';

export const MODALS = {
  SET_PASSWORD: Symbol('SET_PASSWORD'),
  UPDATE_EMAIL: Symbol('UPDATE_EMAIL'),
  UPDATE_PASSWORD: Symbol('UPDATE_PASSWORD'),
  UPDATE_PHONE: Symbol('UPDATE_PHONE'),
};
