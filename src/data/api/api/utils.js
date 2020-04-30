export function toJSON(payload) {
    return JSON.stringify(payload);
}

export function buildBody(body) {
    return toJSON(body);
}

