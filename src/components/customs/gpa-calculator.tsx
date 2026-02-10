import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Navbar from "@/components/customs/navbar";
import { TransformCaptionDialog } from "@/components/customs/transform-caption-dialog";
import { PointsCaptionDialog } from "@/components/customs/points-cation.dialog";
import InputItem from "@/components/customs/input-item";
import { AlertInfoDialog } from "./alertinfo-dialog";
import { useGPA } from "@/hooks/gpa";

export const GPACalculator = () => {
  const { LevelArray, sumCredit, GPA, hundredScore, HandleChangeCount } =
    useGPA();

  return (
    <div className="min-h-screen my-5">
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
    </div>
  );
};
