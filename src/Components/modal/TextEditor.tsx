import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
    placeholder?: string;
    value?: string;
    onChange?: (content: string) => void;
}

const TextEditor: React.FC<RichTextEditorProps> = ({ placeholder, value, onChange }) => {
    const handleChange = (content: string) => {
        if (onChange) {
            onChange(content);
        }
    };

    return (
        <ReactQuill className="w-[100%] h-[192px] "
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            theme="snow"
        />
    );
};

export default TextEditor;
