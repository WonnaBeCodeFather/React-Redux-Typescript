import axios from "axios"

export const FetchToken = (formData: FormData) =>  axios({
        method: "POST",
        url: "http://127.0.0.1:8000/user/login",
        headers:{
          "Content-type": "multipart/form-data"
        },
        data: formData
      })

