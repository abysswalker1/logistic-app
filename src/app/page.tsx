import Image from "next/image";
import ApplicationForm from "./components/form/ApplicationForm";
import ApplicationList from "./components/list/ApplicationList";
import './application.scss';

export default function Home() {
  return (
    <main className="application">
      <div className="container">
        <ApplicationForm />
        <ApplicationList />
      </div>
    </main>
  );
}
