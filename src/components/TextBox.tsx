import { useEffect, useState } from 'react';

interface TextBoxProps {
    text: string;
    size?: string;
    bold?: boolean;
    alignment?: "left" | "center" | "right";
    position?: "top" | "middle" | "bottom";
}

const TextBox: React.FC<TextBoxProps> = ({ text, size = "16px", bold = false, alignment = "left", position = "top" }) => {
    return (
        <div className={`text-box ${position}`} style={{ textAlign: alignment, fontWeight: bold ? 'bold' : 'normal', fontSize: size }}>
            {text}
        </div>
    );
};
