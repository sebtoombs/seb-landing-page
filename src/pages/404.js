import React, { useEffect } from "react";
import { navigate } from "@reach/router";

export default function NotFoundPage() {
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
}
