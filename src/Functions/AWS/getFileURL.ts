import { GetObjectCommand } from '@aws-sdk/client-s3';
import { client } from '../../Config/S3-AWS/awsConfig';
import {getSignedUrl} from '@aws-sdk/s3-request-presigner'

async function getFileURL(filename: any) {
    const command = new GetObjectCommand({
        Bucket: "test-node-awj",
        Key: filename
    })
    return await getSignedUrl(client, command, { expiresIn: 3600 })
}

export default getFileURL