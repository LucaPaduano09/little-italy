import User from "../models/User";
import connect from "../db";

export const getUserNewsletterStatus = async (email: any) => {
  try {
    await connect();

    // Cerca l'utente nel database
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("User not found");
    }

    return user.newsletter;
  } catch (error) {
    console.error("Error getting user newsletter status:", error);
    throw new Error("Error getting user newsletter status");
  }
};
