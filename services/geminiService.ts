import { GoogleGenAI } from "@google/genai";
import { RelationshipType } from '../types';

const getGeminiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateWeddingWish = async (
  relationship: RelationshipType,
  senderName: string,
  coupleName: string = "Tuấn Anh & Kiều Anh"
): Promise<string> => {
  const ai = getGeminiClient();
  if (!ai) return "Xin lỗi, hệ thống đang bận. Bạn hãy tự viết lời chúc nhé!";

  const prompt = `
    Bạn là một trợ lý đám cưới thông minh và tinh tế.
    Hãy viết một lời chúc đám cưới ngắn gọn (dưới 60 từ), cảm xúc và chân thành bằng tiếng Việt.
    
    Thông tin ngữ cảnh:
    - Người gửi lời chúc: ${senderName}
    - Mối quan hệ với cô dâu/chú rể: ${relationship}
    - Cặp đôi: ${coupleName}

    Yêu cầu:
    - Nếu là "Bạn thân", hãy viết giọng điệu vui vẻ, lầy lội một chút nhưng vẫn tình cảm.
    - Nếu là "Người thân" hoặc "Xã giao", hãy viết trang trọng và lịch sự.
    - Nếu là "Đồng nghiệp", hãy chúc thành công và hạnh phúc.
    - Chỉ trả về nội dung lời chúc, không thêm dẫn dắt.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Chúc hai bạn trăm năm hạnh phúc!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Chúc hai bạn trăm năm hạnh phúc! (Lỗi kết nối AI)";
  }
};