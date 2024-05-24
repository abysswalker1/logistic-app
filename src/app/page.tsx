import ApplicationForm from "./components/form/ApplicationForm";
import ApplicationList from "./components/list/ApplicationList";

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

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
