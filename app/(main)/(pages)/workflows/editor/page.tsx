"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const EditorPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Perform your logic here, e.g., check if a user should be redirected
    router.push("/workflows");
  }, [router]);

  // Render your component or return null if it should not render anything
  return null;
};

export default EditorPage;
