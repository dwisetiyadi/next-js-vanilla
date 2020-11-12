# Tutorial jika ingin memakai prisma dengan next.js
1. Dari boilerplate Next.js NUTT git clone<br/>
2. <code>yarn install</code>(hapus ' di package.json kalau windows)<br/>
3. Install prisma dengan<br/>
    <code>yarn add @prisma/client<br/>
    -yarn add @prisma/cli -D<br/></code>
4. Init prisma gunakan <code>yarn prisma init</code> yang menghasilkan folder prisma isinya .env dan schema.prisma<br/>
5. Di dalam file <code>prisma/.env</code> rubah kode dibawah ini sesuai yang ditandai (user menjadi username,dsb), default schema itu public)<br/>
<pre><code> mysql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public</code></pre>
6. Buat file schema.sql dan kemudian load file sql tersebut ke dalam database, Berikut contoh query:
<pre><code>CREATE TABLE Users (
    id int AUTO_INCREMENT PRIMARY key,
    username VARCHAR(255) NOT NULL,
    passwords VARCHAR(255) NOT NULL
);
</code></pre><br/>
7. ketik <code> npx prisma introspect</code> untuk introspect data dari schema.sql untuk diupdate di schema.prisma.<br/>
8. ketik <code>npx prisma generate</code> untuk generate node modules prisma client<br/>
9. buat file ts di pages/api(contohnya pages/api/hello.ts)<br/>
10. buat route sesuai tutorial next (misalnya di file api buat <code>getuser.ts</code>) <br/>
11. isi routenya dengan contoh sperti ini(tidak fix bisa dibentuk sesuai keinginan diluar prisma dan async function main).<br/>
## Contoh Code:
<pre><code>
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
let Users: unknown;
async function main() {
  Users = await prisma.user.findMany();
}

const getuser = (req: NextApiRequest, res: NextApiResponse): void => {
    main()
      .catch((e) => {
        res.status(400).json({
          error: e,
        });
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    res.status(200).json({
      data: Users,
    });
};

export default getuser;
</code></pre>
12. Setelah bisa maka anda bisa akses API nya dengan cara di tutorial next.js misalnya <code>http://localhost:3000/api/getuser</code>