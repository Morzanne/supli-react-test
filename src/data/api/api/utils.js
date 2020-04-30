export function toJSON(payload) {
    return JSON.stringify(payload);
}

export function buildBody(method, body) {
    if (method.canHaveBody) {
      return toJSON(body);
    }
  }