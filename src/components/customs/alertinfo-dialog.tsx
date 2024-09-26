"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export function AlertInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">注意事項</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>注意事項</DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex">
            <p>此計算機為針對</p>
            <p className=" text-red-500 font-bold">
              台灣科技大學GPA計算和換算規則設計
            </p>
          </div>
          <div className="mt-2">
            <p>不同學校可能有不同的規則</p>
            <p className=" text-red-500 font-bold mt-2">因此計算機僅供參考，實際成績以學校為準。</p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">了解</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
