import { useSession } from "next-auth/react";

const useSessionData = () => {
  const { data: session, status } = useSession();
  return { session, status };
};

export default useSessionData;