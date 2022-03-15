//@flow
//@ts-nocheck
import { IStrapiV4Response, IUser } from "./types";
const API_URL = "https://staging.hutsy.ca/api";
/**
 * @param {string} email
 * @param {String} password
 * @return {Promise<{status : number, user : IUser, jwt : string}>}
 * @summary A function to login user
 * A function to login a user
 */
export function loginAccount(email: string, password: string): Promise<{ status: number, user: IUser, jwt: string }> {
  return new Promise((res, rej) => {
    fetch(`${API_URL}/auth/local`, {
      method: "POST",
      body: JSON.stringify({
        identifier: email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async resp => {
      let data = await resp.json()
      res({ ...data, status: resp.status, _response: resp })
    }).catch(err => {
      rej(err)
    })
  })

}

/**
 * 
 * @param {IUser} user 
 * @summary Create account on hutsy.
 * @returns {Promise<{status : number, user : IUser, jwt : string}>}
 */
export function createAccount(
  user: IUser
): Promise<{ status: number, user: IUser, jwt: string }> {
  return new Promise((res, rej) => {
    fetch(`${API_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async resp => {
      let data = await resp.json()
      res({ ...data, status: resp.status, _response: resp })
    }).catch(err => {
      rej(err)
    })
  })


}

/**
 * @param {string} phone
 * @param {string} smsCode
 * @summary Used to verify phone. status 200 means its approved/correct
 * @returns {Promise<IStrapiV4Response>}
 */
export function verifyPhone(phone: string, smsCode: string): Promise<IStrapiV4Response<any>> {
  return new Promise((res, rej) => {
    fetch(`${API_URL}/phone-verifications/verify`, {
      method: "POST",
      body: JSON.stringify({ phone, code: smsCode }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async resp => {
      let data = await resp.json()
      res({ ...data, status: resp.status, _response: resp })
    }).catch(err => {
      rej(err)
    })
  })
}

/**
 * 
 * @param {string} phone phone number
 * @summary Initiates a phone verification 
 * @returns {Promise<IStrapiV4Response>}
 */
export function phoneVerification(phone: string): Promise<IStrapiV4Response<any>> {

  return new Promise((res, rej) => {
    fetch(`${API_URL}/phone-verifications`, {
      method: "POST",
      body: JSON.stringify({ phone }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async resp => {
      let data = await resp.json()
      res({ ...data, status: resp.status, _response: resp })
    }).catch(err => {
      rej(err)
    })
  })
}

/**
 * 
 * @param {string} email Email Address
 * @summary Initiates an Email Verification 
 * @returns {Promise<IStrapiV4Response>}
 */
export function emailVerification(email = ""): Promise<IStrapiV4Response<any>> {
  return new Promise((res, rej) => {
    fetch(`${API_URL}/email-verifications`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async resp => {
      let data = await resp.json()
      res({ ...data, status: resp.status, _response: resp })
    }).catch(err => {
      rej(err)
    })
  })
}


/**
 * 
 * @param {string} email Email Address
 * @param {string} code Code sent to your email.
 * @summary Verifies the Email code against email address 
 * @returns {Promise<IStrapiV4Response>}
 */
export function verifyEmail(email: string, code: string): Promise<IStrapiV4Response<any>> {
  return new Promise((res, rej) => {
    fetch(`${API_URL}/email-verifications/verify`, {
      method: "POST",
      body: JSON.stringify({
        email,
        code
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async resp => {
      let data = await resp.json()
      res({ ...data, status: resp.status, _response: resp })
    }).catch(err => rej(err))
  })
}

/**
 * 
 * @param {string} email Email Address
 * @summary Sends a reset password link to your email 
 * @returns {Promise<IStrapiV4Response>}
 */
export function initiateForgotPassword(email: string): Promise<Response> {
  return fetch(`${API_URL}/auth/forgot-password`, {
    method: "POST",
    body: JSON.stringify({
      email
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
}


export function updatePassword(code: string, password: string, confirmPassword: string): Promise<Response> {
  return fetch(`${API_URL}/auth/reset-password`, {
    method: "POST",
    body: JSON.stringify({
      code,
      password,
      passwordConfirmation: confirmPassword
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
}