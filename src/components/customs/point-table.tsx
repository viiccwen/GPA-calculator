"use client";

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
import { level_points } from "@/lib/points";

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
        {level_points.map((point, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-center">
              {point.level}
            </TableCell>
            <TableCell className="text-center">{point.credit}</TableCell>
            <TableCell className="text-center">{point.grade}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
