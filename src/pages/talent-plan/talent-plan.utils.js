import { cdn } from '~/utils';

export const getImage = (name) => cdn.getImageUrl(`/images/talent-plan/${name}`);
