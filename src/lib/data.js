import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache"; // temporary data

// const users = [
//   { id: 1, name: "ahmed ali", avatar: "" },
//   { id: 2, name: "abdo attallah", avatar: "" },
//   { id: 3, name: "mohamed ali", avatar: "" },
// ];

// const posts = [
//   {
//     id: 1,
//     title: "hello my name is ahmed ali",
//     body: "hello this is description",
//     image:
//       "https://images.pexels.com/photos/28319897/pexels-photo-28319897/free-photo-of-two-girls-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     userId: 1,
//   },
//   {
//     id: 2,
//     title: "hello my name is abdo attallah",
//     body: "hello this is description",
//     image:
//       "https://images.pexels.com/photos/27390908/pexels-photo-27390908/free-photo-of-a-table-with-a-chair-and-a-book-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     userId: 2,
//   },
//   {
//     id: 3,
//     title: "hello my name is mohamed ali",
//     body: "hello this is description",
//     image:
//       "https://images.pexels.com/photos/27745133/pexels-photo-27745133/free-photo-of-green-big-leaves-of-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     userId: 3,
//   },
// ];

// export const getPosts = async () => {
//   try {
//     connectToDb();
//     const posts = await Post.find();
//     return posts;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch posts!");
//   }
// };

// export const getPost = async (slug) => {
//   try {
//     connectToDb();
//     const post = await Post.findOne({ slug });
//     return post;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch post!");
//   }
// };

// export const getUser = async (id) => {
//   noStore();
//   try {
//     connectToDb();
//     const user = await User.findById(id);
//     return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch user!");
//   }
// };

// export const getUsers = async () => {
//   try {
//     connectToDb();
//     const users = await User.find();
//     return users;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch users!");
//   }
// };

export const getPosts = async () => {
  try {
    await connectToDb(); // Ensure connection is established
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.error("Error fetching posts:", err); // Enhanced logging
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDb(); // Ensure connection is established
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.error("Error fetching post:", err); // Enhanced logging
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    await connectToDb(); // Ensure connection is established
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error("Error fetching user:", err); // Enhanced logging
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    await connectToDb(); // Ensure connection is established
    const users = await User.find();
    return users;
  } catch (err) {
    console.error("Error fetching users:", err); // Enhanced logging
    throw new Error("Failed to fetch users!");
  }
};
