import Conatct from './../models/conatct.js';

export const save = (newConatct) => {

    const contact = new Contact(newContact)

    return contact.save();
}


export const search = (query) => {

    const params = {...query };
    return Contact.find(params).exec();
}

export const get = (id) => {

    const contact = Contact.findBy(id).exec();
}

export const update = (updateContact) => {

    updateContact.modifiedDate = new Date();

    const contact = Contact.findByIdAndUpdate(updatedContact.id, updateContact).exec();

    return contact;
}

export const remove = (updateContact) => {

    const contact = Contact.findByIdAndDelete(id).exec();

    return contact;
}