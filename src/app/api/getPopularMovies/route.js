// export default async function handler(req,res) {
//     try {
//         const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ja-JP`)
//         res.status(200).json(response.data);
//         console.log('取得した結果は...', response.data);
//     } catch (err) {
//         console.log(err);
//     }
// }

import { NextResponse } from "next/server";

// ユーザーリストを取得するAPI
export function GET() {
    return NextResponse.json([
        {
            id: 1,
            name: "山田 太郎",
        },
        {
            id: 2,
            name: "佐藤 次郎",
        },
    ]);
}