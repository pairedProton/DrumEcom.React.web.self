// export const USE_DEMO = true;

export const getUseDemo = () =>{
    const dataValue = localStorage.getItem('useDemo')
    return dataValue === null ? true : dataValue === "true"
}

export const setUseDemo = (dataValue) => {
    localStorage.setItem("useDemo",dataValue)
}