function isValidFormat(json) {
    if (
      typeof json === 'object' &&
      json.hasOwnProperty('alias') &&
      json.hasOwnProperty('flag_palette') &&
      Array.isArray(json.flag_palette) &&
      json.flag_palette.length === 8 &&
      json.flag_palette.every((color) => typeof color === 'number') &&
      json.hasOwnProperty('language') &&
      typeof json.language === 'number' &&
      json.hasOwnProperty('tree') &&
      Array.isArray(json.tree) &&
      json.tree.every((array) => Array.isArray(array)) &&
      json.hasOwnProperty('bonuses') &&
      Array.isArray(json.bonuses) &&
      json.bonuses.every((array) => Array.isArray(array)) &&
      json.hasOwnProperty('architecture') &&
      typeof json.architecture === 'number'
    ) {
      return true;
    }
  
    return false;
  }

  export default isValidFormat;