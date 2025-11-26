import { Avatar as AvatarPrimitive } from "radix-ui";
declare const avatarSizes: readonly ["small", "medium", "large"];
export interface AvatarProps extends AvatarPrimitive.AvatarProps {
    /** The source URL of the avatar image */
    src: string;
    /** Alternative text for the avatar image, used for accessibility */
    alt: string;
    /** Size variant of the avatar. Can be 'small', 'medium', or 'large'. Defaults to 'medium' */
    size?: typeof avatarSizes[number];
    /** Optional id of the top element */
    id?: string;
    /** Optional image for placeholder, which is displayed while avatar is loading or in case of error */
    placeholderSrc?: string;
    /** Optional className for adding custom CSS classes to the Avatar element. */
    className?: string;
    /** Optional click event handler */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
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
export declare const Avatar: {
    ({ src, alt, size, id, placeholderSrc, className, ...props }: AvatarProps): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=avatar.d.ts.map