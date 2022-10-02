import File from "./File";
import Transfer from "./Transfer";

enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
}

interface User {
    id: string;
    accessCode: string;
    transfer: Transfer;
    files: File[];
    role: UserRole
}

const DEFAULT_USER: User = {
    accessCode: "",
    files: [],
    id: "",
    transfer: {
        startTransfer: {
            unit: "GIGA_BYTE",
            size: 50,
        },
        transfer: {
            unit: "GIGA_BYTE",
            size: 50,
        },
    },
    role: UserRole.ADMIN
};

export default User;
export { DEFAULT_USER, User, UserRole };
