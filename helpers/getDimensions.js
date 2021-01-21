import { Dimensions } from 'react-native';

export const getDimensions = () => {
    const dimensions = {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        isLandscape: (Dimensions.get('screen').width > Dimensions.get('screen').height)
    };

    return dimensions;
};