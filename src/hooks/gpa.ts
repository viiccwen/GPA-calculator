import { gp_list, GP_table } from "@/lib/pg-table";
import { gpa_hundred_points } from "@/lib/points";
import { useEffect, useState } from "react";

export const useGPA = () => {
  const iniLevelArray = gp_list.map((curlevel) => ({
    level: curlevel,
    count: 0,
  }));

  const [LevelArray, setLevelArray] = useState(iniLevelArray);
  const [sumCredit, setsumCredit] = useState(0);
  const [GPA, setGPA] = useState(0);
  const [hundredScore, setHundredScore] = useState<string>("");

  // change the count of the subject
  const HandleChangeCount = (id: number, value: number): void => {
    const updatedSubjects = [...LevelArray];
    updatedSubjects[id] = {
      ...updatedSubjects[id],
      count: value,
    };

    // update the state
    setLevelArray(updatedSubjects);
  };

  useEffect(() => {
    let totalCredits = 0;
    let totalPoints = 0;

    // calculate the total credits and points
    LevelArray.forEach((LevelArray) => {
      totalCredits += LevelArray.count;
      totalPoints += GP_table[LevelArray.level] * LevelArray.count;
    });

    if (totalCredits > 0) {
      setsumCredit(totalCredits);
      setGPA(parseFloat((totalPoints / totalCredits).toFixed(2)));
      const GPA_str = GPA.toString().padEnd(2, ".").padEnd(4, "0");
      setHundredScore(gpa_hundred_points.get(GPA_str) || "");
    } else {
      setsumCredit(0);
      setGPA(0);
      setHundredScore("");
    }
  }, [LevelArray, GPA]);

  return {
    LevelArray,
    sumCredit,
    GPA,
    hundredScore,
    HandleChangeCount,
  };
};
