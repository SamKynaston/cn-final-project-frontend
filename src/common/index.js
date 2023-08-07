export const writeCookie = (key, value, days, loginCookie, setLoginCookie) => {
    let date = new Date()
    days = days || 365
    date.setDate(date.getDate() + days) 
    let cookie = document.cookie = key + "=" + value + ";  expires=" + date.toGMTString() + "; path=/"
    setLoginCookie(cookie)
    console.log("cookie: ", cookie)
    console.log("loginCookie: ", loginCookie)
}