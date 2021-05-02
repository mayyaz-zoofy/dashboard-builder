import repairDesk from './repair-desk.js'

export const getInitiatorById = (id) => {
    switch (id.toString()) {
        case '1':
            return repairDesk;
        default:
            return {};
    }
}