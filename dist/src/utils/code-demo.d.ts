import { StoryObj } from '@storybook/react';
interface CreateCodeDemoOptions<T> {
    /** The story to be used in the code demo */
    story: StoryObj<T>;
    /** The name of the component to be used in the code demo */
    componentName?: string | undefined;
    /** The props to be passed to the component */
    props?: StoryObj<T>['args'];
    /** Optional custom code to be used instead of the default template */
    code?: string;
    /** Additional imports to be made available in the code demo */
    availableImports?: Record<string, unknown>;
}
export declare const createCodeDemo: <T>({ story, componentName, props, code, availableImports, }: CreateCodeDemoOptions<T>) => void;
export declare const CodeDemoStoryParams: {
    parameters: {
        docs: {
            excludeFromStoryGrid: boolean;
        };
        controls: {
            disable: boolean;
        };
        liveCodeEditor: {
            disable: boolean;
        };
        actions: {
            disable: boolean;
        };
        a11y: {
            disable: boolean;
        };
    };
};
export {};
//# sourceMappingURL=code-demo.d.ts.map