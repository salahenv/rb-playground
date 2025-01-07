const generateId = (initialValue = 1) => {
    let id = initialValue;
    return () => {
        id = id + 1;
        return id;
    }
}

export {
    generateId
}