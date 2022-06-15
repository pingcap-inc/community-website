import { cdn } from '~/utils';

export const getImage = (name) => cdn.getImageUrl(`/images/home/${name}`);
