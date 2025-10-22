import { RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { StyleButton } from "./StyleButton";
import {
      BoldOutlined,
      ItalicOutlined,
      UnderlineOutlined,
      StrikethroughOutlined,
      LinkOutlined,
      UnorderedListOutlined,
      OrderedListOutlined,
} from "@ant-design/icons";


const INLINE_STYLES = [
      { label: <BoldOutlined />, style: "BOLD" },
      { label: <ItalicOutlined />, style: "ITALIC" },
      { label: <UnderlineOutlined />, style: "UNDERLINE" },
      { label: <StrikethroughOutlined />, style: "STRIKETHROUGH" },
];

const BLOCK_TYPES = [
      { label: <UnorderedListOutlined />, style: "unordered-list-item" },
      { label: <OrderedListOutlined />, style: "ordered-list-item" },
];



export const ToolMarkDown = ({ editorState, setEditorState }) => {
      const currentStyle = editorState.getCurrentInlineStyle();
      const toggleInlineStyle = (style) => {
            setEditorState(RichUtils.toggleInlineStyle(editorState, style));
      };
      const toggleBlockType = (blockType) => {
            setEditorState(RichUtils.toggleBlockType(editorState, blockType));
      };

      const toggleLink = () => {
            // Note For Zaid 1. change the style for the alert 2. apply link method
            alert("Link toggle not implemented.");
      };

      return (
            <div className="absolute bottom-1 left-4 flex gap-2 text-gray-700 px-2 py-1 rounded z-10">
                  {INLINE_STYLES.map(({ label, style }) => (
                        <StyleButton
                              key={style}
                              active={currentStyle.has(style)}
                              label={label}
                              onToggle={toggleInlineStyle}
                              style={style}
                        />
                  ))}

                  <div className="flex gap-[10px] relative before:content-[''] before:absolute before:w-[1px] before:h-[87%] before:bg-[#e4e5e8] before:top-[2px] before:left-[-2px] after:content-[''] after:absolute after:w-[1px] after:h-[87%] after:bg-[#e4e5e8] after:top-[2px] after:right-[-2px]">
                        <button
                              type="button"
                              className="px-2 py-1  rounded hover:bg-gray-200 text-gray-700 transition-colors"
                              onMouseDown={(e) => {
                                    e.preventDefault();
                                    toggleLink();
                              }}
                              aria-label="Add link"
                        >
                              <LinkOutlined />
                        </button>
                  </div>

                  {BLOCK_TYPES.map(({ label, style }) => {
                        const selection = editorState.getSelection();
                        const blockType =
                              editorState
                                    .getCurrentContent()
                                    .getBlockForKey(selection.getStartKey())
                                    .getType() || "";
                        const active = blockType === style;

                        return (
                              <StyleButton
                                    key={style}
                                    active={active}
                                    label={label}
                                    onToggle={toggleBlockType}
                                    style={style}
                              />
                        );
                  })}
            </div>
      );
};