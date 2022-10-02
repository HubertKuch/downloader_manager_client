"use strict";

import Transfer from "./Transfer";

export default interface NewUserDTO {
    transfer: Transfer,
    expiringDate: string,
    role: number|string;
}
