"use client";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Props {
  target: string;
  onChangeCount: (updatedCount: number) => void;
}

export default function InputItem({ target, onChangeCount }: Props) {
  const [curCount, setcurCount] = useState<string | number>("");

  const UpdatedCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setcurCount(0);
      onChangeCount(0);
      return;
    }

    const newCount: number = parseInt(e.target.value);
    if (newCount < 0) {
      setcurCount(0);
      onChangeCount(0);
    } else {
      setcurCount(newCount);
      onChangeCount(newCount);
    }
  };

  return (
    <>
      <div>
        <Label htmlFor={target}>{target}: </Label>
        <Input
          type="number"
          min="0"
          defaultValue={curCount}
          onChange={(e) => UpdatedCount(e)}
        ></Input>
      </div>
    </>
  );
}
