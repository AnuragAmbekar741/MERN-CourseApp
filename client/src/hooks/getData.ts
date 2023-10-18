import axios from 'axios'

// interface DataType {
//     username:string
// }

const getData = () =>{
    console.log(localStorage.getItem("token"))
    const gettingData = async(url:string)=>{
        try{
            const response  = await axios.get(url,{
                method:"GET",
                headers: {
                "Authorization": "Bearer"+" "+localStorage.getItem("token")
                }
            })
            console.log(response.data)
            return response.data;
        }catch(err){
            return {message:"Invalid Admin"}
        }
    }
    return {gettingData}
}

export default getData;