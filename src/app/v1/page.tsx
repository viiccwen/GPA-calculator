"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import { TransformCaptionDialog } from "@/components/transform-caption-dialog";
import { PointsCaptionDialog } from "@/components/points-caption-dialog";
import Navbar from "@/components/navbar";
import { SubjectCard } from "@/components/subject-card";

interface Subject {
  id: number;
  name: string;
  credit: number;
  level: string;
}

const iniSubject: Subject[] = [];

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

export default function V1() {
  const [Subjects, setSubjects] = useState(iniSubject);
  const [GPA, setGPA] = useState(0);
  const [sumCredit, setsumCredit] = useState(0);

  const HandleAddSubject = () => {
    const newId =
      Subjects.length > 0
        ? Math.max(...Subjects.map((subject) => subject.id)) + 1
        : 0;

    const newSubject = {
      id: newId,
      name: "",
      credit: 0,
      level: "A+",
    };
    setSubjects([...Subjects, newSubject]);
  };

  const HandleDeleteSubject = (delId: number) => {
    const updatedSubjects = Subjects.filter((subject) => subject.id !== delId);

    setSubjects(updatedSubjects);
  };

  const HandleChangeName = (id: number, value: string) => {
    const targetIndex = Subjects.findIndex((Subjects) => Subjects.id === id);

    const updatedSubjects = [...Subjects];
    updatedSubjects[targetIndex] = {
      ...updatedSubjects[targetIndex],
      name: value,
    };

    setSubjects(updatedSubjects);
  };

  const HandleChangeCredit = (id: number, value: number) => {
    const targetIndex = Subjects.findIndex((Subjects) => Subjects.id === id);

    const updatedSubjects = [...Subjects];
    updatedSubjects[targetIndex] = {
      ...updatedSubjects[targetIndex],
      credit: value,
    };

    setSubjects(updatedSubjects);
  };

  const HandleChangeLevel = (id: number, value: string) => {
    const targetIndex = Subjects.findIndex((Subjects) => Subjects.id === id);

    const updatedSubjects = [...Subjects];

    updatedSubjects[targetIndex] = {
      ...updatedSubjects[targetIndex],
      level: value,
    };

    setSubjects(updatedSubjects);
  };

  useEffect(() => {
    let totalCredits = 0;
    let totalPoints = 0;

    Subjects.forEach((subject) => {
      totalCredits += subject.credit;
      totalPoints += GPAtable[subject.level] * subject.credit;
    });

    if (totalCredits > 0) {
      setsumCredit(totalCredits);
      setGPA(parseFloat((totalPoints / totalCredits).toFixed(2)));
    } else {
      setsumCredit(0);
      setGPA(0);
    }

    console.log(Subjects);
  }, [Subjects]);

  return (
    <>
      <Navbar />
      <div className="w-full mt-[50px] flex justify-center items-center">
        <Card className="w-[700px]">
          <CardHeader>
            <CardTitle>GPA 計算機 v1</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-1 lg:grid-cols-6">
              <TransformCaptionDialog />
              <PointsCaptionDialog />
              <div className="text-center lg:col-start-6">
                <Button onClick={HandleAddSubject}>新增</Button>
              </div>
            </div>

            <div className="mt-[30px]">
              總共 {sumCredit} 學分
              <br />
              你的 GPA 為：{GPA.toFixed(2)}
            </div>

            <div className="mt-[50px]">
              <div className="flex justify-around">
                <div>名稱</div>
                <div>學分數</div>
                <div>等第</div>
                <div className="mr-5">功能</div>
              </div>
              {Subjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  name={subject.name}
                  credit={subject.credit}
                  level={subject.level}
                  onDeleteSubject={() => HandleDeleteSubject(subject.id)}
                  onChangeCredit={(newCredit) =>
                    HandleChangeCredit(subject.id, newCredit)
                  }
                  onChangeLevel={(newLevel) =>
                    HandleChangeLevel(subject.id, newLevel)
                  }
                  onChangeName={(newName) =>
                    HandleChangeName(subject.id, newName)
                  }
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
