import {atom} from 'recoil';

export const UserInfo = atom({
    key: 'user_first__name',
    default: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirm_password: '',
        dob: '',
        intendedUse: '',
        occupation: '',
        address: '',
        Unit: '',
        city: '',
        postalCode: '',
        province: '',
        accepted_terms: false,
        package: '',
    },
});

// Change the variables to lower letters

export const CheckPermission = atom({
    key: 'user_permission',
    default: [],
});

export const ModalBoolean = atom({
    key: 'modal__bool',
    default: false,
});

export const UserToken = atom({
    key: 'user_token',
    default: 'jdsjfhdjs',
});

export const PhoneVerificationCode = atom({
    key: 'verification_code',
    default: '',
});

export const EmailVerificationCode = atom({
    key: 'email_verification_code',
    default: '',
});

export const Error = atom({
    key: 'error',
    default: null,
});

export const RecoverPasswordEmailAddress = atom({
    key: 'emailAddressRecoverPassword',
    default: '',
});
