'use client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  const points = [
    {
      level: "A+",
      credit: "4.3",
      grade: "90-100",
    },
    {
      level: "A",
      credit: "4",
      grade: "85-89",
    },
    {
      level: "A-",
      credit: "3.7",
      grade: "80-84",
    },
    {
      level: "B+",
      credit: "3.3",
      grade: "77-79",
    },
    {
      level: "B",
      credit: "3.0",
      grade: "73-76",
    },
    {
      level: "B-",
      credit: "2.7",
      grade: "70-72",
    },
    {
      level: "C+",
      credit: "2.3",
      grade: "67-69",
    },
    {
      level: "C",
      credit: "2.0",
      grade: "63-66",
    },
    {
      level: "C-",
      credit: "1.7",
      grade: "60-62",
    },
    {
      level: "D",
      credit: "0",
      grade: "50~59",
    },
    {
      level: "E",
      credit: "0",
      grade: "1~49",
    },
    {
      level: "X",
      credit: "0",
      grade: "0",
    },
  ];
    
  export function PointsTable() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">等第</TableHead>
            <TableHead className="text-center">積分</TableHead>
            <TableHead className="text-center">百分制分數區間</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {points.map((point, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center">{point.level}</TableCell>
              <TableCell className="text-center">{point.credit}</TableCell>
              <TableCell className="text-center">{point.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  