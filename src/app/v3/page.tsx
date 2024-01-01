"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

import { TransformCaptionDialog } from "@/components/transform-caption-dialog";
import { PointsCaptionDialog } from "@/components/points-caption-dialog";
import Navbar from "@/components/navbar";
import TextInput from "@/components/text-input";

const table = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "F", "X"];

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

interface Subject {
  level: string;
  count: number;
}

const iniLevelArray: Subject[] = table.map((curlevel) => ({
  level: curlevel,
  count: 0,
}));

export default function V3() {
  const [LevelArray, setLevelArray] = useState(iniLevelArray);
  const [sumCredit, setsumCredit] = useState(0);
  const [GPA, setGPA] = useState(0);

  const HandleTextChange = (text: string) => {
    const matchGPA = /\t(\d) \t([A-CFX][+_]*)/g;
    const matchResults = Array.from(text.matchAll(matchGPA));
    const parsedGPA = matchResults.reduce((prev, curr) => {
      const [_, count, level] = curr;
      const idx = table.findIndex((item) => item == level);
      prev[idx].count += parseInt(count);
      return prev;
    }, iniLevelArray)

    setLevelArray(parsedGPA);
  };

  useEffect(() => {
    let totalCredits = 0;
    let totalPoints = 0;

    LevelArray.forEach((LevelArray) => {
      totalCredits += LevelArray.count;
      totalPoints += GPAtable[LevelArray.level] * LevelArray.count;
    });

    if (totalCredits > 0) {
      setsumCredit(totalCredits);
      setGPA(parseFloat((totalPoints / totalCredits).toFixed(2)));
    } else {
      setsumCredit(0);
      setGPA(0);
    }
  }, [LevelArray]);

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
