declare const icons: {
    home: import("react").JSX.Element;
    user: import("react").JSX.Element;
    search: import("react").JSX.Element;
    heart: import("react").JSX.Element;
    star: import("react").JSX.Element;
    settings: import("react").JSX.Element;
    bell: import("react").JSX.Element;
    mail: import("react").JSX.Element;
    check: import("react").JSX.Element;
    close: import("react").JSX.Element;
};
export type IconName = keyof typeof icons;
export interface IconProps {
    name: IconName;
    size?: number;
    color?: string;
    className?: string;
}
export declare const Icon: ({ name, size, color }: IconProps) => import("react").JSX.Element | null;
export {};
//# sourceMappingURL=icon.d.ts.map