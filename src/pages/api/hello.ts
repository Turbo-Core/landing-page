import dotenv from "dotenv";
import { Api } from "nocodb-sdk";
import validate from "deep-email-validator";

import type { NextApiRequest, NextApiResponse } from "next";

/*
Example request body:
{
   "answers":{
      "name":{
         "value":"Sami",
         "isValid":true,
         "isAnswered":true,
         "isPending":false,
         "validationErr":null,
         "blockName":"short-text"
      },
      "usage":{
         "value":[
            "personal"
         ],
         "isValid":true,
         "isAnswered":true,
         "isPending":false,
         "validationErr":null,
         "blockName":"multiple-choice"
      },
      "email":{
         "value":"mail@example.com",
         "isValid":true,
         "isAnswered":true,
         "isPending":false,
         "validationErr":null,
         "blockName":"email"
      }
   }
}
*/

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.status(405).json({ message: "Method not allowed" });
        return;
    }
    if (!req.body) {
        res.status(400).json({ message: "Bad request" });
        return;
    }

    const reqBody = JSON.parse(req.body);

    if (!reqBody.answers?.email?.value) {
        res.status(400).json({ message: "Bad request" });
        return;
    }

    const emailRes = await validate(reqBody.answers.email.value);

    if (
        !emailRes.validators.regex?.valid ||
        !emailRes.validators.disposable?.valid ||
        !emailRes.validators.mx?.valid
    ) {
        res.status(400).json({ message: "Please enter a valid email address" });
        return;
    }

    dotenv.config();
    const { AUTH_TOKEN, BASE_URL } = process.env;

    if (!AUTH_TOKEN || !BASE_URL) {
        res.status(500).json({ message: "Server error" });
        return;
    }
    const api = new Api({
        baseURL: BASE_URL,
        headers: {
            "xc-token": AUTH_TOKEN, // Or with xc-token
        },
    });

    const DBRes = await api.dbTableRow.create("noco", "Turbocore Alpha", "Signups", {
        "First Name": reqBody.answers.name.value,
        "Email": reqBody.answers.email.value,
        "Use case": reqBody.answers.usage.value.join(","),
    });

    if (DBRes.isAxiosError) {
        res.status(500).json({ message: "Server error" });
        return;
    }

    res.status(200).json({ success: true })
}
