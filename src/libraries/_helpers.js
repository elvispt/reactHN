/**
 * Helpers to be used on the entire project
 */
export default class Helpers {
  /**
   * Parses a string to attempt to find a domain
   * @param url
   * @returns {string} Returns the hostname or an empty string if it cannot find it.
   */
  static hostname(url) {
    try {
      const pURL = new URL(url);
      return `${pURL.hostname}`;
    } catch (e) {
      return '';
    }
  }
}