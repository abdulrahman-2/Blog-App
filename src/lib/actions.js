"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

// handleAddPost
export const addPost = async (previousState, formData) => {
  const { title, desc, slug, img, userId } = Object.fromEntries(formData);

  try {
    connectToDb();

    // Check for unique slug
    const existingPost = await Post.findOne({ slug });
    if (existingPost) {
      return { error: "Slug already exists" };
    }

    const newPost = new Post({
      title,
      desc,
      slug,
      img,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.error("Error in addPost:", err);
    return { error: "Something went wrong!" };
  }
};

// handleEditPost
export const editPost = async (previousState, formData) => {
  const { title, desc, slug, img, userId, id } = Object.fromEntries(formData);

  try {
    await connectToDb();

    // Check for unique slug
    const existingPost = await Post.findOne({ slug, _id: { $ne: id } });
    if (existingPost) {
      return { error: "Slug already exists" };
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title,
        desc,
        slug,
        img,
        userId,
      },
      { new: true }
    );

    if (!updatedPost) {
      return { error: "Post not found" };
    }

    console.log("Post updated");
    revalidatePath("/admin");
    return { success: true, updatedPost };
  } catch (err) {
    console.error("Error in editPost:", err);
    return { error: "Something went wrong!" };
  }
};

// handleDeletePost
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("Deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

// handleAddUser
export const addUser = async (previousState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();

    // Check for unique username and email
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return {
        error:
          existingUser.username === username
            ? "Username already exists"
            : "Email already exists",
      };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.error("Error in addUser:", err);
    return { error: "Something went wrong!" };
  }
};

// handleEditUser
export const editUser = async (previousState, formData) => {
  const { username, email, img, id } = Object.fromEntries(formData);

  try {
    await connectToDb();

    // Check for unique username and email
    const existingUser = await User.findOne({
      $or: [
        { username, _id: { $ne: id } },
        { email, _id: { $ne: id } },
      ],
    });
    if (existingUser) {
      return {
        error:
          existingUser.username === username
            ? "Username already exists"
            : "Email already exists",
      };
    }

    const updatedData = { username, email, img };

    const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return { error: "User not found" };
    }

    console.log("User updated");
    revalidatePath("/admin");
    return { success: true };
  } catch (err) {
    console.error("Error in editUser:", err);
    return { error: "Something went wrong!" };
  }
};

// handleDeleteUser
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id }); // Delete all posts associated with the user
    await User.findByIdAndDelete(id); // Delete the user
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

// handleGithubLogin
export const handleGithubLogin = async () => {
  await signIn("github");
};

// handleGoogleLogin
export const handleGoogleLogin = async () => {
  await signIn("google");
};

// handleLogOut
export const handleLogOut = async () => {
  await signOut();
};

// handle register
export const register = async (previousState, formData) => {
  const { username, img, email, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

// handle Login
export const Login = async (previousState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    console.log(err);
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
