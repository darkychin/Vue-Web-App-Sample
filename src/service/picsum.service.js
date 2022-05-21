/**
 * Tutorial to use Picsums's API, section "List Images"
 * @see https://picsum.photos/
 */

import { axios } from '@/axios';

/**
 * Note: base url will be ignored since API_URL is provided with full URL (Axios perks)
 */
const API_URL = 'https://picsum.photos';

/**
 * The only benefit I see for using class to export services is that
 * they  does not need to follow order of function expression in order to call/use them
 */
class PicsumService {
  /**
   * Get Picsum list
   * @param {Object} api - api GET info
   * @param {(Object|Null)} api.params - api GET info params
   * @param {(Number|Null)} api.params.limit - item per page
   * @param {(Number|Null)} api.params.page - current page number
   *
   * @returns {Response}
   */
  get = ({ params = null }) => (
    axios.get(`${API_URL}/v2/list/`, { params })
  )

  /**
   * Get Picsum photo
   * @param {Object} api
   * @param {String} api.id - Picsum photo id
   */
  getId = ({ id }) => (
    axios.get(`${API_URL}/${id}`)
  )
}

export default new PicsumService();
