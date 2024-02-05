import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Button>Click me</Button>
      <Input placeholder="email" />
    </main>
  );
}
