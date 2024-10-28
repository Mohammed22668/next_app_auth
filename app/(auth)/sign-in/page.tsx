// //

// import React from "react";
// import LoginForm from "@/components/Forms/LoginForm";

// import { redirect } from "next/navigation";
// import AuthForm from "@/components/Auth/AuthForm";
// import { SignIn } from "@/components/Auth/Sign-in";

// // Make the page component asynchronous
// const Page = async () => {
//   // If the user is already authenticated, redirect to the dashboard
//   // if (session) {
//   //   redirect("/dashboard");
//   //   return null; // Return null to stop further rendering
//   // }

//   // Render the login form if there is no active session
//   return <SignIn />;
// };

// export default Page;
import LoginForm from "@/components/Forms/LoginForm";
import React from "react";

const page = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default page;
