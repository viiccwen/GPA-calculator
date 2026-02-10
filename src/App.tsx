import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/customs/footer";
import { GPACalculator } from "@/components/customs/gpa-calculator";

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <GPACalculator />
      <Footer />
    </ThemeProvider>
  );
}
