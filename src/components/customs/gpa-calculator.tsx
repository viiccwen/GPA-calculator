"use client";

import { useState, useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Navbar from "@/components/customs/navbar";
import { TransformCaptionDialog } from "@/components/customs/transform-caption-dialog";
import { PointsCaptionDialog } from "@/components/customs/points-cation.dialog";
import InputItem from "@/components/customs/input-item";
import { gp_list, GP_table } from "@/lib/pg-table";
import { gpa_hundred_points } from "@/lib/points";
import { AlertInfoDialog } from "./alertinfo-dialog";

interface Subject {
  level: string;
  count: number;
}

const iniLevelArray: Subject[] = gp_list.map((curlevel) => ({
  level: curlevel,
  count: 0,
}));

export const GPACalculator = () => {
  const [LevelArray, setLevelArray] = useState(iniLevelArray);
  const [sumCredit, setsumCredit] = useState(0);
  const [GPA, setGPA] = useState(0);
  const [hundredScore, setHundredScore] = useState<string>("");

  const HandleChangeCount = (id: number, value: number): void => {
    const updatedSubjects = [...LevelArray];
    updatedSubjects[id] = {
      ...updatedSubjects[id],
      count: value,
    };

    setLevelArray(updatedSubjects);
  };

  useEffect(() => {
    let totalCredits: number = 0;
    let totalPoints: number = 0;

    LevelArray.forEach((LevelArray) => {
      totalCredits += LevelArray.count;
      totalPoints += GP_table[LevelArray.level] * LevelArray.count;
    });

    if (totalCredits > 0) {
      setsumCredit(totalCredits);
      setGPA(parseFloat((totalPoints / totalCredits).toFixed(2)));
      const GPA_str = GPA.toString().padEnd(2, ".").padEnd(4, "0");
      setHundredScore( gpa_hundred_points.get(GPA_str) || "");
    } else {
      setsumCredit(0);
      setGPA(0);
      setHundredScore("");
    }
  }, [LevelArray, GPA]);

  return (
    <>
      <Navbar />
      <div className="w-full mt-[30px] flex justify-center items-center">
        <Card className="w-[700px] mx-2">
          <CardHeader>
            <CardTitle>GPA 計算機</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-1 lg:grid-cols-6">
              <TransformCaptionDialog />
              <PointsCaptionDialog />
              <AlertInfoDialog />
            </div>

            <div className="mt-[30px] flex-col">
              <p>總共 {sumCredit} 學分</p>
              <p>你的 GPA 為：{GPA}</p>
              <p>你的百分制分數為：{hundredScore}</p>
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
