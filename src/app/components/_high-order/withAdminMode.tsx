import { FC } from "react";
import profileStore from "@/store/profileStore";
import { observer } from "mobx-react-lite";

function withAdminMode<P extends {}>(Component: FC<P>): FC<P> {
  return observer((props: P) => {
    const { isAdminMode } = profileStore;

    if (isAdminMode) {
      return <Component {...props} />;
    }
    return null;
  });
}

export default withAdminMode;