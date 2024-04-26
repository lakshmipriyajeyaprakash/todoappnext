import Image from "next/image";
import AddTask from "./Components/AddTask";
export default function Home() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center p-3 max-w-6xl mx-auto">
      <h1 className="font-bold text-lg text-gray-600">Add Tasks</h1>
      <AddTask></AddTask>
    </div>
  );
}
