const generateId = (id1, id2) => {
    if (id1 > id2) {
        return id1 + id2
    } else {
        return id2 + id1
    }
}

export default generateId

/*
** Simplified above function **

const generateId = (id1, id2) => id1 > id2 ? id1 + id2 : id2 + id1 ;
*/