/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// eslint-disable-next-line
async function addUser(email: string | any, password: string | any) {
  const salt: any = process.env.NEXT_PUBLIC_SALT;
  let hashPass: string;
  bcrypt.hash(password, Number(salt), async (err, hash) => {
    hashPass = hash;
    // eslint-disable-next-line
    const createUser = await prisma.user.create({
      data: {
        username: email,
        passwords: hashPass,
      },
    });
  });
}
async function checkUser(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      username: email,
    },
  });
  return user;
}

const addUserData = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await checkUser(req.body.username);
  if (result) {
    return res.status(400).json({
      message: 'user already exist',
    });
  }

  addUser(req.body.username, req.body.password)
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return res.status(200).json({
    message: 'create success',
  });
};

export default (req: NextApiRequest, res: NextApiResponse): any => {
  switch (req.method) {
    case 'GET':
      return res.status(400).json({ message: 'wrong method' });

    case 'POST':
      return addUserData(req, res);

    case 'PUT':
      return res.status(400).json({ message: 'wrong method' });

    case 'DELETE':
      return res.status(400).json({ message: 'wrong method' });

    default:
      return res.status(400).json({ message: 'wrong method' });
  }
};
