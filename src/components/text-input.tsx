import { Label } from "@radix-ui/react-label";
import { TextArea } from "./ui/textarea";

interface Props {
  label: string;
  value: string;
  onChange: (text: string) => void;
}

export default function TextInput({ label, value, onChange }: Props) {
  return (
    <>
      <div>
        <Label htmlFor={label}>{label}</Label>
        <TextArea
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        ></TextArea>
      </div>
    </>
  );
}
