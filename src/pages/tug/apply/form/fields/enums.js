import optionStageOfCompanyUseOfTidb from './optionStageOfCompanyUseOfTidb.json';
import optionPreferredWayOfSharing from './optionPreferredWayOfSharing.json';
import optionRolesWantToPlay from './optionRolesWantToPlay.json';
import optionChannel from './optionChannel.json';

const convertArrayToSelectOptionItem = (arr) => arr.map((value) => ({ value, label: value }));

export const stageOfCompanyUseOfTidb = convertArrayToSelectOptionItem(optionStageOfCompanyUseOfTidb);

export const preferredWayOfSharing = convertArrayToSelectOptionItem(optionPreferredWayOfSharing);

export const rolesWantToPlay = convertArrayToSelectOptionItem(optionRolesWantToPlay);

export const channel = convertArrayToSelectOptionItem(optionChannel);
