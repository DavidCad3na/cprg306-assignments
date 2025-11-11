"use client";

import { useUserAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function AuthSection() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {user ? (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-center space-y-4">
          <h2 className="text-2xl font-semibold text-green-400">
            Welcome, {user.displayName}
          </h2>
          <p className="text-gray-300">{user.email}</p>

          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={firebaseSignOut}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium"
            >
              Sign Out
            </button>
            <button onClick={() => router.push("/week-9/shopping-list")}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium"
            >
              Go to Shopping List
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-xl font-semibold mb-4">Sign in to continue</h2>
          <button
            onClick={gitHubSignIn}
            className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg font-medium"
          >
            Sign in with GitHub
          </button>
        </div>
      )}
    </div>
  );
}
