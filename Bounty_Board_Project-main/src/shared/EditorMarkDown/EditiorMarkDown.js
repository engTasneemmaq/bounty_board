import React, { useState, useEffect } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { ToolMarkDown } from "./ToolMarkDown";


export const EditorMarkDown = ({ divClassName, value, onChange, placeholder, bg }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleChange = (state) => {
    setEditorState(state);
    const content = state.getCurrentContent().getPlainText();
    onChange(content); 
  };

  return (
    <div className={divClassName} style={{backgroundColor:`${bg}`}}>
      <Editor
        editorState={editorState}
        onChange={handleChange}
        placeholder={placeholder}
        
      />
      <ToolMarkDown editorState={editorState} setEditorState={setEditorState} />
    </div>
  );
};
