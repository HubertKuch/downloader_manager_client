import Transfer from "./Transfer";
import Folder from "./Folder";

enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
}

interface User {
    id: string;
    accessCode: string;
    transfer: Transfer;
    otherTransferSizes: Transfer[];
    folders: Folder[];
    role: UserRole,
    expiringDate: string,
    hasActiveAccount: boolean
}

const DEFAULT_USER: User = {
    accessCode: "",
    folders: [],
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
    otherTransferSizes: [],
    role: UserRole.ADMIN,
    expiringDate: "2012-12-12 12:12:12",
    hasActiveAccount: true
};

export default User;
export { DEFAULT_USER, User, UserRole };
