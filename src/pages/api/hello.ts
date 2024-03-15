import dotenv from "dotenv";
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
    return new Promise(async (resolve, reject) => {
        if (req.method !== "POST") {
            res.status(405).json({ message: "Method not allowed" });
            reject();
            return;
        }
        if (!req.body) {
            res.status(400).json({ message: "Bad request" });
            reject();
            return;
        }

        const reqBody = JSON.parse(req.body);

        if (!reqBody.answers?.email?.value) {
            res.status(400).json({ message: "Bad request" });
            reject();
            return;
        }

        const emailRes = await validate(reqBody.answers.email.value);

        if (
            !emailRes.validators.regex?.valid ||
            !emailRes.validators.disposable?.valid ||
            !emailRes.validators.mx?.valid
        ) {
            res.status(400).json({
                message: "Please enter a valid email address",
            });
            reject();
            return;
        }

        dotenv.config();
        const { AUTH_TOKEN, NOCO_ENDPOINT } = process.env;

        if (!AUTH_TOKEN || !NOCO_ENDPOINT) {
            res.status(500).json({ message: "Server error" });
            reject();
            return;
        }

        ({
            "First Name": reqBody.answers.name.value,
            Email: reqBody.answers.email.value,
            "Use case": reqBody.answers.usage.value.join(","),
        });

        fetch(NOCO_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "xc-auth": AUTH_TOKEN,
            },
            body: JSON.stringify({
                "First Name": reqBody.answers.name.value,
                Email: reqBody.answers.email.value,
                "Use case": reqBody.answers.usage.value.join(","),
            }),
        }).then((response) => {
            if (response.ok) res.status(200).json({ success: true });
            else {
                res.status(500).json({ message: "Server error" });
                console.error(response);
            }
        });
    });
}
