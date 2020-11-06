import initArticle from "./Article";
import initUser from "./User";
import {Database} from "../config/database";

export async function initAll() {
    await Promise.all([
            initArticle(),
            initUser()
        ]
    );

    await Database.synchronize();
}

