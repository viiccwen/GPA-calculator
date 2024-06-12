"use client";

import { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Navbar from "@/components/customs/navbar";
import { TransformCaptionDialog } from "@/components/customs/transform-caption-dialog";
import { PointsCaptionDialog } from "@/components/customs/points-cation.dialog";
import InputItem from "@/components/customs/input-item";

const table = [
  "A+",
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C+",
  "C",
  "C-",
  "D",
  "E",
  "F",
  "X",
];

const GPAtable: { [key: string]: number } = {
  "A+": 4.3,
  "A": 4,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3.0,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2.0,
  "C-": 1.7,
  "D": 1.0,
  "E": 0,
  "F": 0,
  "X": 0,
};

interface Subject {
  level: string;
  count: number;
}

const iniLevelArray: Subject[] = table.map((curlevel) => ({
  level: curlevel,
  count: 0,
}));

export const GPACalculator = () => {
  const [LevelArray, setLevelArray] = useState(iniLevelArray);
  const [sumCredit, setsumCredit] = useState(0);
  const [GPA, setGPA] = useState(0);

  const HandleChangeCount = (id: number, value: number) => {
    const updatedSubjects = [...LevelArray];
    updatedSubjects[id] = {
      ...updatedSubjects[id],
      count: value,
    };

    setLevelArray(updatedSubjects);
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
            <CardTitle>GPA 計算機</CardTitle>
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

            <div className="mt-[50px] grid grid-cols-3 gap-3">
              {LevelArray.map((LevelItem, index) => (
                <InputItem
                  key={index}
                  target={LevelItem.level}
                  onChangeCount={(updatedCount) =>
                    HandleChangeCount(index, updatedCount)
                  }
                ></InputItem>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
