import {load, save, remove} from './cookie-lib';
import _ from 'lodash'

let options = {
  path: '/'
}

export function setOption(op = {}) {
  options = _.merge(options, op)
}

export function setLocalItem(localStorageName, data) {
  // SAVE TO COOKIE
  save(localStorageName, JSON.stringify(data), options)
}

export function getLocalItem(localStorageName) {
  // GET ITEM FROM LOCAL STORAGE
  if (typeof document !== "undefined" && !!load(localStorageName)) {
    return load(localStorageName)
  } else {
    return false;
  }
}

export function removeLocalItem(localStorageName) {
  // REMOVE ITEM FROM COOKIE
  remove(localStorageName, options)
  remove(localStorageName, {path: '/'})
}

export function removeAllLocalItem(storageName) {
  Object.keys(storageName).forEach(function(key) {
    removeLocalItem(storageName[key])
  });
}