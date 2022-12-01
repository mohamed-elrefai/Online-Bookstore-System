import { PutObjectAclCommand } from '@aws-sdk/client-s3';
import { client } from '../../Config/S3-AWS/awsConfig';
import fs from 'fs'

async function uploadFile(file: any){
const stream = fs.createReadStream(file.tempFilePath)
    const uploadParams = {
        Bucket: "test-node-awj",
        Key: file.name,
        Body: stream
    }
    const command = new PutObjectAclCommand(uploadParams)
    return await client.send(command)
}

export default uploadFile