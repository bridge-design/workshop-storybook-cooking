import { jsx as _jsx } from "react/jsx-runtime";
import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks';
import { useEffect, useState } from 'react';
import { getColors } from '../../tokens/getColors';
export const ColorPaletteDisplay = ({ colorRange, titlePrefix = 'theme.colors' }) => {
    const [colorVariables, setColorVariables] = useState({});
    useEffect(() => {
        const fetchedColors = getColors(colorRange);
        setColorVariables(fetchedColors);
    }, [colorRange]);
    return (_jsx(ColorPalette, { children: Object.entries(colorVariables).map(([colorType, shades]) => (_jsx(ColorItem, { title: `${titlePrefix}.${colorType}`, subtitle: "", colors: shades }, colorType))) }));
};
