import {v2 as cloudinary} from "cloudinary"

const connectCloudinay=async()=>{
    cloudinary.config({
        cloud_name:process.env.clidunay_name,
        api_key:process.env.clidunay_api,
        api_secret:process.env.clidunay_sectet_key
    })
}

export default connectCloudinay 