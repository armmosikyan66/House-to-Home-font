import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const {cookieName, cookieValue} = req.body;

    res.setHeader('Set-Cookie', `${cookieName}=${cookieValue}; Path=/`);
    res.status(200).json({ message: 'Cookie set successfully!' });
};

export default handler;