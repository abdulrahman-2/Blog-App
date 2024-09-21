import AdminPostForm from "@/components/adminPostForm/AdminPostForm";
import AdminPosts from "@/components/adminPosts/AdminPosts";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import { auth } from "@/lib/auth";

const Admin = async () => {
  const session = await auth();
  return (
    <div className="my-20 flex flex-col gap-[100px]">
      <div className="flex flex-col-reverse lg:flex-row gap-[50px] lg:gap-[100px]">
        <AdminPosts />
        <AdminPostForm userId={session.user.id} />
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-[50px] lg:gap-[100px]">
        <AdminUsers />
        <AdminUserForm />
      </div>
    </div>
  );
};

export default Admin;
