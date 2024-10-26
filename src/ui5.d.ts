import Button from "@ui5/webcomponents/dist/Button.js"

// 不太會寫
declare global {
    namespace astroHTML {
        namespace JSX {
            interface IntrinsicElements
                extends astroHTML.JSX.IntrinsicElements {
                "ui5-button": Partial<InstanceType<typeof Button>>
            }
        }
    }
}
