import React from "react";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";

const SocialAuthForm = () => {
  const { toast } = useToast();
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      throw new Error("Not implemented");
    } catch (error) {
      console.log(error);
      toast({
        title: "Sign In Failed",
        description: error instanceof Error ? error.message : "Sign In Failed",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="flex flex-col m-3 p-3 gap-2">
      <h1 className="items-center text-center text-dark-200">
        Social Authentication
      </h1>
      <Button className="bg-slate-600">Login with Google</Button>
      <Button className="bg-slate-600">Login with Github</Button>
    </div>
  );
};

export default SocialAuthForm;
