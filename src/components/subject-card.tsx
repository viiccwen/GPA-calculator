import * as React from "react";

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
  onChangeName: (newName: string) => void;
}

export function SubjectCard({
  name,
  credit,
  level,
  onDeleteSubject,
  onChangeCredit,
  onChangeLevel,
  onChangeName,
}: Props) {
  return (
    <Card className="mt-5 flex">
      <CardContent>
        <div className="grid grid-cols-4 gap-1 lg:gap-3 mt-2">
          <Input
            type="text"
            onChange={(e) => {
              onChangeName(e.target.value);
            }}
          />
          <Input
            type="number"
            min="0"
            max="4"
            placeholder={credit.toString()}
            onChange={(e) => {
              onChangeCredit(parseInt(e.target.value));
            }}
          />
          <Select
            value={level}
            onValueChange={(selected) => {
              onChangeLevel(selected);
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
