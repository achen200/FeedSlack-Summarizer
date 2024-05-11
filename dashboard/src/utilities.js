/**
 * Extracts file extension from file name
 * @param {String} name filename
 * @returns {String} file extension
 */
export function getExtension(name){
	return name.split('.').pop();
}

export function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}
