const phoneBookRepo = require('./phoneBook.memory.repository');

const getPhoneBook = async () => {
    try {
        const dBPhoneBook = await phoneBookRepo.getPhoneBook();
        dBPhoneBook.forEach((item) => {

        });
        console.log(phoneBook);
    } catch (e) {
        throw new Error(e);
    }
}

const saveSubscriber = async (subscriberData) => {
    try {
        const { firstName, lastName, landlinePhone, mobilePhone } = subscriberData;
        const subscriberIndex = await phoneBookRepo.saveSubscriber(`${firstName} ${lastName}`);

        if (landlinePhone) {
            await phoneBookRepo.savePhoneNumber('landline', subscriberIndex, landlinePhone);
        }

        if (mobilePhone) {
            await phoneBookRepo.savePhoneNumber('mobile', subscriberIndex, mobilePhone);
        }
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    saveSubscriber,
}
