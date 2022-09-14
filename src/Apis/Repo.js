import {URL} from '../Constants/Constant';
import axios from 'axios';

export async function signUpApiCall(signUpRequest) {
  let route = URL.concat('api/user-account/add-or-edit');
  console.log(`RegisterCustomer Request : ${route} REQUEST`, signUpRequest);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'POST',
      url: route,
      data: signUpRequest,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    apiRes = err;
    return apiRes;
  } finally {
    return apiRes;
  }
}

export async function doctorLoginApiCall(loginRequest) {
  let route = URL.concat('api/user-account/login');
  console.log(`Login Request : ${route} REQUEST`, loginRequest);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'POST',
      url: route,
      data: loginRequest,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    apiRes = err;
    return apiRes;
  } finally {
    return apiRes;
  }
}

