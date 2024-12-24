import { Component } from "./Component"
import { SecondComponent } from "./SecondComponent"

export const ParentComponent = () => {

    return (
        <div>
            <Component />
            <SecondComponent />

            <p>There are two components above</p>
        </div>
    )
}