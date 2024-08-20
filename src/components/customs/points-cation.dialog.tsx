"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { PointsTable } from "@/components/customs/point-table";

export function PointsCaptionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">積分說明</Button>
      </DialogTrigger>
      <DialogContent>
        <PointsTable />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">了解</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
