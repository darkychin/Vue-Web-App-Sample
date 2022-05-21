/**
 * Example of repeated object documentation in jsdoc
 * @typedef {Object} Data
 * @prop {String} Data.id - data id
 * @prop {String} Data.name - data name
 *
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 */

import { axios } from '@/axios';

const COMPLEX_MODULE_API_URL = '/complexModuleSampleURL';

/**
 * Internal function to help API to format their data
 * @param {Data} data - data to format
 * @returns {Object} added formatted field with `true`
 */
const formatAPIData = (data) => ({ ...data, formatted: true });

/**
 * Get data
 * @returns formatted data
 *
 * @async
 *
 * We need to use async await here because we are doing post processing,
 * which is our formatAPIData().
 * Since we did not do `try catch`'s `catch` here,
 * the HTTP error happened in `axios.get` will bubbled back to caller.
 *
 */
const getData = async () => {
  const data = await axios.get(`${COMPLEX_MODULE_API_URL}/data`);
  return formatAPIData(data);
};

/**
 * Post new data
 * @param {Data} data
 *
 * @returns {AxiosResponse}
 */
const postNewData = async (data) => (
  axios.post(`${COMPLEX_MODULE_API_URL}/new`, data)
);

/**
 * Update data except for `id`
 * @param {Data} data
 *
 * @returns {AxiosResponse}
 */
const updateData = ({ id, ...data }) => (
  axios.put(`${COMPLEX_MODULE_API_URL}/${id}`, { ...data })
);

/**
 * Deleta data with provided id
 * @param {String} id - data id
 * @returns {AxiosResponse}
 */
const deleteData = (id) => (
  axios.delete(`${COMPLEX_MODULE_API_URL}/delete`, { data: { id } })
);

export {
  getData,
  postNewData,
  updateData,
  deleteData,
};
