import {
    DynamoDBClient,
    ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Set up AWS credentials and region
const client = new DynamoDBClient({
    region: "us-east-1",
    credentials: {
        accessKeyId: "AKIAT5LMH4KGENPI3TOW",
        secretAccessKey: "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",
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
