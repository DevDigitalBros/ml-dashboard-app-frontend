import {
    DynamoDBClient,
    ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Set up AWS credentials and region
const client = new DynamoDBClient({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID!,
        secretAccessKey: process.env.SECRET_ACCESS_KEY!,
    },
});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = "premier-League";

const getData = async () => {
    try {
        const params = {
            TableName: tableName,
        };
        const command = new ScanCommand(params);
        const result = await ddbDocClient.send(command);
        return result;
        console.log(JSON.stringify(result.Items, null, 1));
    } catch (error) {
        console.error("Error getting data:", error);
    }
};

export { getData };
