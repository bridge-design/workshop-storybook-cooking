import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar as AvatarPrimitive } from "radix-ui";
import cm from "./avatar.module.css";
const avatarSizes = ['small', 'medium', 'large'];
/**
 * The Avatar component displays a user's profile picture or fallback icon in a circular format.
 *
 * Key Features:
 * - Image Support: Displays user images with automatic fallback handling.
 * - Size Variations: The Avatar supports different sizes (small, medium, large) to fit various UI contexts.
 * - Accessibility: The component includes proper alt text support for screen readers.
 *
 * [Github](https://github.com/bridge-design/super-design-system/tree/main/src/components/avatar)
 *
 * [Figma Design](https://www.figma.com/design/abc123xyz/Super-Design-System?node-id=1234-5678)
 *
 * [Guidelines](https://super-design-system.dev/guidelines/avatar)
 */
export const Avatar = ({ src, alt, size = 'medium', id, placeholderSrc, className, ...props }) => {
    const sizeClass = cm[`avatarRoot--${size}`] || cm['avatarRoot--medium'];
    const rootClassName = `${cm.avatarRoot} ${sizeClass}${className ? ` ${className}` : ''}`;
    return (_jsxs(AvatarPrimitive.Root, { id: id, className: rootClassName, ...props, children: [_jsx(AvatarPrimitive.Image, { src: src, alt: alt, className: cm.avatarImage }), placeholderSrc && (_jsx(AvatarPrimitive.Image, { src: placeholderSrc, alt: "", className: cm.avatarImage })), _jsx(AvatarPrimitive.Fallback, { className: cm.avatarFallback, delayMs: 600, children: "\uD83D\uDC64" })] }));
};
Avatar.displayName = 'Avatar';
