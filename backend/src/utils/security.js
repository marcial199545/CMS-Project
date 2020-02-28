import crypto from "crypto";

import { $security } from "../../config/index";

export function encrypt(str) {
    const { secretKey } = $security();
    return crypto
        .createHash("sha1")
        .update(`${secretKey}${str.toString()}`)
        .digest("hex");
}
