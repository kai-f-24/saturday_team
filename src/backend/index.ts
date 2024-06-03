import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());

app.get('/apiTest', (req: Request, res: Response) => {
  res.json({
    success: 'フロントとサーバ間の通信が成功しました🦭',
    text1: 'このメッセージはsrc/backend/index.ts内で設定したAPI(apiTest)にaxiosを使いゲットリクエストして取得したメッセージです🦭',
    text2: '取得したメッセージをuseStateを使い変数に格納し表示しています。'
  });
});

app.listen(port, () => {
  console.log(`ポート番号 : ${port}番でサーバーが立ち上がりました🐈`);
});