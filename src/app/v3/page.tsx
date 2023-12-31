"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

import { TransformCaptionDialog } from "@/components/transform-caption-dialog";
import { PointsCaptionDialog } from "@/components/points-caption-dialog";
import Navbar from "@/components/navbar";
import TextInput from "@/components/text-input";

const GPAtable: { [key: string]: number } = {
  "A+": 4.3,
  A: 4,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  F: 0,
  X: 0,
};

export default function V3() {
  const [sumCredit, setSumCredit] = useState(0);
  const [GPA, setGPA] = useState(0);

  const HandleTextChange = (text: string) => {
    const matchGPA = /\t(\d) \t([A-CFX][+_]*)/g;
    const matchResults = Array.from(text.matchAll(matchGPA));

    let credits = 0;
    let points = 0;

    matchResults.forEach(([_, count, level]) => {
      credits += parseInt(count);
      points += parseInt(count) * GPAtable[level];
    })

    setSumCredit(credits);
    setGPA(points / credits);
  };

  return (
    <>
      <Navbar />

      <div className="w-full mt-[50px] flex justify-center items-center">
        <Card className="w-[700px]">
          <CardHeader>
            <CardTitle>臺大系統 GPA 計算機 v3</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-1 lg:grid-cols-6">
              <TransformCaptionDialog />
              <PointsCaptionDialog />
            </div>

            <div className="mt-[30px]" id="a">
              總共 {sumCredit} 學分
              <br />
              你的 GPA 為：{GPA}
            </div>

            <TextInput
              label="Paste your gpa here:"
              onChange={(text) => {
                HandleTextChange(text);
              }}
            ></TextInput>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
