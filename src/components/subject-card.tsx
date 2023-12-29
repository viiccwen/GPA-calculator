import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const levels = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "F", "X"];

interface Props {
  name: string;
  credit: number;
  level: string;
  onDeleteSubject: () => void;
  onChangeCredit: (newCredit: number) => void;
  onChangeLevel: (newLevel: string) => void;
}

export function SubjectCard({
  name,
  credit,
  level,
  onDeleteSubject,
  onChangeCredit,
  onChangeLevel,
}: Props) {
  const [curLevel, setcurLevel] = useState(level);
  const [curCredit, setcurCredit] = useState(credit);

  const UpdatedCredit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCredit = parseInt(e.target.value);
    setcurCredit(newCredit);
    onChangeCredit(newCredit);
  };

  const UpdatedLevel = (newLevel: string) => {
    setcurLevel(newLevel);
    onChangeLevel(newLevel);
  };

  return (
    <Card className=" mt-5 w-[650px]">
      <CardContent>
        <div className="grid grid-cols-4 gap-3 mt-2">
          <Input defaultValue={name} />
          <Input
            type="number"
            min="0"
            max="4"
            defaultValue={curCredit}
            onChange={(e) => {
              UpdatedCredit(e);
            }}
          />
          <Select
            defaultValue={curLevel}
            onValueChange={(selected) => {
              UpdatedLevel(selected);
            }}
          >
            <SelectTrigger id="framework">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              {levels.map((level, index) => (
                <SelectItem value={level} key={index}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            className=" bg-red-600 hover:bg-red-700"
            onClick={onDeleteSubject}
          >
            刪除
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
