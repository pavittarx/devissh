import styled from "styled-components";

type TextInputProps = {
  type?: string;
  placeholder: string;
  value: string;
  setValue: Function;
};

const TextInputContainer = styled.div`
  border: 2px solid var(--border);
  border-radius: 5px;

  max-width: 500px;
  color: var(--text);

  .text-input {
    padding: 10px 15px;
    width: 100%;
    font-size: 0.8rem;
  }
`;

const TextInput = ({ type, placeholder, value, setValue }: TextInputProps) => {
  return (
    <TextInputContainer>
      <input
        className="text-input"
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </TextInputContainer>
  );
};

export default TextInput;
