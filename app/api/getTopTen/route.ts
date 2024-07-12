import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    const getData =  async () => {
        const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?${process.env.CMC_API_KEY}`,
            {
                method: 'GET',
                headers: {
                    Accept: '*/*'
                },
            }
        )
        const data = await response.json();

        res.status(200).json({data});
    }

    getData()
}