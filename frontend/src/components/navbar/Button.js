import React from "react";
import "./Button.css";

const STYLES = ["btn__primary", "btn__outline"];

const SIZE = ["btn__medium", "btn__large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onclick}
            type={type}
        >
            {children}
        </button>
    );
};
