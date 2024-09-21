import { deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
import Image from "next/image";
import EditUser from "../editUser/EditUser";

const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div className="flex-1">
      <h1 className="text-3xl text-white font-bold mb-10">Users</h1>
      {users.map((user) => (
        <div
          className="flex items-center justify-between g-5 my-5"
          key={user.id}
        >
          <div className="flex items-center gap-5">
            <div className="relative w-[50px] h-[50px]">
              <Image
                src={user.img || "/noavatar.png"}
                alt="Avatar"
                fill
                className="rounded-xl"
              />
            </div>
            <span className="{styles.postTitle}">{user.username}</span>
          </div>
          <div className="flex items-center gap-5">
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className="py-[5px] px-[10px] text-text bg-[#F70E0D] font-bold rounded-md border-none">
                Delete
              </button>
            </form>
            <EditUser user={user} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
