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
    level: "F",
    credit: "0",
    grade: "59(含)以下",
  },
  {
    level: "X",
    credit: "0",
    grade: "0",
  },
];

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function PointsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">等第</TableHead>
          <TableHead>積分</TableHead>
          <TableHead>百分制分數區間</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {points.map((point, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{point.level}</TableCell>
            <TableCell>{point.credit}</TableCell>
            <TableCell>{point.grade}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
