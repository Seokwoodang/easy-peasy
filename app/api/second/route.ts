import { NextResponse } from "next/server";
import xml2js from "xml2js";

export const GET = async () => {
  try {
    const response = await fetch(
      "http://www.kopis.or.kr/openApi/restful/pblprfr?service=5a4212a55e514d2689c479c95a347937&stdate=20160601&eddate=20160630&cpage=1&rows=5"
    );

    const xmlData = await response.text();
    const parser = new xml2js.Parser();
    const jsonData = await parser.parseStringPromise(xmlData);

    return NextResponse.json(jsonData);
  } catch (error) {
    return NextResponse.json({
      error: "공연 정보를 불러오는데 실패했더라요~?",
    });
  }
};
