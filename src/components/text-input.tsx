import { Label } from "@radix-ui/react-label";
import { TextArea } from "./ui/textarea";

interface Props {
  label: string;
  onChange: (text: string) => void;
}

export default function TextInput({ label, onChange }: Props) {
  return (
    <>
      <div>
        <Label htmlFor={label}>{label}</Label>
        <TextArea
          defaultValue={""}
          rows={20}
          onChange={(e) => onChange(e.target.value)}
        ></TextArea>
      </div>
    </>
  );
}
