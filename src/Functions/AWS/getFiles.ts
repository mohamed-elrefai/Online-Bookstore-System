import { ListObjectsCommand } from '@aws-sdk/client-s3';
import { client } from '../../Config/S3-AWS/awsConfig';

async function getFiles() {
    const command = new ListObjectsCommand({
        Bucket: "test-node-awj",
    })
        return await client.send(command)
}

export default getFiles