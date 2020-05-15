const query = require('../db');

const getPhoneBook = async () => {
    const phoneBook = await query(`
            SELECT
            full_name,
            landline_phone.phone_number AS landline_phone,
            mobile_phone.phone_number AS mobile_phone
            FROM subscriber
                LEFT JOIN landline_phone ON subscriber.id = landline_phone.subscriber_id
                LEFT JOIN mobile_phone ON subscriber.id = mobile_phone.subscriber_id;
            `);

    return phoneBook;
}

const saveSubscriber = async (subscriberName) => {
    const res = await query(`
            INSERT INTO subscriber (full_name) VALUES (?);
            `, [subscriberName]);

    return res.insertId;
}

const savePhoneNumber = async (type, subscriberId, phoneNumber) => {
    try {
        await query(`
            INSERT INTO ${type}_phone (subscriber_id, phone_number)
                VALUES (?, ?);
        `, [subscriberId, phoneNumber]);
    } catch (e) {
        throw new Error(e);
    }
}

// SELECT @subscriber_id := LAST_INSERT_ID();
// INSERT INTO `landline_phone` (`subscriber_id`, phone_number) VALUES (@subscriber_id, '80178887766');
// INSERT INTO `mobile_phone` (`subscriber_id`, phone_number) VALUES (@subscriber_id, '+375291112233');

module.exports = {
    getPhoneBook,
    saveSubscriber,
    savePhoneNumber,
}
