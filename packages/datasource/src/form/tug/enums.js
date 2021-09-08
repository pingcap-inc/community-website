import optionStageOfCompanyUseOfTidb from './optionStageOfCompanyUseOfTidb';
import optionPreferredWayOfSharing from './optionPreferredWayOfSharing';
import optionRolesWantToPlay from './optionRolesWantToPlay';

const convertArrayToSelectOptionItem = (arr) => arr.map((value) => ({ value: value, label: value }));

export const stageOfCompanyUseOfTidb = convertArrayToSelectOptionItem(optionStageOfCompanyUseOfTidb);

export const preferredWayOfSharing = convertArrayToSelectOptionItem(optionPreferredWayOfSharing);

export const rolesWantToPlay = convertArrayToSelectOptionItem(optionRolesWantToPlay);
