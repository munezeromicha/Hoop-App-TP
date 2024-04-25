import { Client, Account, ID } from "react-native-appwrite/src";


let client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('662658e8596ec1427342')

let account = new Account(client);