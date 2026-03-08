export const getAuthErrorMessage = (code: string) => {
  switch (code) {
    case "auth/invalid-credential":
    case "INVALID_LOGIN_CREDENTIALS":
      return "Invalid email or password.";

    case "auth/user-not-found":
      return "No account found with this email.";

    case "auth/wrong-password":
      return "Incorrect password.";

    case "auth/email-already-in-use":
      return "This email is already registered.";

    case "auth/weak-password":
      return "Password should be at least 6 characters.";

    case "auth/invalid-email":
      return "Please enter a valid email.";

    default:
      return "Something went wrong. Please try again.";
  }
};
