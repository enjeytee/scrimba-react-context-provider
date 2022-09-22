import React from "react";
import ThemeContext from "./themeContext.jsx";

class Button extends React.Component {
    render() {
        return (
            <button className={`${this.context}-theme`}>Switch Theme</button>
        );
    };
};
Button.contextType = ThemeContext;
export default Button;