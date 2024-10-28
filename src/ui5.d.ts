import Button from "@ui5/webcomponents/dist/Button.js"

declare global {
    namespace astroHTML {
        namespace JSX {
            interface IntrinsicElements {
                "ui5-button": Partial<InstanceType<typeof Button>>
            }
        }
    }
}
