const addToDb = id => {
    let storedJobIds = getStoredJobIds();
    if (!storedJobIds.includes(id)) {
        storedJobIds.push(id);
        localStorage.setItem('applied-job-ids', JSON.stringify(storedJobIds));
    }
}

const getStoredJobIds = () => {
    let storedJobIds = [];
    const storedJobIdsString = localStorage.getItem('applied-job-ids');
    if (storedJobIdsString) {
        storedJobIds = JSON.parse(storedJobIdsString);
    }
    return storedJobIds;
}

const removeFromDb = id => {
    let storedJobIds = getStoredJobIds();
    if (storedJobIds.includes(id)) {
        storedJobIds = storedJobIds.filter(jobId => jobId !== id);
        localStorage.setItem('applied-job-ids', JSON.stringify(storedJobIds));
    }
}

const deleteStoredJobIds = () => {
    localStorage.removeItem('applied-job-ids');
}

export {
    addToDb,
    removeFromDb,
    getStoredJobIds,
    deleteStoredJobIds
}
