import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <Card className="space-y-3">
      <h1 className="text-xl font-semibold">React + Tailwind v4 ✅</h1>
      <p className="text-sm text-gray-600">Landing page بسيطة كبداية.</p>
      <Link to="/login">
        <Button>Go to Login</Button>
      </Link>
    </Card>
  );
}
