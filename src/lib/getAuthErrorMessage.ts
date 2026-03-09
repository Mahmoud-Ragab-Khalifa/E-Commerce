export const getAuthErrorMessage = (code: string) => {
  switch (code) {
    case "auth/invalid-credential":
    case "INVALID_LOGIN_CREDENTIALS":
      return "invalidCredentials";

    case "auth/user-not-found":
      return "userNotFound";

    case "auth/wrong-password":
      return "wrongPassword";

    case "auth/email-already-in-use":
      return "emailAlreadyInUse";

    case "auth/weak-password":
      return "weakPassword";

    case "auth/invalid-email":
      return "invalidEmail";

    default:
      return "default";
  }
};
