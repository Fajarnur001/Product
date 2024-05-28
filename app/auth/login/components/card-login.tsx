"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ButtonRedirect from "./button-redirect";

export function CardLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  const handlerGetUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handlerGetPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onSubmitUserLogin = () => {
    if (username === "" || password === "") {
      toast({
        title: "Scheduled: Catch up",
        description: "Friday, February 10, 2023 at 5:57 PM",
      });
      return;
    } else {
      const userData = [{ username, password }];
      const userDataString = JSON.stringify(userData);
      Cookies.set("userData", userDataString, { expires: 365 });
      router.push("/user");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
           Make changes to your profile here. Click save when you&apos;re done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Username</Label>
          <Input id="username" onChange={(e: any) => handlerGetUsername(e)} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Password</Label>
          <Input
            id="password"
            type="password"
            onChange={(e: any) => handlerGetPassword(e)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <ButtonRedirect onSubmitLogin={onSubmitUserLogin} />
      </CardFooter>
    </Card>
  );
}
