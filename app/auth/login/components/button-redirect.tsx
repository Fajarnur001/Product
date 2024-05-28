import React from "react";
import { Button } from "@/components/ui/button";

export default function ButtonRedirect( onSubmitLogin : any) {
  return (
    <>
      <Button onClick={onSubmitLogin}>Login</Button>
    </>
  );
}
