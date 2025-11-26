const isStyleRule = (rule) => rule.type === 1;
const isSameDomain = (styleSheet) => {
    if (!styleSheet.href) {
        return true;
    }
    return styleSheet.href.indexOf(window.location.origin) === 0;
};
const getCSSCustomPropIndex = () => [...document.styleSheets].filter(isSameDomain).reduce((finalArr, sheet) => finalArr.concat([...sheet.cssRules]
    .filter(isStyleRule)
    .reduce((propValArr, rule) => {
    const props = [...rule.style]
        .map((propName) => [propName.trim(), rule.style.getPropertyValue(propName).trim()])
        .filter(([propName]) => propName.indexOf('--ds-typography-') === 0);
    return [...propValArr, ...props];
}, [])), []);
export const getTypography = (typographyRange) => {
    const typographyArray = getCSSCustomPropIndex();
    const typographyVariables = {};
    const prefix = `--ds-typography-${typographyRange}-`;
    typographyArray.forEach(([varName, varValue]) => {
        // Only process variables that match the typography range prefix
        if (!varName.startsWith(prefix)) {
            return;
        }
        const strippedName = varName.replace(prefix, '');
        const parts = strippedName.split('-');
        if (parts.length >= 2) {
            const category = parts[0]; // fontSize, lineHeight, fontWeight
            const variant = parts.slice(1).join('-'); // small, base, large, etc.
            if (category && variant) {
                if (!typographyVariables[category]) {
                    typographyVariables[category] = {};
                }
                typographyVariables[category][variant] = varValue;
            }
        }
    });
    return typographyVariables;
};
