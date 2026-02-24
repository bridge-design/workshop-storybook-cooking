import { jsx as _jsx } from "react/jsx-runtime";
import cm from "./button.module.css";
import "../../tokens";
/**
 * The Button component provides a clickable button element with consistent styling.
 *
 * Key Features:
 * - Polymorphic Rendering: Can be rendered as different HTML elements using the `is` prop.
 * - Type Safety: Supports standard button types (button, submit, reset).
 * - Accessibility: Inherits all standard button accessibility features.
 *
 * [Github](https://github.com/bridge-design/super-design-system/tree/main/src/components/button)
 *
 * [Figma Design](https://www.figma.com/design/abc123xyz/Super-Design-System?node-id=1234-5678)
 *
 * [Guidelines](https://super-design-system.dev/guidelines/button)
 */
export const Button = ({ is, className, type = 'button', children, ...props }) => {
    const rootClassName = `${cm.button}${className ? ` ${className}` : ''}`;
    const Component = (is || 'button');
    return (_jsx(Component, { type: is ? undefined : type, className: rootClassName, ...props, children: children }));
};
Button.displayName = 'Button';
