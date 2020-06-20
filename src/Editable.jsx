import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Wrapper, RootWrapper, InputContainer, InputWrapper } from "./style";
const Editable = ({
                      onChange,
                      type,
                      maxLength,
                      height,
                      width,
                      value,
                      readOnly,
                      tag,
                      minWidth
                  }) => {
    const inputRef = useRef();
    const [data] = useState(value);
    const [borderBottom, setBorderBottom] = useState("2px solid white");
    const [inputWidth, setInputWidth] = useState(width);
    const [InputHeight, setInputHeight] = useState(height);
    const placeCaretAtEnd = el => {
        el.focus();
        if (
            typeof window.getSelection !== "undefined" &&
            typeof document.createRange !== "undefined"
        ) {
            const range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange !== "undefined") {
            const textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    };
    const onFocus = () => {
        if (!readOnly) {
            setInputWidth(width);
            setInputHeight(height);
            setBorderBottom("2px solid #1DA1F1");
        }
    };

    const onBlur = () => {
        setBorderBottom("2px solid white");
        setInputHeight("auto");
        setInputWidth("auto");
    };
    const onKeyUp = function(e) {
        const { textContent } = e.currentTarget;
        const rem = +maxLength - inputRef.current.innerText.length;
        if (rem <= 0) {
            const slicedText = textContent.slice(0, +maxLength);
            inputRef.current.innerText = slicedText;
            placeCaretAtEnd(inputRef.current);
            onChange(slicedText);
        } else {
            onChange(textContent);
        }
    };
    const onPaste = e => {
        e.preventDefault();
        const { textContent } = e.currentTarget;
        const text = e.clipboardData.getData("text/plain");
        const fullText = textContent + text;
        const mData = fullText.slice(0, +maxLength);
        inputRef.current.innerHTML = "";
        document.execCommand("insertHTML", false, mData);
    };
    const CustomTag = `${tag}`;
    return (
        <Wrapper>
            <RootWrapper>
                <InputContainer width={width}>
                    <InputWrapper width={inputWidth} readOnly={readOnly}>
                        <CustomTag
                            className={type}
                            ref={inputRef}
                            contentEditable={!readOnly}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onInput={onKeyUp}
                            onPaste={onPaste}
                            style={{
                                height: InputHeight === "auto" ? "auto" : `${InputHeight}px`,
                                border: borderBottom,
                                minWidth: minWidth
                            }}
                            dangerouslySetInnerHTML={{ __html: data.replace(/\n/g, "<br/>") }}
                        />
                    </InputWrapper>
                </InputContainer>
            </RootWrapper>
        </Wrapper>
    );
};

Editable.defaultProps = {
    width: "auto",
    height: "auto",
    type: "text",
    value: "",
    readOnly: false
};

Editable.propTypes = {
    value: PropTypes.string,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    maxLength: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    readOnly: PropTypes.bool
};

export default Editable;
