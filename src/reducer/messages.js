import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";

export default function messages(state = getMessages(10), action) {
    switch (action.type) {
        case SEND_MESSAGE:
            const { message, activeUserId } = action.payload;

            const allUserMsgs = state[activeUserId];

            const number = Object.keys(allUserMsgs).length + 1;

            return {
                ...state,
                [activeUserId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            };

        default:
            return state;
    }
}