import {URL} from '../Constants/Constant';
import axios from 'axios';

export async function doctorSignUpApiCall(signUpRequest) {
  let route = URL.concat('api/doctor/add-or-edit');
  console.log(`doc register Request : ${route} REQUEST`, signUpRequest);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'POST',
      url: route,
      data: signUpRequest,
      headers: {'Content-Type': 'multipart/form-data', Accept: '*/*'},
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

export async function patientSignUpApiCall(signUpRequest) {
  let route = URL.concat('api/patient/add-or-edit');
  console.log(`patient register Request : ${route} REQUEST`, signUpRequest);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'POST',
      url: route,
      data: signUpRequest,
      headers: {'Content-Type': 'multipart/form-data', Accept: '*/*'},
    });
  } catch (err) {
    apiRes = err;
    return apiRes;
  } finally {
    return apiRes;
  }
}

export async function generateCodeApiCall(obj) {
  let route = URL.concat('api/user-account/generate-code');
  console.log(`Login Request : ${route} REQUEST`, obj);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'POST',
      url: route,
      data: obj,
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

export async function getCategoryDataApiCall() {
  let route = URL.concat(`api/category/get-list`);
  console.log('categoryList Request : ', route);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'GET',
      url: route,
    });
  } catch (err) {
    apiRes = err;
    return apiRes;
  } finally {
    return apiRes;
  }
}

export async function getDoctorSearchByNameAndCategory(name, category) {
  let route = URL.concat(
    `api/doctor/get-search-by-name-and-category?doctorName=${name}&category=${category}`,
  );
  console.log('categoryList Request : ', route);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'GET',
      url: route,
    });
  } catch (err) {
    apiRes = err;
    return apiRes;
  } finally {
    return apiRes;
  }
}

export async function getDoctorDataByIDApiCall(id) {
  let route = URL.concat(`api/doctor/get?id=${id}`);
  console.log('doc get by id Request : ', route);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'GET',
      url: route,
    });
  } catch (err) {
    apiRes = err;
    return apiRes;
  } finally {
    return apiRes;
  }
}

export async function resetPasswordApiCall(obj) {
  let route = URL.concat('api/user-account/reset-password');
  console.log(`reset password Request : ${route} REQUEST`, obj);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'POST',
      url: route,
      data: obj,
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

export async function patientContactUsApiCall(obj) {
  let route = URL.concat('api/contact-us/add-or-edit');
  console.log(`reset password Request : ${route} REQUEST`, obj);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'POST',
      url: route,
      data: obj,
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

export async function getAppointmentDoctorAndPatient(
  doctorID,
  patientID,
  status,
  Type,
  currentDate,
) {
  let route = URL.concat(
    `/api/appointment/get-by-doctor-patient-status?doctor=${doctorID}&patient=${patientID}&status=${status}&type=${Type}&startDate=${currentDate}`,
  );
  console.log('appointment list Request : ', route);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'GET',
      url: route,
    });
  } catch (err) {
    apiRes = err;
    return apiRes;
  } finally {
    return apiRes;
  }
}

export async function PatientBookAppointmentApiCall(obj) {
  let route = URL.concat('api/appointment/add-or-edit');
  console.log(`appointment book Request : ${route} REQUEST`, obj);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'POST',
      url: route,
      data: obj,
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

export async function PostPaymentApiCall(obj) {
  let route = URL.concat('api/appointment/post-appointment-confirm');
  console.log(`payment request Request : ${route} REQUEST`, obj);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'POST',
      url: route,
      data: obj,
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

export async function getAppointmentDoctor(
  doctorID,
  patientID,
  status,
  Type,
  currentDate,
  name,
) {
  let route = URL.concat(
    `api/appointment/get-by-doctor-patient-status?doctor=${doctorID}&patientName=${name}&patient=${patientID}&status=${status}&type=${Type}&startDate=${currentDate}`,
  );
  console.log('appointment list Request : ', route);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'GET',
      url: route,
    });
  } catch (err) {
    apiRes = err;
    return apiRes;
  } finally {
    return apiRes;
  }
}

export async function doctorAppointmentsDashboard(obj) {
  let route = URL.concat(`api/appointment/get-by-doctor-patient-status`);
  console.log('appointment list Request : ', route);
  let apiRes = null;
  try {
    apiRes = await axios({
      method: 'GET',
      url: route,
      params: obj,
    });
  } catch (err) {
    apiRes = err;
    return apiRes;
  } finally {
    return apiRes;
  }
}
