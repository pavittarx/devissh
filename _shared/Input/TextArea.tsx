import styled from "styled-components";

import useTextAreaExpand from "@/_hooks/useTextAreaExpand";

type TextAreaProps = {
  type?: string;
  placeholder: string;
  value: string;
  setValue: Function;
};

const TextAreaContainer = styled.div`
  border: 2px solid var(--border);
  border-radius: 5px;
  height: max-content;

  max-width: 500px;
  color: var(--text);

  .text-input {
    padding: 10px 15px;
    width: 100%;
    min-height: 10rem;
    overflow-y: visible;

    font-size: 0.8rem;
  }
`;

const TextArea = ({ type, placeholder, value, setValue }: TextAreaProps) => {
  // const ref = useTextAreaExpand();

  return (
    <TextAreaContainer>
      <textarea
        className="text-input"
        // ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </TextAreaContainer>
  );
};

export default TextArea;
