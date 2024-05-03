import Image from "next/image";
import ApplicationForm from "./components/form/ApplicationForm";

export default function Home() {
  return (
    <main>
      <div className="container">
        <ApplicationForm />
      </div>
    </main>
  );
}
