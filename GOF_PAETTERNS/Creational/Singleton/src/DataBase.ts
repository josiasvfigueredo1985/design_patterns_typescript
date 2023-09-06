import PermissionType from "./PermissionType";

interface DataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

const DataBase: DataBaseItem[] = [
  {
    email: "master@example.com",
    password: "M@5ter123",
    permission: PermissionType.ADMIN,
  },
  {
    email: "user@example.com",
    password: "user123",
    permission: PermissionType.USER,
  },
];
export default DataBase;
